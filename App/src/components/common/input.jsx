import React from 'react';
import { PropTypes } from 'prop-types';

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className='input'>
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className='input__field' />
      {error && <div className='input__error'>{error}</div>}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default Input;
