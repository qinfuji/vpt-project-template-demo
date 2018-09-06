import React, { Component } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
//import PropTypes from 'prop-types';

export default class ThemeProvider extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StyledThemeProvider {...this.props}>
        {this.props.children}
      </StyledThemeProvider>
    );
  }
}
