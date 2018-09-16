import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Login from './Login';
import Authentication from '../components/Auth';
import Index from './Index';
import Router from '../common/components/Router';
import PrivateRoute from '../common/components/AuthorizedRoute';
import Modal from '../components/Modal';

function App() {
  return (
    <Authentication login={Login}>
      <Router>
        <PrivateRoute path="/" component={Index} permission="index" />
      </Router>
      <Modal config="" />
    </Authentication>
  );
}

export default DragDropContext(HTML5Backend)(App);
