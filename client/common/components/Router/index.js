import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

export default class Router extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <BrowserRouter {...this.props} />;
  }
}
