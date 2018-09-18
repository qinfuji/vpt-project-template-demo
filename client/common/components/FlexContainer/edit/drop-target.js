import ReactDOM from 'react-dom';

export const entryTarget = {
  drop: (props, monitor, component) => {
    return undefined;
  },

  hover: (props, monitor, component) => {
    if (monitor.canDrop()) {
      //console.log('hover props', props, component.props);
      const dropDomElement = ReactDOM.findDOMNode(component); //eslint-disable-line
      const dropElementRects = dropDomElement.getBoundingClientRect(); //获取当前drop的rect
      //如果drag的位置在drop的rect中，则不显示
      const dragItemInitPosition = monitor.getInitialSourceClientOffset();
      //如果在其中，讲drop分成３分，在前或后的区域则作为放置在当前drap的前或后，作为兄弟节点
      //如果容器是column这是上中下三部分，如果是row，则是左中右部分
      //flexContainer有默认大小和展开行为
      if (
        dropElementRects.left < dragItemInitPosition.x &&
        dropElementRects.rigth > dragItemInitPosition.x &&
        dropElementRects.top < dragItemInitPosition.y &&
        dropElementRects.bottom > dragItemInitPosition.y
      ) {
      }
    }
  },

  canDrop: (props, monitor) => {
    const {
      _editInfo: { editId },
    } = props;
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
