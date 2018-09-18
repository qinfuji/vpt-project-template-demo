import ReactDOM from 'react-dom';

export const entrySource = {
  beginDrag: (props, monitor, component) => {
    const dragDom = ReactDOM.findDOMNode(component); //eslint-disable-line
    const dragParentDom = dragDom.parentNode;

    console.log(dragDom);
    console.log(dragParentDom.children);
    const {
      _editInfo: { editId },
    } = props;
    const item = { editId: editId, dragDom };
    return item;
  },
  canDrag: props => {
    return true;
  },
  isDragging: (props, monitor) => {
    const {
      _editInfo: { editId },
    } = props;
    return monitor.getItem().editId === editId;
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
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging(),

    connectDragPreview: connect.dragPreview(),
  };
}
