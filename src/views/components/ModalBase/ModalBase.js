import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Modal from 'react-modal';
import s from './ModalBase.scss';

const ModalBase = ({ isOpen, children, onRequestClose }) => (
  <Modal
    isOpen={isOpen}
    className={{
      base: s.content,
      afterOpen: s.contentAfterOpen,
      beforeClose: s.contentBeforeClose
    }}
    overlayClassName={{
      base: s.overlay,
      afterOpen: s.overlayAfterOpen,
      beforeClose: s.overlayBeforeClose
    }}
    closeTimeoutMS={300}
    onRequestClose={onRequestClose}
  >
    {children}
  </Modal>
);

ModalBase.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node,
  onRequestClose: PropTypes.func
};

export default withStyles(s)(ModalBase);
