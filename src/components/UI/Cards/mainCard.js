import React from 'react';
import classes from './card.module.css';
import Flag from '../Flag/flag';

const card = (props) => (
  <div className={`card h-100  ${classes.card}`} onClick={props.onClick}>
    <div
      className={`card-header d-flex justify-content-between px-3 ${classes.header}`}>
      <div className='mr-2'>
        <h5 className='m-0 f-16 font-weight-normal'>
          {props.name.substring(0, 15)}
          {props.name.length > 15 && '...'}
        </h5>
        <small className='d-block mt-1'>
          ({props.nativeName.substring(0, 10)}
          {props.nativeName.length > 10 && '...'})
        </small>
      </div>
      <Flag
        flag={props.flag}
        alt={props.title}
        classes={['card-img-top shadow', classes.img].join(' ')}
      />
    </div>
    <div className='card-body p-0 f-14'>
      <ul class='list-group list-group-flush'>
        <li class='list-group-item d-flex justify-content-between'>
          <span className='font-weight-bold'>Capital</span>
          <span>{props.capital}</span>
        </li>
        <li class='list-group-item d-flex justify-content-between'>
          <span className='font-weight-bold'>
            {props.languages.length > 1 ? 'Languages' : 'Language'}
          </span>
          <div className='d-flex flex-wrap justify-content-end'>
            {props.languages.map((language) => (
              <span class={classes.multiple}>{language.iso639_2}</span>
            ))}
          </div>
        </li>
        <li class='list-group-item d-flex justify-content-between'>
          <span className='font-weight-bold'>
            {props.currencies.length > 1 ? 'Currencies' : 'Currency'}
          </span>
          {props.currencies.map((currency) => (
            <span>
              {currency.code}/{currency.symbol}
            </span>
          ))}
        </li>
        <li class='list-group-item d-flex justify-content-between'>
          <span className='font-weight-bold'>Timezone</span>
          <div className='d-flex flex-wrap justify-content-end'>
            {props.timezones.map((timezone) => (
              <span class={classes.multiple}>{timezone}</span>
            ))}
          </div>
        </li>
        <li class='list-group-item d-flex justify-content-between'>
          <span className='font-weight-bold'>Border Countries</span>
          <div className='d-flex flex-wrap justify-content-end'>
            {props.borders.map((border) => (
              <span class={classes.multiple}>{border}</span>
            ))}
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default card;
