import React from 'react';
import ReactDOM from 'react-dom';
import 'minimal.css';
import '@babel/polyfill';
import App from './App';

let root = document.getElementById('react-root');
if (!root) {
  root = document.createElement('div');
  root.id = 'react-root';
  document.body.appendChild(root);
}

function _Root() {
  return <App />;
}

ReactDOM.render(_Root(), root);

if (module.hot) {
  module.hot.accept();
}
