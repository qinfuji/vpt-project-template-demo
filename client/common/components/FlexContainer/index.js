import React from 'react';
import PropTypes from 'prop-types';

export default function FlexContainer(props) {
  return <div>{props.children}</div>;
}

FlexContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

FlexContainer.defaultProps = {};
