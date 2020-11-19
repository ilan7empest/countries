import React from 'react';

const names = ({ altSpellings, translations, nativeName }) => {
  let altNames = altSpellings || [];
  let translationsArr = translations || {};
  const translationKeys = Object.entries(translationsArr);

  let renderTrans = translationKeys.map(([key, value], index) => {
    return (
      <tr key={index}>
        <th>{key.toString()}</th>
        <td>{value}</td>
      </tr>
    );
    // console.log(`${key}: ${translations[key]}`);
  });

  return (
    <div>
      <h5 className='bg-info text-white p-3 m-0'>Country Names</h5>
      <table className='table table-striped f-14'>
        <tbody>
          <tr>
            <th>Native Name</th>
            <td>{nativeName}</td>
          </tr>
          <tr>
            <th>Alternative {altNames.length > 1 ? 'Names' : 'Name'}</th>
            <td>
              {altNames.map((altName, i) => (
                <span key={i} className='multiple'>
                  {altName}
                </span>
              ))}
            </td>
          </tr>
          {renderTrans}
        </tbody>
      </table>
    </div>
  );
};
export default names;
