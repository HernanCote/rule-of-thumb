import React, { Component } from 'react';
import HeadOpionionBox from '../headOpinionBox';
import InformationBox from '../common/informationBox';
import Votes from '../common/voting/votes';

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section className='head'>
          <div className='head__box container'>
            <HeadOpionionBox />
          </div>
          <div className='head__closing'>
            <div className='head__closing-label'>CLOSING IN</div>
            <div className='head__closing-days'>
              <span>22</span> days
            </div>
          </div>
        </section>
        <section className='home__information container'>
          <InformationBox />
        </section>
        <section className='home__votes container'>
          <Votes />
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
