import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'mobx-react';
import { Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import registerServiceWorker from './utilities/registerServiceWorker';
import requirePolyfills from './utilities/load-dynamic-polyfills';
import colors from './themes/colors';

import history from './utilities/history';
import controller from './controller';
import { Root } from './root';

requirePolyfills().then(() => {
  if (process.env.NODE_ENV === 'development') {
    window.controller = controller;
  }

  let root = document.getElementById('react-root');
  if (!root) {
    root = document.createElement('div');
    root.id = 'react-root';
    document.body.appendChild(root);
  }

  const showNotification = (message, type) =>
    controller.getSignal('notificationAdded')({
      type,
      message,
    });

  window.showNotification = showNotification;

  registerServiceWorker('/service-worker.js', {
    onUpdated: () => {
      controller.getSignal('setUpdateStatus')({ status: 'available' });
    },
    onInstalled: () => {
      showNotification(
        'CodeSandbox has been installed, it now works offline!',
        'success'
      );
    },
  });

  try {
    render(
      <AppContainer>
        <Provider {...controller.provide()}>
          <ThemeProvider theme={colors}>
            <Router history={history}>
              <Root />
            </Router>
          </ThemeProvider>
        </Provider>
      </AppContainer>,
      root
    );
  } catch (e) {
    //console.log(e);
  }
});

if (module.hot) {
  module.hot.accept();
}
