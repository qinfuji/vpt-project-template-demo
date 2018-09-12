/**
 * This adds {fileName, lineNumber} annotations to React component definitions
 * and to jsx tag literals.
 *
 *
 * == JSX Literals ==
 *
 * <sometag />
 *
 * becomes:
 *
 * var __jsxFileName = 'this/file.js';
 * <sometag __source={{fileName: __jsxFileName, lineNumber: 10}}/>
 */
const crypto = require('crypto');

const TRACE_ID = 'edit-info';
const FILE_NAME_VAR = '_jsxFileName1';

module.exports = function Plugin(args) {
  // api.assertVersion(7);
  const { types: t } = args;
  function makeTrace(editId, fileNameIdentifier, lineNumber, locstartNumber) {
    const editIdLiteral = t.stringLiteral(editId);

    const fileLineLiteral =
      lineNumber != null ? t.numericLiteral(lineNumber) : t.nullLiteral();

    const locstartLiteral =
      locstartNumber != null
        ? t.numericLiteral(locstartNumber)
        : t.nullLiteral();

    const fileNameProperty = t.objectProperty(
      t.identifier('fileName'),
      fileNameIdentifier
    );

    const lineNumberProperty = t.objectProperty(
      t.identifier('lineNumber'),
      fileLineLiteral
    );

    const startNumberProperty = t.objectProperty(
      t.identifier('locstart'),
      locstartLiteral
    );

    const editIdProperty = t.objectProperty(
      t.identifier('editId'),
      editIdLiteral
    );
    return t.objectExpression([
      fileNameProperty,
      lineNumberProperty,
      startNumberProperty,
      editIdProperty,
    ]);
  }

  const visitor = {
    JSXOpeningElement(path, state) {
      const id = t.jsxIdentifier(TRACE_ID);
      const location = path.container.openingElement.loc;

      if (!location) {
        // the element was generated and doesn't have location information
        return;
      }
      const attributes = path.container.openingElement.attributes; // eslint-disable-line
      for (let i = 0; i < attributes.length; i++) {
        const name = attributes[i].name; // eslint-disable-line
        if (name && name.name === TRACE_ID) {
          // The __source attibute already exists
          return;
        }
      }
      let hashContent = '';
      if (!state.fileNameIdentifier) {
        const fileName = state.filename || '';
        hashContent = fileName;
        const fileNameIdentifier = path.scope.generateUidIdentifier(
          FILE_NAME_VAR
        );
        const scope = path.hub.getScope();
        if (scope) {
          scope.push({
            id: fileNameIdentifier,
            init: t.stringLiteral(fileName),
          });
        }
        state.fileNameIdentifier = fileNameIdentifier; // eslint-disable-line
      }
      hashContent += location.start.line;
      hashContent += location.start.column;

      const editId = crypto
        .createHash('sha1')
        .update(hashContent, 'utf-8')
        .digest('hex');
      const trace = makeTrace(
        editId,
        state.fileNameIdentifier,
        location.start.line,
        location.start.column
      );
      attributes.push(t.jsxAttribute(id, t.jsxExpressionContainer(trace)));
    },
  };

  return {
    visitor,
  };
};
