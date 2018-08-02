import React from 'react';
import LoadableVisibility from 'react-loadable-visibility/react-loadable';
import styled, { keyframes } from 'styled-components';
import Centered from '../components/flex/Centered';
import LogoPng from './Logo.png';

import Login from './Login';

const animation = keyframes`
  0%, 10% { transform: rotateZ(0deg); }
  90%, 100% { transform: rotateZ(360deg); }
`;

const LogoContainer = styled.div`
  animation-name: ${animation};
  animation-duration: 800ms;
`;

function Logo({ width = 35, height = 35, className }) {
  return (
    <img
      className={className}
      src={LogoPng}
      width={width}
      height={height}
      alt="Logo"
    />
  );
}

function Loading() {
  return (
    <Centered style={{ height: '100vh' }} vertical horizontal>
      <LogoContainer>
        <Logo width={490} height={490} />
      </LogoContainer>
    </Centered>
  );
}

export default {
  mytest: LoadableVisibility({
    loader: () => import('./ExamplePage'),
    loading: Loading,
  }),
  mytest1: Login /*LoadableVisibility({
    loader: () => import('./Login'),
    loading: Loading,
  }),*/,
};
