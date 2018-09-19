import ReactDOM from 'react-dom';

export const entrySource = {
  beginDrag: (props, monitor, component) => {
    const dragItemDom = ReactDOM.findDOMNode(component); //eslint-disable-line
    const dragParentDom = dragItemDom.parentNode;
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
    const item = { editId: editId, dragItemDom, dragParentDom, domIndex };
    return item;
  },

  endDrag: (props, monitor, component) => {
    if (!monitor.didDrop()) {
      return;
    }
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    //console.log(item.id, dropResult);
  },
};

export function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    connectDragPreview: connect.dragPreview(),
  };
}
