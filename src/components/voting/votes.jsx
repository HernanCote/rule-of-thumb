import React, { Component } from 'react';
import * as votingService from '../../services/mockServices/mockVotingService';
import VotesList from './votesList';

class Votes extends Component {
  state = { candidates: [] };

  componentDidMount() {
    const candidates = votingService.getCandidates();
    this.setState({ candidates });
  }

  render() {
    return (
      <div className='votes'>
        <h1 className='votes__label'>Votes</h1>
        <VotesList candidates={this.state.candidates} />
      </div>
    );
  }
}

export default Votes;
