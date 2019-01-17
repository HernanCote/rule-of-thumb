/* eslint no-undef: 0 */
/* eslint no-console: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VoteButton from './voteButton';
import * as votingService from '../../services/mockServices/mockVotingService';

class VotingCard extends Component {
  state = {
    positive: 0,
    negative: 0,
    result: '',
    vote: '',
    thumbsUpSelected: false,
    thumbsDownSelected: false
  };

  componentDidMount = () => {
    this.calculateComponentData();
  };

  calculateWidths = () => {
    const { thumbsUp, thumbsDown } = this.props.candidate;
    const totalVotes = thumbsUp + thumbsDown;
    const positive = Math.ceil((thumbsUp / totalVotes) * 100);
    const negative = Math.floor((thumbsDown / totalVotes) * 100);

    this.setState({ positive, negative });
  };

  calculateResult = () => {
    const { thumbsUp, thumbsDown } = this.props.candidate;

    if (thumbsUp >= thumbsDown) {
      this.setState({ result: 'up' });
    } else {
      this.setState({ result: 'down' });
    }
  };

  handleVoteSelection = vote => {
    this.resetVoteSelection();
    this.setState({ vote });
    if (vote === 'up') {
      this.setState({ thumbsUpSelected: true });
    } else {
      this.setState({ thumbsDownSelected: true });
    }
  };

  handleVote = candidate => {
    if (!this.state.vote) {
      return;
    }

    this.state.vote === 'up'
      ? votingService.thumbsUpVote(candidate)
      : votingService.thumbsDownVote(candidate);

    this.props.refresh();
    this.calculateComponentData();
    this.resetVoteSelection();
  };

  resetVoteSelection = () => {
    this.setState({
      vote: '',
      thumbsUpSelected: false,
      thumbsDownSelected: false
    });
  };

  calculateComponentData = () => {
    this.calculateWidths();
    this.calculateResult();
  };

  render() {
    const { candidate } = this.props;
    const {
      positive,
      negative,
      result,
      thumbsUpSelected,
      thumbsDownSelected
    } = this.state;

    return (
      <div className='candidate-box'>
        <div
          className='candidate-box__container'
          style={{
            backgroundImage: `url(${require('../../assets/' +
              candidate.imageUrl)})`
          }}
        >
          <div className='candidate-box__container__content'>
            <div className='content-info'>
              <div className='content-info__veredict'>
                <VoteButton direction={result} />
              </div>
              <div className='content-info__candidate-info'>
                <div>{candidate.name}</div>
                <div>{`${candidate.offset} in ${candidate.industry}`}</div>
                <div>{candidate.information}</div>
              </div>
            </div>
            <div className='interaction'>
              <div
                className={`interaction__up-button mr ${
                  thumbsUpSelected ? 'selected' : ''
                }`}
                onClick={() => this.handleVoteSelection('up')}
              >
                <VoteButton direction='up' />
              </div>
              <div
                className={`interaction__down-button mr ${
                  thumbsDownSelected ? 'selected' : ''
                }`}
                onClick={() => this.handleVoteSelection('down')}
              >
                <VoteButton direction='down' />
              </div>
              <button
                className='interaction__vote-button'
                onClick={() => this.handleVote(candidate)}
              >
                Vote now
              </button>
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

VotingCard.propTypes = {
  candidate: PropTypes.object.isRequired,
  refresh: PropTypes.func.isRequired
};

export default VotingCard;
