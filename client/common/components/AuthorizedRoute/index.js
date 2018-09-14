import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class PrivateRoute extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('---->PrivateRoute', this.props);
    return <Route {...this.props} />;
  }
}

PrivateRoute.propTypes = {
  /**
   * 没有授权的路径
   */
  noMatch: PropTypes.any,
  /**
   * 权限名称
   */
  permission: PropTypes.string,
};
