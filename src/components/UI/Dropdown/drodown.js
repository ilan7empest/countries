import React from 'react';

const COUNTRIES_DROPDOWN = [
  { id: 1, value: 'country', label: 'Country' },
  { id: 2, value: 'capitol', label: 'Capitol City' },
  //   { id: 3, value: 'language', label: 'Languages' },
  //   { id: 4, value: 'currency', label: 'Currencies' },
  //   { id: 5, value: 'timezone', label: 'Timezone' },
  //   { id: 6, value: 'border', label: 'Border Countries' },
];

const dropdown = (props) => {
  return (
    <select onChange={props.onChange}>
      {COUNTRIES_DROPDOWN.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default dropdown;
