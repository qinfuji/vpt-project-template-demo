import React from 'react';
import WrapedSplitPane from 'react-split-pane';

export default class SplitPane extends React.Component {
  render() {
    return (
      <WrapedSplitPane {...this.props}>{this.props.children}</WrapedSplitPane>
    );
  }
}
