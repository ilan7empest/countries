import React from 'react';
import classes from './card.module.css';

const card = (props) => (
  <div className='card shadow h-100'>
    <div className='card-header text-center'>
      <h5 className='m-0'>
        {props.name.substring(0, 15)}
        {props.name.length > 15 && '...'}
      </h5>
    </div>
    <img
      src={props.flag}
      alt={props.title}
      className={['card-img-top flex-grow-1', classes.img].join(' ')}
    />
    <div className='p-3'>
      <p className='card-text'>{props.description}</p>
      <button onClick={props.onClick} className='btn btn-primary'>
        Details
      </button>
    </div>
  </div>
);

export default card;
