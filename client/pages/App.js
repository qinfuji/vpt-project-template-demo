import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import colors from '../themes/colors';
import Login from './Login';
import Authentication from '../components/Auth';
import Index from './Index';

export default function App() {
  return (
    <ThemeProvider theme={colors}>
      <BrowserRouter>
        <Authentication login={Login}>
          <Route exact path="/" component={Index} />
        </Authentication>
      </BrowserRouter>
    </ThemeProvider>
  );
}
