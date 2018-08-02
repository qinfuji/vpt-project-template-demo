import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export const withEdit = () => ComponentToWrap => {
  class ConnectEdit extends Component {
    componentDidMount() {
      // Get current node
      let currentNode = ReactDOM.findDOMNode(this);
      // Get parent node
      let parentNode = currentNode.parentNode;
      // Create the comment to insert before
      let commentBefore = document.createComment('Begin Tag');
      parentNode.insertBefore(commentBefore, currentNode);
      // Create the comment to insert after
      let commentAfter = document.createComment('End Tag');
      parentNode.insertBefore(commentAfter, currentNode.nextSibling);
    }

    render() {
      const combinedProps = {
        ...ComponentToWrap.defaultProps,
        ...this.props,
      };
      console.log(combinedProps.__id);
      console.log(ComponentToWrap.name);
      return <ComponentToWrap {...combinedProps} />;
    }
  }

  return ConnectEdit;
};

export default withEdit;
