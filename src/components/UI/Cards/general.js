import React from 'react';

const general = (props) => {
  let languages = props.languages || [];
  return (
    <table className='table f-14'>
      <tbody>
        <tr>
          <th>Native Language</th>
          <td>
            {languages.map((language, i) => (
              <span className='multiple' key={i}>
                {language.nativeName}
              </span>
            ))}
          </td>
        </tr>
        <tr>
          <th>Capital</th>
          <td>{props.capital}</td>
        </tr>
        <tr>
          <th>Population</th>
          <td>{props.population}</td>
        </tr>
      </tbody>
    </table>
  );
};
export default general;
