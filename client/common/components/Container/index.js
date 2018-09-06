import React from 'react';

export default class Container extends React.PureComponent {
  render() {
    return <div>{this.props.children}</div>;
  }
}
