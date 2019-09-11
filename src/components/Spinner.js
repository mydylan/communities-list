import React from 'react';
import spinner from '../assets/spinner.svg';

function Spinner() {
  return (
    <img
      src={spinner}
      alt="spinner"
      style={{ height: '60px' }}
    />
  );
}

export default Spinner;
