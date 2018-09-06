import * as React from 'react';
import PropTypes from 'prop-types';

export default class Auth extends React.PureComponent {
  render() {
    let { children, login: Login, userInfo } = this.props;
    if (userInfo) {
      return children;
    }
    return <Login />;
  }
}

Auth.propTypes = {
  children: PropTypes.element,
  /** 登录组件 */
  login: PropTypes.any,
  /**用户信息 */
  userInfo: PropTypes.object,
};
