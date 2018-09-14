import React from 'react';
import PropTypes from 'prop-types';

class FlexContainer extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: this.props.flexDirection,
          height: this.props.height,
          position: 'relative',
          flexGrow: this.props.width ? '' : 1,
          width: this.props.width ? this.props.width : '',
        }}
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
};

FlexContainer.defaultProps = {
  height: '100%',
  flexDirection: 'column',
};

export default FlexContainer;