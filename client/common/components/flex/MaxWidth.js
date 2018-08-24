import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 0 2rem;
  width: 100%;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: ${props => props.width}px;
`;

function MaxWidth({ children, width = 1280, className }) {
  return (
    <Container>
      <InnerContainer className={className} width={width}>
        {children}
      </InnerContainer>
    </Container>
  );
}

MaxWidth.propTypes = {
  children: PropTypes.element.isRequired,
  width: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default MaxWidth;
