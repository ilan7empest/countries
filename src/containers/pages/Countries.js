import React, { Component } from 'react';
import axiosInstance from '../../utils/http';
import MainCard from '../../components/UI/Cards/mainCard';
import Spinner from '../../components/UI/Spinner/Spinner';
import Search from '../../components/UI/Search/search';
import { REGION_NAMES } from '../../_shared/region-list';
import Badge from '../../components/UI/Badge/badge';

class Countries extends Component {
  state = {
    countries: [],
    loading: false,
    search: '',
    viewFilter: false,
    filterByRegion: false,
    regionAcrynom: '',
    regionName: '',
  };

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    this.setState({ loading: true });
    axiosInstance
      .get('/all')
      .then((res) => {
        return res.data;
      })
      .then((res) => this.setState({ countries: res, loading: false }))
      .catch((err) => {
        console.log(err);
      });
  }

  onSearch = (e) => {
    const { value } = e.target;
    this.setState({
      search: value.toLowerCase(),
      filterByRegion: false,
      regionName: '',
      viewFilter: false,
    });
  };

  onFilterRegion = (region, name) => {
    this.onViewFilter();
    this.setState({
      filterByRegion: true,
      regionAcrynom: region,
      regionName: name,
    });
  };

  onViewFilter = () => {
    this.setState((currentState) => ({
      viewFilter: !currentState.viewFilter,
    }));
  };

  handleViewCountry = (e, name) => {
    e.preventDefault();
    this.props.history.push({ pathname: `${this.props.match.url}/${name}` });
  };

  //Filter Countries by Region
  filterByRegion = () =>
    this.state.countries
      .filter((country) =>
        country.regionalBlocs.some(
          (regionalBloc) => regionalBloc.acronym === this.state.regionAcrynom
        )
      )
      .map((country) => {
        let newElt = Object.assign({}, country); // copies element
        newElt.regionalBlocs = newElt.regionalBlocs.filter(
          (regionalBloc) => regionalBloc.acronym === this.state.regionAcrynom
        );
        return newElt;
      });

  //Filter Countries by search value
  filteredCountries = () =>
    this.state.countries.filter((country) => {
      return (
        country.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });

  render() {
    const { filterByRegion, regionAcrynom } = this.state;

    let countryList = [];
    if (filterByRegion && regionAcrynom !== '') {
      countryList = this.filterByRegion().map((country, index) => {
        return country ? (
          <div className='col-md-4 col-lg-3 mb-4' key={index}>
            <MainCard
              onClick={(e) => this.handleViewCountry(e, country.name)}
              {...country}
            />
          </div>
        ) : null;
      });
    } else {
      countryList = this.filteredCountries().map((country, index) => {
        return country ? (
          <div className='col-md-4 col-lg-3 mb-4' key={index}>
            <MainCard
              onClick={(e) => this.handleViewCountry(e, country.name)}
              {...country}
            />
          </div>
        ) : null;
      });
    }
    if (this.state.loading) {
      countryList = <Spinner />;
    }

    let badges;
    if (this.state.viewFilter) {
      badges = REGION_NAMES.map((region, i) => (
        <Badge
          key={i}
          class='dropdown-item f-14 font-weight-light p-2 my-1 mr-2'
          onClick={() => this.onFilterRegion(region.name, region.label)}>
          {region.label}
        </Badge>
      ));
    }
    return (
      <div>
        <div className='my-1'>
          <form
            className='flex-grow-1 mb-3'
            onSubmit={(e) => this.handleViewCountry(e, this.state.search)}>
            <Search
              placeholder='Search Country'
              onChange={(e) => this.onSearch(e)}
            />
          </form>

          <div className={this.state.viewFilter ? 'dropdown show' : 'dropdown'}>
            <div className='badges d-flex align-items-center mt-2 mb-4'>
              <button
                className='btn btn-secondary dropdown-toggle'
                onClick={() => this.onViewFilter()}>
                Filter By Region
              </button>
              <h3 className='w-100 ml-4 mb-0 text-primary'>
                {this.state.regionName}
              </h3>
            </div>

            <div
              class={
                this.state.viewFilter ? 'dropdown-menu show' : 'dropdown-menu'
              }>
              {badges}
            </div>
          </div>
        </div>
        <div className='row'>{countryList}</div>
      </div>
    );
  }
}

export default Countries;
