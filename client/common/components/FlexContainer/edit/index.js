import React from 'react';
import ReactDOM from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import _ from 'lodash';
import FlexContainer from '..';
import { measure, Measured } from 'remeasure';
import Overlay from './overlay';
import { collectSource, entrySource } from './drag-source';
import { collectTarget, entryTarget } from './drop-target';

let zIndex = 0;

const editable = WrapConponent => {
  class EditConnect extends React.Component {
    constructor(props) {
      super(props);
      this._overlay = React.createRef();
      this._wrap = React.createRef();
      this._zIndex = ++zIndex;
      this.state = {
        selected: props.editable || true,
      };
    }

    componentWillUnmount() {}

    componentDidMount() {
      const {
        connectDragSource,
        connectDropTarget,
        connectDragPreview,
      } = this.props;
      connectDragSource(ReactDOM.findDOMNode(this._overlay.current)); //eslint-disable-line
      connectDropTarget(ReactDOM.findDOMNode(this._overlay.current)); //eslint-disable-line
      connectDragPreview(ReactDOM.findDOMNode(this._wrap.current)); //eslint-disable-line
    }

    render() {
      const { selected } = this.state;
      const {
        _editInfo: { editId },
        isActive,
        style = {},
        isDragging,
      } = this.props;
      let overlayStyle = {};
      overlayStyle['border'] = '0';
      if (isActive) {
        overlayStyle['border'] = '2px dotted #785';
      }
      overlayStyle['opacity'] = isDragging ? 0 : 1;

      return React.createElement(
        WrapConponent,
        { ...this.props, ref: this._wrap, style: style },
        [
          this.props.children,
          selected && (
            <Overlay
              key="overlay"
              editId={editId}
              ref={this._overlay}
              zIndex={this._zIndex}
              style={overlayStyle}
            />
          ),
        ]
      );
    }
  }
  return DropTarget('FlexContainer', entryTarget, collectTarget)(
    DragSource('FlexContainer', entrySource, collectSource)(EditConnect)
  );
};

export default editable(FlexContainer);
