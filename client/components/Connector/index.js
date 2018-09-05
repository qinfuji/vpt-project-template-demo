import { connect } from 'dva';

export default mapStateToProps => ConnectedComponent => {
  return connect(mapStateToProps)(ConnectedComponent);
};
