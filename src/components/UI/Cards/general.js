import React from 'react';

const general = ({ languages, capital, population, callingCodes }) => {
  let languagesArr = languages || [];
  let callingCodesArr = callingCodes || [];
  population = population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <table className='table f-14'>
      <tbody>
        <tr>
          <th>Native Language</th>
          <td>
            {languagesArr.map((language, i) => (
              <span className='multiple' key={i}>
                {language.nativeName}
              </span>
            ))}
          </td>
        </tr>
        <tr>
          <th>Capital</th>
          <td>{capital}</td>
        </tr>
        <tr>
          <th>Population</th>
          <td>{population}</td>
        </tr>
        <tr>
          <th>Calling {callingCodesArr.length > 1 ? 'Codes' : 'Code'}</th>
          <td>
            {callingCodesArr.map((callingCode, i) => (
              <span key={i} className='multiple'>
                +{callingCode}
              </span>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default general;
