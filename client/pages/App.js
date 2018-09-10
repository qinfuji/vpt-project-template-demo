import React from 'react';
import Login from './Login';
import Authentication from '../components/Auth';
import Index from './Index';
import Router from '../common/components/Router';
import PrivateRoute from '../common/components/AuthorizedRoute';
import Modal from '../components/Modal';

export default function App() {
  return (
    <Authentication login={Login}>
      <Router>
        <PrivateRoute path="/" component={Index} permission="index" />
      </Router>
      <Modal config="" />
    </Authentication>
  );
}
