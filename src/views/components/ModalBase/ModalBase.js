import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ModalBase.scss';

class ModalBase extends Component {
  static lockBody() {
    document.body.classList.add(s.lock);
  }

  static unlockBody() {
    document.body.classList.remove(s.lock);
  }

  constructor(props) {
    super(props);
    this.preventScrollableBackground = this.preventScrollableBackground.bind(this);
    this.setBodyTopPosition = this.setBodyTopPosition.bind(this);
    this.resetBodyTopPosition = this.resetBodyTopPosition.bind(this);

    this.scrollYBeforeModalOpen = 0;
    this.bodyTopValue = '';
  }

  componentDidMount() {
    const { isOpen, scrollableBackground } = this.props;
    this.preventScrollableBackground(isOpen, scrollableBackground);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props === nextProps) {
      return;
    }
    if (this.props.isOpen === nextProps.isOpen) {
      return;
    }
    this.preventScrollableBackground(nextProps.isOpen, nextProps.scrollableBackground);
  }

  preventScrollableBackground(isOpen, scrollableBackground) {
    if (scrollableBackground) {
      return;
    }

    if (isOpen) {
      this.scrollYBeforeModalOpen = window.scrollY;
      // ModalBase.lockBody();
      this.setBodyTopPosition();
    } else {
      // ModalBase.unlockBody();
      this.resetBodyTopPosition();
      window.scroll(0, this.scrollYBeforeModalOpen);
    }
  }

  setBodyTopPosition() {
    this.bodyTopValue = document.body.style.top;
    console.log('this.bodyTopValue', this.bodyTopValue);
    document.body.style.top = `-${this.contentScrollYPosBeforeModalOpen}px`;
  }

  resetBodyTopPosition() {
    document.body.style.top = this.bodyTopValue;
  }

  render() {
    const { isOpen, children, onRequestClose, className, overlayClassName } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        className={className}
        overlayClassName={overlayClassName}
        closeTimeoutMS={300}
        onRequestClose={onRequestClose}
        contentLabel="Modal"
      >
        {children}
      </Modal>
    );
  }
}

ModalBase.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node,
  onRequestClose: PropTypes.func,
  className: PropTypes.shape({}),
  overlayClassName: PropTypes.shape({}),
  scrollableBackground: PropTypes.bool
};

export default withStyles(s)(ModalBase);
