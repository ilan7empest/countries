import React from 'react';

const flag = ({ name, flag, classes }) => (
  <img
    src={flag}
    alt={name}
    title={name}
    aria-label={name}
    className={classes}
  />
);

export default flag;
