import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import { nextId, startPushNode, endPushNode } from '../../../utils/editable';
import FlexContainer from '../index';

const editable = options => WrapConponent => {
  let nextid = 0;
  /**
   * 判断当前组件是否有可编辑节点
   */
  function hasEditableChilds(compEle) {
    let children = compEle.props.children;
    if (!children || _.isString(children)) {
      return false;
    }
    if (!Array.isArray(children)) {
      children = [children];
    }
    for (let index = 0; index < children.length; index++) {
      const element = children[index];
      if (element.type.prototype instanceof EditConnect) {
        return true;
      }
      const hasEditable = hasEditableChilds(element);
      if (hasEditable) {
        return hasEditable;
      }
    }
    return false;
  }

  class EditConnect extends React.Component {
    constructor(props) {
      super(props);
      console.log('---------------_>', props.__source);
      this._root = React.createRef();
      this.id = nextId();
      const hasEditableChildren = hasEditableChilds(this);
      startPushNode({ id: this.id, hasEditableChildren: hasEditableChildren });
    }

    componentWillUnmount() {}

    componentDidMount() {
      const dom = ReactDOM.findDOMNode(this._root.current); //eslint-disable-line
      console.log('---------------_>1', this.props);
      endPushNode({ id: this.id, domNode: dom });
    }

    render() {
      console.log(this.props);
      return <WrapConponent {...this.props} ref={this._root} />;
    }
  }
  return EditConnect;
};

export default editable()(FlexContainer);
