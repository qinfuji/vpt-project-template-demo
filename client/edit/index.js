import React from 'react';
import ReactDOM from 'react-dom';
import HTML5Backend from 'react-dnd-html5-backend';
import { Route, Switch } from 'react-router-dom';
import { DragDropContext } from 'react-dnd';
import { create as dva } from 'dva-core';
import { createLogger } from 'redux-logger';
import _ from 'lodash';

import Authentication from '../components/Auth';
import StoreProvider from '../components/StoreProvider';
import ThemeProvider from '../components/ThemeProvider';
import colors from '../common/chemes/colors';
import Router from '../common/components/Router';
//import Toolsbar from './Toolsbar';
import routers from './routers';
import Modals from './modals';
import mode from './module';

const app = dva({}, {});
app.model(mode);
app.use({ onAction: createLogger({}) });
app.start();

function App() {
  return (
    <StoreProvider store={app._store}>
      <ThemeProvider theme={colors}>
        <Authentication>
          <Router>
            <Switch>
              {_.map(routers, (value, key) => {
                return <Route key={key} path={key} component={value} strict />;
              })}
            </Switch>
          </Router>
        </Authentication>
        <Modals />
      </ThemeProvider>
    </StoreProvider>
  );
}

const WrapComp = DragDropContext(HTML5Backend)(App);

let root = document.getElementById('react-root');
if (!root) {
  root = document.createElement('div');
  root.id = 'react-root';
  document.body.appendChild(root);
}

function _Root() {
  return <WrapComp />;
}

ReactDOM.render(_Root(), root);

if (module.hot) {
  module.hot.accept();
}
