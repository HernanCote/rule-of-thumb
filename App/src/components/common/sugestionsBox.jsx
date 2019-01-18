import React from 'react';

const SugestionsBox = () => {
  return (
    <div className='sugestions-box'>
      <div className='sugestions-box__content'>
        <div className='sugestions-box__content__label'>
          Is there anyone else you would want us to add?
        </div>
        <div>
          <button className='sugestions-box__content__submit-name'>
            Submit a Name
          </button>
        </div>
      </div>
    </div>
  );
};

export default SugestionsBox;
