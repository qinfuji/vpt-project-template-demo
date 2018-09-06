import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as dvaCore from 'dva-core';
import ThemeProvider from './components/ThemeProvider';
import colors from './common/chemes/colors';
import 'minimal.css';
import 'babel-polyfill';
import App from './pages/App';

let root = document.getElementById('react-root');
if (!root) {
  root = document.createElement('div');
  root.id = 'react-root';
  document.body.appendChild(root);
}

const app = dvaCore.create({}, {});
app.start();

function _Root() {
  return (
    <Provider store={app._store}>
      <ThemeProvider theme={colors}>
        <App />
      </ThemeProvider>
    </Provider>
  );
}

ReactDOM.render(_Root(), root);

if (module.hot) {
  module.hot.accept();
}
