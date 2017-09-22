import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import SideDrawerModal from '@views/components/SideDrawerModal';
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
        <SideDrawerModal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.toggleModal}
        >
          <button onClick={this.toggleModal}>Close modal</button>
          <h1>Lorem ipsum</h1>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.</p>
          <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia consequuntur.</p>
          <p>Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
          qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
          <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
          nisi ut aliquid ex ea commodi consequatur</p>
          <h2>Sit amet</h2>
          <p>Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
          qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
          <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
          nisi ut aliquid ex ea commodi consequatur</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.</p>
          <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia consequuntur.</p>
        </SideDrawerModal>
        <button onClick={this.toggleModal}>Open modal</button>
      </main>
    );
  }
}

export default withStyles(s)(About);
