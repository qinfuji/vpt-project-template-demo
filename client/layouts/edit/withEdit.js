import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export const withEdit = () => ComponentToWrap => {
  class ConnectEdit extends Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      let { __id } = this.props;
      // Get current node
      let currentNode = ReactDOM.findDOMNode(this);
      // Get parent node
      let parentNode = currentNode.parentNode;

      // Create the comment to insert before
      let commentBefore = document.createComment(
        'Begin Tag ' + ComponentToWrap.name + ' ' + __id
      );
      parentNode.insertBefore(commentBefore, currentNode);
      // Create the comment to insert after
      let commentAfter = document.createComment(
        'End Tag ' + ComponentToWrap.name + ' ' + __id
      );
      parentNode.appendChild(commentAfter);

      //parentNode.insertBefore(commentAfter, currentNode.nextSibling);
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
