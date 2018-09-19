import React from 'react';
import ReactDOM from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import FlexContainer from '..';
import _ from 'lodash';
import Overlay from './overlay';
import { collectSource, entrySource } from './drag-source';
import { collectTarget, entryTarget } from './drop-target';

let zIndex = 9999;

const editable = WrapConponent => {
  class EditConnect extends React.Component {
    constructor(props) {
      super(props);
      this._overlay = React.createRef();
      this._wrap = React.createRef();
      this._zIndex = ++zIndex;
      this._childDomMap = {};
      this.state = {
        selected: props.editable || true,
      };
    }

    componentDidMount() {
      const { connectDragSource, connectDropTarget } = this.props;
      connectDragSource(ReactDOM.findDOMNode(this._wrap.current)); //eslint-disable-line
      connectDropTarget(ReactDOM.findDOMNode(this._wrap.current)); //eslint-disable-line
    }

    collectChildDom = index => element => {
      if (!element) {
        //当子组件销毁时ref为hull，需要清除引用关系
        delete this._childDomMap[index];
      } else {
        this._childDomMap[index] = ReactDOM.findDOMNode(element); //eslint-disable-line
      }
    };

    hover = () => {
      console.log('------------------>hover');
    };

    render() {
      const { selected } = this.state;
      const {
        _editInfo: { editId },
        isActive,
        style,
        isDragging,
      } = this.props;

      const children = this.props.children;
      const _children = [];
      if (_.isString(children)) {
        _children.push(children);
      } else {
        if (!Array.isArray(children)) {
          const _child = React.cloneElement(children, {
            ...children.props,
            _index: 1,
            key: 1,
            ref: this.collectChildDom(1),
          });
          _children.push(_child);
        } else {
          children.forEach((child, index) => {
            const _child = React.cloneElement(child, {
              ...child.props,
              _index: index,
              key: index, //eslint-disable-line
              ref: this.collectChildDom(index),
            });
            _children.push(_child);
          });
        }
      }
      selected &&
        _children.push(
          <Overlay
            key="overlay"
            editId={editId}
            ref={this._overlay}
            zIndex={this._zIndex}
            isDragging={isDragging}
            isOver={isActive}
          />
        );
      return React.createElement(
        WrapConponent,
        { ...this.props, ref: this._wrap, style: style, __hover: this.hover },
        _children
      );
    }
  }
  return DropTarget('FlexContainer1', entryTarget, collectTarget)(
    DragSource('FlexContainer1', entrySource, collectSource)(EditConnect)
  );
};

export default editable(FlexContainer);
