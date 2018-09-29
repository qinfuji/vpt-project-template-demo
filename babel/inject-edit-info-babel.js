const crypto = require('crypto');
const fs = require('fs');
const nodePath = require('path');

const TRACE_ID = '_editInfo';
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

  function isCustomerDir(filepath) {
    return /client\/(pages|modals|components)/.test(filepath);
  }

  function pre() {
    this.editables = [];
  }

  function post() {
    this.editables.length = 0;
    this.editables = null;
  }

  const visitor = {
    ImportDeclaration(path, state) {
      if (!state.filename && !isCustomerDir(state.filename)) {
        return;
      }

      const sourceLiteral = path.node.source;
      let moduleId = sourceLiteral.value; // 模块id
      const curFileDir = nodePath.dirname(state.filename);
      if (/^(\.\.?|\/)/.test(moduleId)) {
        // 相对路径需要计算出绝对路径
        moduleId = nodePath.resolve(curFileDir, moduleId);
      }
      const modulePath = require.resolve(moduleId); // module的绝对路径
      const moduleDir = nodePath.dirname(modulePath);

      try {
        const editPath = require.resolve(moduleDir + '/edit');
        if (editPath === state.filename) {
          return;
        }
        sourceLiteral.value += '/edit';
        const defaultImportName = path.node.specifiers[0].local.name;
        this.editables.push(defaultImportName); // 组件默认的到处变量名
        this.editPath.push(require.resolve(editPath));
      } catch (err) {} //eslint-disable-line
    },
    JSXOpeningElement(path, state) {
      if (!state.filename && !isCustomerDir(state.filename)) {
        // 只有自定义组件才需要修改
        return;
      }

      const id = t.jsxIdentifier(TRACE_ID);
      const location = path.container.openingElement.loc;
      const tagName = path.node.name.name;
      if (this.editables.indexOf(tagName) < 0) {
        // 可编辑的组件才需要注入
        return;
      }
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
    pre,
    visitor,
    post,
  };
};
