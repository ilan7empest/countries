//Filter Countries by Region
const filterByCountryRegion = (arr = [], acrynom) =>
  arr
    .filter((country) =>
      country.regionalBlocs.some(
        (regionalBloc) => regionalBloc.acronym === acrynom
      )
    )
    .map((country) => {
      let newElt = Object.assign({}, country); // copies element
      newElt.regionalBlocs = newElt.regionalBlocs.filter(
        (regionalBloc) => regionalBloc.acronym === acrynom
      );
      return newElt;
    });

//Filter Countries by search value
const filterByCountryName = (arr = [], value) =>
  arr.filter((country) => {
    return country.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
  });

export { filterByCountryRegion, filterByCountryName };
