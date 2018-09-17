import React from 'react';
import PropTypes from 'prop-types';

export default class Overlay extends React.Component {
  render() {
    return (
      <div
        editid={this.props.editId}
        style={Object.assign(
          {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: '100%',
            background: 'rgba(255, 255, 255, 0.05)',
            zIndex: this.props.zIndex,
          },
          this.props.style
        )}
      >
        {this.props.children}
      </div>
    );
  }
}

Overlay.prppTypes = {
  zIndex: PropTypes.number,
  style: PropTypes.any,
};

Overlay.defaultProps = {
  zIndex: 0,
  style: {},
};
