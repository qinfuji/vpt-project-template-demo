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
      let commentBefore = document.createComment(
        'Begin Tag ' + ComponentToWrap.name
      );
      parentNode.insertBefore(commentBefore, currentNode);
      // Create the comment to insert after
      let commentAfter = document.createComment(
        'End Tag ' + ComponentToWrap.name
      );
      parentNode.insertBefore(commentAfter, currentNode.nextSibling);
    }

    render() {
      const combinedProps = {
        ...ComponentToWrap.defaultProps,
        ...this.props,
      };
      return <ComponentToWrap {...combinedProps} />;
    }
  }

  return ConnectEdit;
};

export default withEdit;
