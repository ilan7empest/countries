import React from 'react';

const code = ({
  currencies,
  alpha2Code,
  alpha3Code,
  numericCode,
  topLevelDomain,
}) => {
  let currenciesArr = currencies || [];

  return (
    <div>
      <h5 className='bg-warning text-white p-3 m-0'>Country Codes</h5>
      <table className='table table-striped f-14'>
        <tbody>
          <tr>
            <th>Alpha2 Code</th>
            <td>{alpha2Code}</td>
          </tr>
          <tr>
            <th>Alpha3 Code</th>
            <td>{alpha3Code}</td>
          </tr>
          <tr>
            <th>Numeric Code</th>
            <td>{numericCode}</td>
          </tr>
          <tr>
            <th>Currency {currenciesArr.length > 1 ? 'Codes' : 'Code'}</th>
            <td>
              {currenciesArr.map((currency, i) => (
                <span key={i} className='multiple'>
                  {currency.code}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <th>Top Level Domain Code</th>
            <td>{topLevelDomain}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default code;
