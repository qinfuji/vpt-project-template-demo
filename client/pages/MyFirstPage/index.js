import * as React from 'react';
import PropTypes from 'prop-types';
import { state, signal } from 'cerebral/tags';
import { connect } from '@cerebral/react';

class MyFirstPage extends React.Component {
  static propTypes = {
    setValue: PropTypes.func,
    value: PropTypes.string,
  };

  handleClick = () => {
    let { setValue } = this.props;
    setValue();
  };
  render() {
    let { value } = this.props;
    return (
      <button type="button" onClick={this.handleClick}>
        {value}
      </button>
    );
  }
}

export default connect(
  {
    value: state`myFirstPage.value`,
    setValue: signal`myFirstPage.setValue`,
  },
  MyFirstPage
);
