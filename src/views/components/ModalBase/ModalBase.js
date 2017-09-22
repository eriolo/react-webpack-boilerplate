import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const ModalBase = ({ isOpen, children, onRequestClose, className, overlayClassName }) => (
  <Modal
    isOpen={isOpen}
    className={className}
    overlayClassName={overlayClassName}
    closeTimeoutMS={300}
    onRequestClose={onRequestClose}
  >
    {children}
  </Modal>
);

ModalBase.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node,
  onRequestClose: PropTypes.func,
  className: PropTypes.string,
  overlayClassName: PropTypes.string,
};

export default ModalBase;
