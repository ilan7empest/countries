import React, { Component } from 'react';
import axiosInstance from '../../utils/http';
import Card from '../../components/UI/Card/card';
import Spinner from '../../components/UI/Spinner/Spinner';
import Search from '../../components/UI/Search/search';
import SearchDropdown from '../../components/UI/Dropdown/drodown';

class Countries extends Component {
  state = {
    countries: [],
    loading: false,
    search: '',
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
    this.setState({ search: value.toLowerCase() });
  };
  handleViewCountry = (name) => {
    this.props.history.push({ pathname: `${this.props.match.url}/${name}` });
  };
  render() {
    const { countries, search } = this.state;
    const filteredCountries = countries.filter((country) => {
      return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    let countryList = [];
    countryList = filteredCountries.map((country, index) => {
      return country ? (
        <div className='col-4 col-lg-2 mb-4' key={index}>
          <Card
            onClick={this.handleViewCountry.bind(this, country.name)}
            {...country}
          />
        </div>
      ) : null;
    });
    if (this.state.loading) {
      countryList = <Spinner />;
    }
    return (
      <div>
        <div className='my-4'>
          <SearchDropdown />
          <Search
            placeholder='Search Country'
            onChange={(e) => this.onSearch(e)}
          />
          <div className='filter'></div>
        </div>
        <div className='row'>{countryList}</div>
      </div>
    );
  }
}

export default Countries;
