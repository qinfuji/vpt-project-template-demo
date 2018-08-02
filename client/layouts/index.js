import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
//import { Route } from 'react-router-dom';
import Head from '../components/Head';
import SideMenu from '../components/SideMenu';
import withEdit from './edit/withEdit';

function Layout({ menus, match }) {
  return (
    <React.Fragment>
      <Head />
      <SideMenu menus={menus} />
      {/*<Route exact path={match.path} component={MyFirstPage} />*/}
    </React.Fragment>
  );
}

Layout.propTypes = {
  history: PropTypes.object, //eslint-disable-line
  match: PropTypes.object, //eslint-disable-line
  menus: PropTypes.object, //eslint-disable-line
};

function mapStateToProps(state) {
  return { menus: state.app.menus };
}
export default connect(mapStateToProps)(withEdit()(Layout));
