import React from 'react';

const names = (props) => {
  let altNames = props.altSpellings || [];
  let translations = props.translations || {};
  const translationKeys = Object.entries(translations);

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
      <h5>Country Names</h5>
      <table className='table table-striped f-14'>
        <tbody>
          <tr>
            <th>Native Name</th>
            <td>{props.nativeName}</td>
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
