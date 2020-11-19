import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const breadcrumbs = (props) => {
  const countryName = props.match.params.country;

  return (
    <nav aria-label='breadcrumb' className='w-100'>
      <ol className='breadcrumb my-4'>
        <li className='breadcrumb-item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='breadcrumb-item active' aria-current='page'>
          {countryName}
        </li>
      </ol>
    </nav>
  );
};

export default withRouter(breadcrumbs);
