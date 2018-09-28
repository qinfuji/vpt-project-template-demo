// import React from 'react';
// import ReactDOM from 'react-dom';
// import { DragSource, DropTarget } from 'react-dnd';
import FlexContainer from '..';
// import _ from 'lodash';
// import Overlay from './overlay';
// import { entrySource, collectSource } from './drag-source';
// import { entryTarget, collectTarget } from './drop-target';
// import { sortNumber } from './utils';
import editable from '../../../utils/editable';
// let zIndex = 9999;

// const editable = WrapConponent => {
//   class EditConnect extends React.Component {
//     constructor(props) {
//       super(props);
//       this._overlay = React.createRef();
//       this._wrap = React.createRef();
//       this._zIndex = ++zIndex;
//       this._childDomMap = {};
//       this._childPositions = [];
//       this.state = {
//         selected: props.editable || true,
//         hover: false,
//       };
//     }

//     componentDidMount() {
//       const { connectDragSource, connectDropTarget } = this.props;
//       connectDragSource(ReactDOM.findDOMNode(this._wrap.current)); //eslint-disable-line
//       connectDropTarget(ReactDOM.findDOMNode(this._wrap.current)); //eslint-disable-line
//     }

//     collectChildDom = index => element => {
//       if (!element) {
//         //当子组件销毁时ref为hull，需要清除引用关系
//         delete this._childDomMap[index];
//         const idx = this._childPositions.indexOf(index);
//         idx >= 0 && this._childPositions.splice(idx, 1);
//       } else {
//         this._childDomMap[index] = ReactDOM.findDOMNode(element); //eslint-disable-line
//         this._childPositions.push(index);
//       }
//     };

//     //鼠标移动到Drop上
//     hover = monitor => {
//       const dropDomElement = ReactDOM.findDOMNode(this._wrap.current); //eslint-disable-line
//       const dropElementRects = dropDomElement.getBoundingClientRect(); //获取当前drop的rect
//       const dragItem = monitor.getItem();
//       const dragItemDomElement = dragItem.dragItemDom;
//       const dragDomElementRects = dragItemDomElement.getBoundingClientRect();
//       const { flexDirection = 'column' } = this.props;
//       //drap在drag中，不做处理
//       if (
//         dragDomElementRects.left <= dropElementRects.left &&
//         dragDomElementRects.right >= dropElementRects.right &&
//         dragDomElementRects.top <= dropElementRects.top &&
//         dragDomElementRects.bottom >= dropElementRects.bottom
//       ) {
//         this.setState({ hover: false });
//         return;
//       }
//       this.setState({ hover: true });
//       const bothSidesRects = [];
//       if (flexDirection == 'row') {
//         //左右
//         bothSidesRects.push({
//           top: dropElementRects.top,
//           bottom: dropElementRects.bottom,
//           left: dropElementRects.left,
//           right: dropElementRects.left + +0.05 * dropElementRects.width,
//         });
//         bothSidesRects.push({
//           top: dropElementRects.top,
//           bottom: dropElementRects.bottom,
//           left: dropElementRects.right - 0.05 * dropElementRects.width,
//           right: dropElementRects.right,
//         });
//       } else {
//         //上下
//         bothSidesRects.push({
//           top: dropElementRects.top,
//           bottom: dropElementRects.top + 0.05 * dropElementRects.height,
//           left: dropElementRects.left,
//           right: dropElementRects.right,
//         });
//         bothSidesRects.push({
//           top: dropElementRects.bottom - 0.05 * dropElementRects.height,
//           bottom: dropElementRects.bottom,
//           left: dropElementRects.left,
//           right: dropElementRects.right,
//         });
//       }
//       //１、判断当前鼠标位置，如果在两端的位置，则插入到当前drop的父节点（不是drop的前就是后）
//       const pointPosition = monitor.getClientOffset(); //鼠标当前位置
//       if (!dropDomElement.parentNode) {
//         //这里直接插入drop,
//         return;
//       }
//       for (let i = 0; i < bothSidesRects.length; i++) {
//         let r = bothSidesRects[i];
//         if (
//           r.left <= pointPosition.x &&
//           r.right >= pointPosition.x &&
//           r.top <= pointPosition.y &&
//           r.bottom >= pointPosition.y
//         ) {
//           if (i == 0) {
//             //console.log('in both side rect before');
//             dropDomElement.parentNode.insertBefore(
//               dragItemDomElement,
//               dropDomElement
//             );
//             return;
//           } else {
//             //console.log('in both side rect after');
//             let nextSibling = dropDomElement.nextSibling;
//             if (!nextSibling) {
//               dropDomElement.parentNode.appendChild(dragItemDomElement);
//               return;
//             } else {
//               dropDomElement.parentNode.insertBefore(
//                 dragItemDomElement,
//                 nextSibling
//               );
//               return;
//             }
//           }
//         }
//       }
//       //如果是直接插入到drop中，则需要判断，他在子节点中的位置
//       dropDomElement.appendChild(dragItemDomElement);
//     };

//     render() {
//       const { selected } = this.state;
//       const {
//         _editInfo: { editId },
//         style,
//         isActive,
//         isDragging,
//       } = this.props;
//       const { hover } = this.state;
//       const children = this.props.children;
//       const _children = [];
//       if (children) {
//         if (_.isString(children)) {
//           _children.push(children);
//         } else {
//           if (!Array.isArray(children)) {
//             const _child = React.cloneElement(children, {
//               ...children.props,
//               _index: 1,
//               key: 1,
//               ref: this.collectChildDom(1),
//             });
//             _children.push(_child);
//           } else {
//             children.forEach((child, index) => {
//               const _child = React.cloneElement(child, {
//                 ...child.props,
//                 _index: index,
//                 key: index, //eslint-disable-line
//                 ref: this.collectChildDom(index),
//               });
//               _children.push(_child);
//             });
//           }
//         }
//       }
//       selected &&
//         _children.push(
//           <Overlay
//             key="overlay"
//             editId={editId}
//             ref={this._overlay}
//             zIndex={this._zIndex}
//             isDragging={isDragging}
//             isOver={hover && isActive}
//           />
//         );
//       return React.createElement(
//         WrapConponent,
//         { ...this.props, ref: this._wrap, style: style, __hover: this.hover },
//         _children
//       );
//     }
//   }

//   return DragSource('FlexContainer', entrySource, collectSource)(
//     DropTarget('FlexContainer', entryTarget, collectTarget)(EditConnect)
//   );
// };

// export default editable(FlexContainer);
export default editable({
  path: 'FlexContainer',
  operations: [
    { label: '测试1', name: 'test1', fn: () => {} },
    { label: '测试2', name: 'test2', fn: () => {} },
    { label: '测试3', name: 'test3', fn: () => {} },
  ],
})(FlexContainer);
