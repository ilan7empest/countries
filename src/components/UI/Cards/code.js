import React from 'react';

const code = (props) => {
  let currencies = props.currencies || [];
  let callingCodes = props.callingCodes || [];
  return (
    <div>
      <h5>Country Codes</h5>
      <table className='table table-striped f-14'>
        <tbody>
          <tr>
            <th>Calling {currencies.length > 1 ? 'Codes' : 'Code'}</th>
            <td>
              {callingCodes.map((callingCode, i) => (
                <span key={i} className='multiple'>
                  +{callingCode}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <th>Alpha2 Code</th>
            <td>{props.alpha2Code}</td>
          </tr>
          <tr>
            <th>Alpha3 Code</th>
            <td>{props.alpha3Code}</td>
          </tr>
          <tr>
            <th>Numeric Code</th>
            <td>{props.numericCode}</td>
          </tr>
          <tr>
            <th>Currency {currencies.length > 1 ? 'Codes' : 'Code'}</th>
            <td>
              {currencies.map((currency, i) => (
                <span key={i} className='multiple'>
                  {currency.code}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <th>Top Level Domain Code</th>
            <td>{props.topLevelDomain}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default code;
