import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'dva';
import { ThemeProvider } from 'styled-components';
import colors from './themes/colors';
import Layout from './layouts';
import EditPage from './pages/EditPage';
import Login from './pages/Login';

function Root({ userInfo }) {
  //return <Layout __id="aaa" />;
  return (
    <ThemeProvider theme={colors}>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Layout} />
          <Route exact path="/edit/:path" component={EditPage} />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  userInfo: PropTypes.object, //eslint-disable-line
};

function mapStateToProps(state) {
  return { userInfo: state.app.userInfo };
}
export default connect(mapStateToProps)(Root);
