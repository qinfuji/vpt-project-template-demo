import ReactDOM from 'react-dom';

export const entrySource = {
  beginDrag: (props, monitor, component) => {
    const dragItemDom = ReactDOM.findDOMNode(component); //eslint-disable-line
    const dragParentDom = dragItemDom.parentNode;
    const dragItemNxtSibling = dragItemDom.nextSibling;
    const childNodes = dragParentDom.childNodes;
    let domIndex = -1;
    for (let i = 0; i < childNodes.length; i++) {
      const item = childNodes[i];
      if (item === dragItemDom) {
        domIndex = i;
      }
    }
    const {
      _editInfo: { editId },
    } = props;
    const item = {
      editId: editId,
      dragItemDom,
      dragParentDom,
      domIndex,
      dragItemNxtSibling,
    };
    return item;
  },

  endDrag: (props, monitor, component) => {
    if (monitor.didDrop()) {
      console.log('endDrag');
      const item = monitor.getItem();
      //const dropResult = monitor.getDropResult();
      //console.log(dropResult);
      //if (!dropResult) {
      if (!item.dragItemNxtSibling) {
        item.dragParentDom.appendChild(item.dragItemDom);
      } else {
        item.dragParentDom.insertBefore(
          item.dragItemDom,
          item.dragItemNxtSibling
        );
      }
      //}
      return;
    }
  },
};

export function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    connectDragPreview: connect.dragPreview(),
  };
}
