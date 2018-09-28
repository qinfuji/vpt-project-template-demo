import React from 'react';
import { connect } from 'dva';
import Modal from './modal';

const modals = {};

function Modals({ store, dispatch }) {
  const modal = store.currentModal && modals[store.currentModal];

  const onClose = () => {
    dispatch({ type: 'ideState/closeModal' });
  };

  return (
    <Modal
      isOpen={Boolean(modal)}
      width={modal && modal.width}
      onClose={onClose}
    >
      {modal ? React.createElement(modal.Component) : null}
    </Modal>
  );
}

function mapStateToProps(state) {
  return { store: state.ideState };
}
export default connect(mapStateToProps)(Modals);
