import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import { create as dva } from 'dva-core';
import { createLogger } from 'redux-logger';
import Login from './pages/Login';
import Authentication from './components/Auth';
import Index from './pages/Index';
import Router from './common/components/Router';
import PrivateRoute from './common/components/AuthorizedRoute';
import Modal from './components/Modal';
import StoreProvider from './components/StoreProvider';
import ThemeProvider from './components/ThemeProvider';
import colors from './common/chemes/colors';

const app = dva({}, {});
app.use({ onAction: createLogger({}) });
app.start();

function App() {
  return (
    <StoreProvider store={app._store}>
      <ThemeProvider theme={colors}>
        <Authentication login={Login}>
          <Router>
            <PrivateRoute path="/" component={Index} permission="index" />
          </Router>
          <Modal config="" />
        </Authentication>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default DragDropContext(HTML5Backend)(App);
