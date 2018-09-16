export const entrySource = {
  beginDrag: (props, monitor, component) => {
    const {
      _editInfo: { editId },
    } = props;
    const item = { id: editId };
    return item;
  },
  canDrag: props => {
    return true;
  },
  isDragging: (props, monitor) => {
    return monitor.getItem().editId === props.editId;
  },
  endDrag: (props, monitor, component) => {
    if (!monitor.didDrop()) {
      // You can check whether the drop was successful
      // or if the drag ended but nobody handled the drop
      return;
    }

    // When dropped on a compatible target, do something.
    // Read the original dragged item from getItem():
    const item = monitor.getItem();

    // You may also read the drop result from the drop target
    // that handled the drop, if it returned an object from
    // its drop() method.
    const dropResult = monitor.getDropResult();

    // This is a good place to call some Flux action
    console.log(item.id, dropResult.listId);
  },
};

export function collectSource(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging(),
  };
}
