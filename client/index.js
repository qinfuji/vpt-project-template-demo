import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as dvaCore from 'dva-core';
import 'babel-polyfill';
import App from './pages/App';
import modules from './store/modules';

let root = document.getElementById('react-root');
if (!root) {
  root = document.createElement('div');
  root.id = 'react-root';
  document.body.appendChild(root);
}

const app = dvaCore.create({}, {});
modules.forEach(module => {
  app.model(module);
});
app.start();

function _Root() {
  return (
    <Provider store={app._store}>
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(_Root, root);

if (module.hot) {
  module.hot.accept();
}
