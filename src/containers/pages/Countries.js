import React, { Component } from 'react';
import axiosInstance from '../../utils/http';
import MainCard from '../../components/UI/Cards/mainCard';
import Spinner from '../../components/UI/Spinner/Spinner';
import Search from '../../components/UI/Search/search';
import { REGION_NAMES } from '../../_shared/region-list';
import Dropdown from '../../components/UI/Dropdown/dropdown';
import * as Filter from '../../utils/filter';
import DropdownItem from '../../components/UI/Dropdown/DropdownItem/dropdownItem';

class Countries extends Component {
  state = {
    countries: [],
    loading: false,
    search: '',
    filterByRegion: false,
    selected: false,
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
      selected: false,
      filterByRegion: false,
      regionAcrynom: '',
      regionName: '',
    });
  };

  onFilterRegion = (name, label) => {
    this.setState({
      search: '',
      selected: true,
      filterByRegion: true,
      regionAcrynom: name,
      regionName: label,
    });
  };

  onViewCountry = (e, name) => {
    e.preventDefault();
    this.props.history.push({ pathname: `${this.props.match.url}/${name}` });
  };

  onResetDropdown = () => {
    this.setState({
      selected: false,
      filterByRegion: false,
      regionAcrynom: '',
      regionName: '',
    });
  };

  render() {
    const {
      countries,
      search,
      filterByRegion,
      regionAcrynom,
      regionName,
      loading,
    } = this.state;

    let card = (country, index) => (
      <div className='col-md-4 col-lg-3 mb-4' key={index}>
        <MainCard
          onClick={(e) => this.onViewCountry(e, country.name)}
          {...country}
        />
      </div>
    );
    let countryList = [];
    if (loading) {
      countryList = <Spinner />;
    }
    if (!filterByRegion) {
      countryList = Filter.filterByCountryName(countries, search).map(
        (country, index) => {
          return country ? card({ ...country }, index) : null;
        }
      );
    } else {
      countryList = Filter.filterByCountryRegion(countries, regionAcrynom).map(
        (country, index) => {
          return country ? card({ ...country }, index) : null;
        }
      );
    }
    return (
      <div>
        <div className='my-1'>
          <form
            className='flex-grow-1 mb-3'
            onSubmit={(e) => this.onViewCountry(e, search)}>
            <Search
              value={this.state.search}
              placeholder='Search for a Country'
              onChange={(e) => this.onSearch(e)}
            />
          </form>
          <Dropdown
            selected={this.state.selected}
            reset={this.onResetDropdown}
            label={regionName !== '' ? regionName : 'Filter By Region'}>
            {REGION_NAMES.map(({ name, label }, i) => (
              <DropdownItem
                key={i}
                onClick={() => this.onFilterRegion(name, label)}
                class='f-14 p-2 my-1 mr-2'>
                {label}
              </DropdownItem>
            ))}
          </Dropdown>

          <h4 className='mt-4 mb-2 border-bottom border-primary text-primary'>
            Coutries of the World
            <span className='text-capitalize'>
              {search !== ''
                ? ` - ${search}`
                : regionName !== ''
                ? ` - ${regionName}`
                : ''}
            </span>
          </h4>
        </div>
        <div className='row'>{countryList}</div>
      </div>
    );
  }
}

export default Countries;
