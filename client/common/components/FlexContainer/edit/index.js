import React from 'react';
import ReactDOM from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import _ from 'lodash';
import FlexContainer from '..';
import Overlay from './overlay';
import { collectSource, entrySource } from './drag-source';
import { collectTarget, entryTarget } from './drop-target';

const editable = WrapConponent => {
  class EditConnect extends React.Component {
    constructor(props) {
      super(props);
      this._overlay = React.createRef();
      this._wrap = React.createRef();
      this.state = {
        selected: props.editable || true,
      };
    }

    componentWillUnmount() {}

    componentDidMount() {
      const { connectDragSource, connectDropTarget } = this.props;
      connectDragSource(ReactDOM.findDOMNode(this._overlay.current)); //eslint-disable-line
      connectDropTarget(ReactDOM.findDOMNode(this._overlay.current)); //eslint-disable-line
      //console.log(ReactDOM.findDOMNode(this._wrap.current)); //eslint-disable-line
    }

    render() {
      const { selected } = this.state;
      const {
        _editInfo: { editId },
        isActive,
        style = {},
      } = this.props;
      if (isActive) {
        style['border'] = '1px dotted #785';
      }
      return React.createElement(
        WrapConponent,
        { ...this.props, ref: this._wrap, style },
        [
          this.props.children,
          // selected && (
          //   <Overlay key="overlay" editId={editId} ref={this._overlay} />
          // ),
        ]
      );
    }
  }
  return DropTarget('FlexContainer', entryTarget, collectTarget)(
    DragSource('FlexContainer', entrySource, collectSource)(EditConnect)
  );
};

export default editable(FlexContainer);
