import React, { Component } from 'react';
import axiosInstance from '../../utils/http';
import MainCard from '../../components/UI/Cards/mainCard';
import Spinner from '../../components/UI/Spinner/Spinner';
import Search from '../../components/UI/Search/search';
// import SearchDropdown from '../../components/UI/Dropdown/drodown';

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
  handleViewCountry = (e, name) => {
    e.preventDefault();
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
        <div className='col-md-4 col-lg-3 mb-4' key={index}>
          <MainCard
            onClick={(e) => this.handleViewCountry(e, country.name)}
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
          <form onSubmit={(e) => this.handleViewCountry(e, this.state.search)}>
            <Search
              placeholder='Search Country'
              onChange={(e) => this.onSearch(e)}
            />
          </form>
        </div>
        <div className='row'>{countryList}</div>
      </div>
    );
  }
}

export default Countries;
