import * as React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from '../style.scss';

class Comp2 extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
  };

  handleClick = () => {
    let { dispatch } = this.props;
    dispatch({ type: 'test/message', payload: { value: 'component2 click' } });
  };
  render() {
    console.log('comp2 render');
    let { value } = this.props;
    return (
      <button type="button" onClick={this.handleClick} className={styles.root}>
        {value}
      </button>
    );
  }
}

function mapStateToProps(state) {
  return { value: state.comp2.value };
}
export default connect(mapStateToProps)(Comp2);
