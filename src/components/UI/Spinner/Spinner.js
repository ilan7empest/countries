import React from 'react';

const spinner = () => (
  <div className='d-flex m-auto text-center p-5'>
    <div className='spinner-border text-primary' role='status'>
      <span className='sr-only'>Loading...</span>
    </div>
  </div>
);

export default spinner;
