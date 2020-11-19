import React from 'react';
const geo = ({
  borders,
  regionalBlocs,
  region,
  subregion,
  demonym,
  area,
  latlng,
}) => {
  let bordersArr = borders || [];
  let regionalBlocsArr = regionalBlocs || [];
  return (
    <div>
      <h5 className='bg-success text-white p-3 m-0'>Geo Loaction</h5>
      <table className='table table-striped f-14'>
        <tbody>
          <tr>
            <th>Region</th>
            <td>{region}</td>
          </tr>
          <tr>
            <th>Sub Region</th>
            <td>{subregion}</td>
          </tr>
          <tr>
            <th colSpan='2' className='f-16 text-success'>
              Regional Blocks
            </th>
          </tr>
          <tr>
            <th>Name</th>
            <td>
              {regionalBlocsArr.map((regionalBlock, i) => (
                <span key={i} className='multiple'>
                  {regionalBlock.name}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <th>Acronym</th>
            <td>
              {regionalBlocsArr.map((regionalBlock, i) => (
                <span key={i} className='multiple'>
                  {regionalBlock.acronym}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <th>Other Names</th>
            <td>
              {regionalBlocsArr.map((regionalBlock, i) =>
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
            <td>{demonym}</td>
          </tr>
          <tr>
            <th>Area</th>
            <td>
              {area}Km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <th>Coordinates</th>
            <td>
              {latlng.map((coor, i) => (
                <span key={i} className='multiple'>
                  {coor}
                </span>
              ))}
            </td>
          </tr>

          <tr>
            <th>Border Countries</th>
            <td>
              {bordersArr.map((border, i) => (
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
