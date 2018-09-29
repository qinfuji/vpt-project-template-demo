import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  background: ${props =>
    props.isDragging ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0)'};
  border: ${props => (props.isOver ? '2px solid #785' : '')};
  z-index: ${props => props.zIndex};
  transition-duration: 0.4s;
  &:hover {
    background: rgba(59, 151, 227, 0.1);
    border: 1px solid #3b97e3;
    box-shadow: 0 12px 18px 0 rgba(0, 0, 0, 0.6),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
const control = styled.div``;

export default class Overlay extends React.Component {
  render() {
    return <Container {...this.props} />;
  }
}

Overlay.prppTypes = {
  zIndex: PropTypes.number,
  style: PropTypes.any,
  isDragging: PropTypes.bool,
  isOver: PropTypes.bool,
};

Overlay.defaultProps = {
  zIndex: 0,
  style: {},
  isDragging: false,
  isOver: false,
};
