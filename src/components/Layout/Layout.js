import React from 'react';

const Layout = (props) => (
  <div className='d-flex flex-column justify-space-between h-100'>
    <header>{props.header}</header>
    {/* {mobileNav} */}
    <main className='container mt-3 flex-grow-1'>{props.children}</main>
    <footer>{props.footer}</footer>
  </div>
);

export default Layout;
