import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as dvaCore from 'dva-core';
import 'babel-polyfill';

import Root from './root';

import './less/metro.less';
import './less/metro-colors.less';
import './less/metro-icons.less';
import './less/schemes/sky-net.less';
import modules from './modules';

function overrideCreateElement(replacement, callback) {
  var originalCreateElement = React.createElement;
  React.createElement = function(t, p, c) {
    var args = [].slice.call(arguments);
    return replacement.apply(null, [originalCreateElement].concat(args));
  };
  callback();
  React.createElement = originalCreateElement;
}

function render(Component, props, targetDOMNode, callback) {
  //var fetchedFragments = reactData;
  overrideCreateElement(
    function(originalCreateElement, type, props, children) {
      var args = [].slice.call(arguments, 1);
      //console.log('--->type', type);
      return originalCreateElement.apply(null, args);
    },
    function() {
      Object.assign(props, { createElement: React.createElement });
      ReactDOM.render(
        React.createElement(Component, props),
        targetDOMNode,
        callback
      );
    }
  );
}

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
        <Route path="/" component={Root} />
      </BrowserRouter>
    </Provider>
  );
}

render(_Root, {}, root);

if (module.hot) {
  module.hot.accept();
}
