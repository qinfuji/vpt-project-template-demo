import React from 'react';
import Login from './Login';
import Authentication from '../components/Auth';
import Index from './Index';
import Router from '../components/Router';
import PrivateRoute from '../components/AuthorizedRoute';

export default function App() {
  return (
    <Router>
      <PrivateRoute path="/" component={Index} permission="index" />
    </Router>
  );
}
