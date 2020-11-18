import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [{ id: 1, label: 'Test', link: '/text' }];
const navigationItems = (props) => [
  ...navItems.map((item) => (
    <li className='nav-item' key={item.id}>
      <NavLink className='nav-link' to={item.link} exact>
        {item.label}
      </NavLink>
    </li>
  )),
];

export default navigationItems;
