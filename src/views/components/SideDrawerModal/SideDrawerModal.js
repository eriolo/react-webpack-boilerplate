import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ModalBase from '@views/components/ModalBase';
import s from './SideDrawerModal.scss';

const SideDrawerModal = ({ isOpen, children, onRequestClose }) => (
  <ModalBase
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
    onRequestClose={onRequestClose}
  >
    {children}
  </ModalBase>
);

SideDrawerModal.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node,
  onRequestClose: PropTypes.func
};

export default withStyles(s)(SideDrawerModal);
