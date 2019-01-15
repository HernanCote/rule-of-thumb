import React from 'react';

const HeadOpionionBox = () => {
  return (
    <div className='head-box'>
      <div className='head-box__content'>
        <p className='opinion'>What&apos;s your opion on</p>
        <h1 className='character'>Pope Francis?</h1>
        <p className='info'>
          He&apos;s talking tough on clergy sexual abuse, but is he just another
          papal pervert protector? (thumbs down) or a true phedofile punishing
          pontiff? (thumbs up)
        </p>
        <div className='more-info'>
          <i className='fab fa-wikipedia-w' />
          <a href='/'>More information</a>
        </div>
        <p className='veredict'>What&apos;s your veredict?</p>
      </div>
      <div className='head-box__voting'>
        <div className='head-box__voting__thumbs-up'>
          <div className='centered'>
            <i className='fas fa-thumbs-up' />
          </div>
        </div>
        <div className='head-box__voting__thumbs-down'>
          <div className='centered'>
            <i className='fas fa-thumbs-down' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadOpionionBox;
