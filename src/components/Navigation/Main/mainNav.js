import React from 'react';
import { NavLink } from 'react-router-dom';
import NavItems from '../navItems/navItems';
// import MobileToggle from '../MobileToggle/mobileToggle';

const mainNav = (props) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      {/* <MobileToggle /> */}
      <NavLink className='navbar-brand' to='/'>
        Countries App
      </NavLink>
      <ul className='navbar-nav mr-auto'>
        <NavItems />
      </ul>
    </nav>
  );
};

export default mainNav;
