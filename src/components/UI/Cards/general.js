import React from 'react';

const general = ({ languages, capital, population }) => {
  let languagesArr = languages || [];
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
      </tbody>
    </table>
  );
};
export default general;
