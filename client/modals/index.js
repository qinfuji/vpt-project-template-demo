import React from 'react';
import Modal from '../components/Modal';
import connect from '../components/Connector';

const modals = {};

class Modals extends React.PureComponent {
  render() {
    let { currentModal } = this.props.global;
    const modal = currentModal && modals[currentModal];
    return (
      <Modal
        isOpen={Boolean(currentModal)}
        width={modal && modal.width}
        onClose={isKeyDown => signals.modalClosed({ isKeyDown })}
      >
        {modal ? React.createElement(modal.Component) : null}
      </Modal>
    );
  }
}

export default connect(state => {
  return { global: state.global };
});
