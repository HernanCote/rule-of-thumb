import React from 'react';

const SugestionsBox = () => {
  return (
    <article className='sugestions-box home_sugestions container'>
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
    </article>
  );
};

export default SugestionsBox;
