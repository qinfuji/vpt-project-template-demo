import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

export default class RouterSwitch extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Switch {...this.props} />;
  }
}
