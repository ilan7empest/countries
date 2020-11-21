import React, { useRef } from 'react';
import classes from './dropdown.module.css';

import { useDetectOutsideClick } from '../../../utils/useDetectOutsideClick';

const Dropdown = (props) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  return (
    <div className={`dropdown ${isActive ? 'show' : ''}`}>
      <div className='d-flex align-items-center'>
        <button
          className={`btn rounded-lg border ${classes.dropdownToggle} ${
            isActive ? classes.flipArrow : ''
          }`}
          onClick={() => setIsActive(!isActive)}>
          {props.label}
        </button>
        {props.selected && (
          <button onClick={props.reset} className='btn border-0 text-secondary'>
            X
          </button>
        )}
      </div>
      <div
        onClick={() => setIsActive(!isActive)}
        ref={dropdownRef}
        className={`dropdown-menu shadow ${classes.dropdownMenu} ${
          isActive ? 'show' : 'null'
        }`}>
        {props.children}
      </div>
    </div>
  );
};

export default Dropdown;
