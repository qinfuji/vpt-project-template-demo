import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';

export class Auth extends React.PureComponent {
  render() {
    let { children, login, userInfo } = this.props;
    if (userInfo) {
      return <React.Fragment>{login}</React.Fragment>;
    } else {
      return <React.Fragment>{children}</React.Fragment>;
    }
  }
}

Auth.propTypes = {
  children: PropTypes.element,
  /** 登录组件 */
  login: PropTypes.element,
  /**用户信息 */
  userInfo: PropTypes.object,
};

function mapStateToProps(state) {
  return { userInfo: state.app.userInfo };
}
export default connect(mapStateToProps)(Auth);
