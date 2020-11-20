import React, { useState } from 'react';
import classes from './dropdown.module.css';

const Dropdown = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className={`dropdown ${showDropdown ? 'show' : ''}`}>
      <div className='d-flex align-items-center mt-2 mb-4'>
        <button
          className={`btn rounded-lg border ${classes.dropdownToggle}`}
          onClick={() => setShowDropdown(!showDropdown)}>
          {props.label}
        </button>
      </div>
      <div
        className={`dropdown-menu ${classes.dropdownMenu} ${
          showDropdown ? 'show' : 'null'
        }`}>
        {props.children}
      </div>
    </div>
  );
};

export default Dropdown;
