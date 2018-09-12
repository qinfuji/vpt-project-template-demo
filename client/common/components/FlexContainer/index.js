import React from 'react';
import PropTypes from 'prop-types';

class FlexContainer extends React.Component {
  render() {
    console.log('-------1>', this.props);
    return <div>{this.props.children}</div>;
  }
}

FlexContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

FlexContainer.defaultProps = {};

export default FlexContainer;
