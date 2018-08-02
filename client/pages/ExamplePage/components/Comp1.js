import * as React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from '../style.scss';

class Comp1 extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
  };

  handleClick = () => {
    let { dispatch } = this.props;
    dispatch({ type: 'test/message', payload: { value: 'component1 click' } });
  };
  render() {
    console.log('comp1 render');
    let { value } = this.props;
    return (
      <button type="button" onClick={this.handleClick} className={styles.root}>
        {value}
      </button>
    );
  }
}

function mapStateToProps(state) {
  return { value: state.comp1.value };
}
export default connect(mapStateToProps)(Comp1);
