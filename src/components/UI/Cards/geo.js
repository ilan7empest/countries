import React from 'react';
import { Link } from 'react-router-dom';

const geo = (props) => {
  let borders = props.borders || [];
  let regionalBlocs = props.regionalBlocs || [];
  return (
    <div>
      <h5>Geo Loaction</h5>
      <table className='table table-striped f-14'>
        <tbody>
          <tr>
            <th>Region</th>
            <td>{props.region}</td>
          </tr>
          <tr>
            <th>Sub Region</th>
            <td>{props.subregion}</td>
          </tr>
          <tr>
            <th colSpan='2'>Regional Blocks</th>
          </tr>
          <tr>
            <th>Name</th>
            <td>
              {regionalBlocs.map((regionalBlock, i) => (
                <span key={i} className='multiple'>
                  {regionalBlock.name}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <th>Other Names</th>
            <td>
              {regionalBlocs.map((regionalBlock, i) => (
                <span key={i} className='multiple'>
                  {regionalBlock.otherNames}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <th>Demonym</th>
            <td>{props.demonym}</td>
          </tr>
          <tr>
            <th>Area</th>
            <td>{props.area}</td>
          </tr>
          <tr>
            <th>Border Countries</th>
            <td>
              {borders.map((border, i) => (
                <span key={i} className='multiple'>
                  {border}
                </span>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default geo;
