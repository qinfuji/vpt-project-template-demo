import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FlexContainer from '../../common/components/FlexContainer';

export const styles = theme => {
  return {};
};

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <AppBar position="relative">
      //   <Toolbar>{this.props.children}</Toolbar>
      // </AppBar>
      <FlexContainer />
    );
  }
}

export default withStyles(styles)(Header);
