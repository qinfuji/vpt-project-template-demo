export const entryTarget = {
  drop: (props, monitor, component) => {
    console.log('drop---->');
    //return {};
  },

  canDrop: (props, monitor) => {
    const {
      _editInfo: { editId },
    } = props;
    return monitor.getItem().id !== editId;
  },
};

export function collectTarget(connect, monitor) {
  return {
    isActive: monitor.isOver({ shallow: true }) && monitor.canDrop(),
    connectDropTarget: connect.dropTarget(),
  };
}
