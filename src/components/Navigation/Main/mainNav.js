import React from 'react';
import { NavLink } from 'react-router-dom';

const mainNav = (props) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <NavLink className='navbar-brand' to='/countries'>
          Countries App
        </NavLink>
      </div>
    </nav>
  );
};

export default mainNav;
