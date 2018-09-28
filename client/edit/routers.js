import Loadable from 'react-loadable';
import React from 'react';

/**
 * 所有组件的配置都在这里，为方便配置使用
 */

function Loading(props) {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}

export default {
  '/index': Loadable({
    loader: () => import(/* webpackChunkName: 'edit-index' */ '../pages/Index'),
    loading: Loading,
  }),

  '/login': Loadable({
    loader: () => import(/* webpackChunkName: 'edit-login' */ '../pages/Login'),
    loading: Loading,
  }),

  '/': Loadable({
    loader: () => import(/* webpackChunkName: 'edit-index' */ '../pages/Index'),
    loading: Loading,
  }),
};
