import React from 'react';
import PropTypes from 'prop-types';

class FlexContainer extends React.Component {
  render() {
    return (
      <div
        style={Object.assign(
          {
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: this.props.flexDirection,
            height: this.props.height,
            position: 'relative',
            flexGrow: this.props.width || this.props.height ? '' : 1,
            width: this.props.width ? this.props.width : '',
            backgroundColor: this.props.backgroundColor,
          },
          this.props.style
        )}
      >
        {this.props.children}
      </div>
    );
  }
}

FlexContainer.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexDirection: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  backgroundColor: PropTypes.string,
  style: PropTypes.any,
};

FlexContainer.defaultProps = {
  height: '100%',
  flexDirection: 'column',
  backgroundColor: 'transparent',
  style: {},
};

export default FlexContainer;
