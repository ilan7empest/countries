import React from 'react';
import classes from './badge.module.css';

const badge = (props) => {
  return (
    <span
      onClick={props.onClick}
      className={[props.class, classes.badge].join(' ')}>
      {props.children}
    </span>
  );
};

export default badge;
