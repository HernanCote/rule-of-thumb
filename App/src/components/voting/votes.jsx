import React, { Component } from 'react';
import { getCandidates } from '../../services/candidateServices';
import VotesList from './votesList';

class Votes extends Component {
  state = { candidates: [] };

  componentDidMount() {
    this.refreshCandidatesData();
  }

  refreshCandidatesData = async () => {
    const { data: candidates } = await getCandidates();
    this.setState({ candidates });
  };

  render() {
    return (
      <section className='votes home__votes container'>
        <h1 className='votes__label'>Votes</h1>
        <VotesList
          candidates={this.state.candidates}
          refreshCandidatesData={this.refreshCandidatesData}
        />
      </section>
    );
  }
}

export default Votes;
