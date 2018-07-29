import detectOldBrowser from './detect-old-browser';

export default function requirePolyfills() {
  if (detectOldBrowser()) {
    return import(/* webpackChunkName: 'polyfills' */ 'babel-polyfill');
  }

  return Promise.resolve();
}
