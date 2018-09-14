import React from 'react';
import WrapedSplitPane from 'react-split-pane';
import './split-pane.css';

export default class SplitPane extends React.Component {
  render() {
    return (
      <div
        style={{
          position: 'relative',
          flexGrow: 1,
          width: '100%',
          height: '100%',
        }}
      >
        <WrapedSplitPane {...this.props}>{this.props.children}</WrapedSplitPane>
      </div>
    );
  }
}
