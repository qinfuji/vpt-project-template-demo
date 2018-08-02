import * as React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './style.scss';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import Comp3 from './components/Comp3';

class MyFirstPage extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
  };

  handleClick = () => {
    let { dispatch } = this.props;
    dispatch({ type: 'test/message', payload: { value: 'test value' } });
  };
  render() {
    console.log('test render');
    let { value } = this.props;
    return (
      <React.Fragment>
        <button
          type="button"
          onClick={this.handleClick}
          className={styles.root}
        >
          {value}
        </button>
        <Comp1 />
        <Comp2 />
        <Comp3 title="asss" />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { value: state.test.value, comp1: state.comp1, comp2: state.comp2 };
}
export default connect(mapStateToProps)(MyFirstPage);
