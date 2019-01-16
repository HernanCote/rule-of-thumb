/* eslint no-undef: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CandidateBox extends Component {
  state = { positive: 0, negative: 0 };

  componentDidMount = () => {
    this.calculateWidths();
  };

  calculateWidths = () => {
    const { thumbsUp, thumbsDown } = this.props.candidate;
    const totalVotes = thumbsUp + thumbsDown;
    const positive = Math.ceil((thumbsUp / totalVotes) * 100);
    const negative = Math.ceil((thumbsDown / totalVotes) * 100);

    this.setState({ positive, negative });
  };

  render() {
    const { candidate } = this.props;
    const { positive, negative } = this.state;
    return (
      <div className='candidate-box'>
        <div
          className='candidate-box__container'
          style={{
            backgroundImage: `url(${require('../../../assets/' +
              candidate.imageUrl)})`
          }}
        >
          <div className='candidate-box__container__content'>
            <div className='content-info'>
              <div className='content-info__veredict'>
                <i className='fas fa-thumbs-down' />
              </div>
              <div className='content-info__candidate-info'>
                <div>{candidate.name}</div>
                <div>{`${candidate.offset} in ${candidate.industry}`}</div>
                <div>{candidate.information}</div>
              </div>
            </div>
            <div className='interaction'>
              <i className='fas fa-thumbs-up' />
              <i className='fas fa-thumbs-down' />
              <button>Vote now</button>
            </div>
            <div className='results'>
              <div className='approve' style={{ width: `${positive}%` }}>
                <i className='fas fa-thumbs-up' />
                <span>{positive}%</span>
              </div>
              <div className='dissapprove' style={{ width: `${negative}%` }}>
                <span>{negative}%</span>
                <i className='fas fa-thumbs-down' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CandidateBox.propTypes = {
  candidate: PropTypes.object.isRequired
};

export default CandidateBox;
