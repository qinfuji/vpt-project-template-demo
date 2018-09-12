import React from 'react';
import ReactDOM from 'react-dom';
import { create as dva } from 'dva-core';
import { createLogger } from 'redux-logger';
import StoreProvider from './components/StoreProvider';
import ThemeProvider from './components/ThemeProvider';
import colors from './common/chemes/colors';
import 'minimal.css';
import '@babel/polyfill';
import App from './pages/App';

let root = document.getElementById('react-root');
if (!root) {
  root = document.createElement('div');
  root.id = 'react-root';
  document.body.appendChild(root);
}
const app = dva({}, {});
app.use({ onAction: createLogger({}) });
app.start();

function _Root() {
  return (
    <StoreProvider store={app._store}>
      <ThemeProvider theme={colors}>
        <App />
      </ThemeProvider>
    </StoreProvider>
  );
}

ReactDOM.render(_Root(), root, function() {
  console.log('finish');
});

if (module.hot) {
  module.hot.accept();
}
