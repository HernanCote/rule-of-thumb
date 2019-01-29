/* eslint no-console: 0 */
/* eslint no-undef: 0 */
import React, { Component } from 'react';

class InformationBox extends Component {
  state = { visible: '' };

  handleCloseClick = () => {
    this.setState({ visible: 'none' });
  };

  render() {
    return (
      <article
        className='information-box home__information container'
        style={{ display: this.state.visible }}
      >
        <div className='information-box__sub-text'>
          <div>Speak Out. Be Heard.</div>
          <div>Be Counted</div>
        </div>
        <div className='information-box__sub-info'>
          Rule of Thumb is a crowd sourced court of public opinion where anyone
          and everyone and everyone can speak out and speak freely. It&apos;s
          easy: You share your opinion , we analyze and put the data in a publir
          report
        </div>
        <div className='information-box__close' onClick={this.handleCloseClick}>
          <i className='fas fa-times' />
        </div>
      </article>
    );
  }
}

export default InformationBox;
