import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ModalBase from '@views/components/ModalBase';
import s from './About.scss';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }
  render() {
    return (
      <main className={s.container}>
        <h1>About</h1>
        <ModalBase
          isOpen={this.state.isModalOpen}
          onRequestClose={this.toggleModal}
        >
          <button onClick={this.toggleModal}>Close modal</button>
        </ModalBase>
        <button onClick={this.toggleModal}>Open modal</button>
      </main>
    );
  }
}

export default withStyles(s)(About);
