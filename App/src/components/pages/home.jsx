import React, { Component } from 'react';
import InformationBox from '../common/informationBox';
import HeadOpionionBox from '../voting/headOpinionBox';
import Votes from '../voting/votes';
import SugestionsBox from '../common/sugestionsBox';

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
        <InformationBox />
        <Votes />
        <SugestionsBox />
      </React.Fragment>
    );
  }
}

export default Home;
