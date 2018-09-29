import React from 'react';
import MuiButton from '@material-ui/core/Button';

export default class Button extends React.Component {
  render() {
    return <MuiButton {...this.props} />;
  }
}
