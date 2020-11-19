import React from 'react';

const geo = (props) => {
  let borders = props.borders || [];
  let regionalBlocs = props.regionalBlocs || [];
  return (
    <div>
      <h5 className='bg-success text-white p-3 m-0'>Geo Loaction</h5>
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
            <th colSpan='2' className='f-16 text-success'>
              Regional Blocks
            </th>
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
            <th>Acronym</th>
            <td>
              {regionalBlocs.map((regionalBlock, i) => (
                <span key={i} className='multiple'>
                  {regionalBlock.acronym}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <th>Other Names</th>
            <td>
              {regionalBlocs.map((regionalBlock, i) =>
                regionalBlock.otherNames.map((names, index) => (
                  <span key={index} className='multiple'>
                    {names}
                  </span>
                ))
              )}
            </td>
          </tr>
          <tr>
            <th>Demonym</th>
            <td>{props.demonym}</td>
          </tr>
          <tr>
            <th>Area</th>
            <td>
              {props.area}Km<sup>2</sup>
            </td>
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
