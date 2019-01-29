/* eslint no-undef: 0 */
/* eslint no-console: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import VoteButton from './voteButton';
import * as candidateService from '../../services/candidateServices';

import auth from '../../services/authservices';

class VotingCard extends Component {
  state = {
    positive: 0,
    negative: 0,
    thumbsUp: this.props.candidate.thumbsUp,
    thumbsDown: this.props.candidate.thumbsDown,
    result: '',
    vote: '',
    thumbsUpSelected: false,
    thumbsDownSelected: false,
    voted: false
  };

  componentDidMount = () => {
    this.calculateComponentData();
  };

  calculateWidths = () => {
    const { thumbsUp, thumbsDown } = this.state;
    if (thumbsUp === 0 && thumbsDown === 0) {
      this.setState({ positive: 50, negative: 50 });
      return;
    }
    const totalVotes = thumbsUp + thumbsDown;
    const positive = Math.ceil((thumbsUp / totalVotes) * 100);
    const negative = Math.floor((thumbsDown / totalVotes) * 100);

    this.setState({ positive, negative });
  };

  calculateResult = () => {
    const { thumbsUp, thumbsDown } = this.state;

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

  handleVote = async candidate => {
    const user = auth.getCurrentUser();
    if (!user) {
      toast.error('You must be logged in first in order to vote');
      return;
    }

    const {
      thumbsUp: originalThumbsUp,
      thumbsDown: originalThumbsDown
    } = this.state;

    if (!this.state.vote) {
      toast.error('Select a vote first!');
      return;
    }

    this.state.vote === 'up'
      ? this.setState({ thumbsUp: this.state.thumbsUp + 1 })
      : this.setState({ thumbsDown: this.state.thumbsDown + 1 });

    try {
      this.state.vote === 'up'
        ? await candidateService.thumbsUpVote(candidate._id, user._id)
        : await candidateService.thumbsDownVote(candidate._id, user._id);

      this.setState({ voted: true });
      this.calculateComponentData();
      this.resetVoteSelection();
      this.props.refresh();
    } catch (ex) {
      toast.error('Cannot vote more than three times per candidate');
      this.setState({
        thumbsUp: originalThumbsUp,
        thumbsDown: originalThumbsDown
      });
    }
  };

  handleVoteAgain = () => {
    this.setState({ voted: false });
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

  renderInteraction = candidate => {
    const { thumbsUpSelected, thumbsDownSelected, voted } = this.state;
    if (!voted) {
      return (
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
      );
    } else {
      return (
        <div className='interaction'>
          <button
            name='vote'
            className='interaction__vote-button'
            onClick={this.handleVoteAgain}
          >
            Vote Again
          </button>
        </div>
      );
    }
  };

  render() {
    const { candidate } = this.props;
    const { positive, negative, result, voted } = this.state;

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
                {!voted && <div>{candidate.information}</div>}
                {voted && (
                  <div style={{ fontSize: '1.95rem' }}>Thanks for voting!</div>
                )}
              </div>
            </div>
            {this.renderInteraction(candidate)}
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
