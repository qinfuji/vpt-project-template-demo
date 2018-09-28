import ReactDOM from 'react-dom';

export const entryTarget = {
  drop: (props, monitor, component) => {
    console.log('drop');
    return undefined;
  },

  hover: (props, monitor, component) => {
    if (!monitor.canDrop() || !monitor.isOver({ shallow: true })) return;
    if (component.hover) {
      component.hover(monitor);
    }
  },

  canDrop: (props, monitor) => {
    //console.log('canDrop', props);
    const {
      _editInfo: { editId },
    } = props;
    //console.log('canDrop props', props);
    // console.log('-------------------------');
    // //鼠标相对于浏览器左边的初始偏移
    // console.log('getInitialClientOffset', monitor.getInitialClientOffset());
    // //drag左边相对于浏览器的初始偏移
    // console.log(
    //   'getInitialSourceClientOffset',
    //   monitor.getInitialSourceClientOffset()
    // );
    // //鼠标相对浏览器的最后位置偏移
    // console.log('getClientOffset', monitor.getClientOffset());
    // //drap元素相对于初始位置的偏移
    // console.log(
    //   'getDifferenceFromInitialOffset',
    //   monitor.getDifferenceFromInitialOffset()
    // );
    // //drag左边相对于浏览器的最后移动偏移
    // console.log('getSourceClientOffset', monitor.getSourceClientOffset());
    return monitor.getItem().editId !== editId;
  },
};

export function collectTarget(connect, monitor) {
  return {
    isActive: monitor.isOver({ shallow: true }) && monitor.canDrop(),
    isOver: monitor.isOver(),
    isCurrentOver: monitor.isOver({ shallow: true }),
    connectDropTarget: connect.dropTarget(),
  };
}
