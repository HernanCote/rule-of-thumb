import React from 'react';
import { PropTypes } from 'prop-types';

const Modal = ({ handleClose, show, children }) => {
  const showHidenClassName = show
    ? 'modal display-block'
    : 'modal display-none';

  return (
    <div className={showHidenClassName}>
      <section className='modal__main'>
        <span className='modal__main__close'>
          <i className='fas fa-times' onClick={handleClose} />
        </span>
        {children}
      </section>
    </div>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired
};

export default Modal;
