import React from 'react';
// import classes from './dropdownItem.module.css';

const dropdownItem = (props) => {
  return (
    <span
      onClick={props.onClick}
      className={['dropdown-item pointer', props.class].join(' ')}>
      {props.children}
    </span>
  );
};

export default dropdownItem;
