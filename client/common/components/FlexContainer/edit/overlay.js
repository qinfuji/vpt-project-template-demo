import React from 'react';

export default class Overlay extends React.Component {
  render() {
    return (
      <div
        editid={this.props.editId}
        style={{
          position: 'absolute',
          top: 0,
          border: '1px solid red',
          bottom: 0,
          left: 0,
          width: '20px',
          background: 'rgba(120, 170, 210, 0.7)',
          zIndex: 999,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
