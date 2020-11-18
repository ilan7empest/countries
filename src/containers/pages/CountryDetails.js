import React, { Component } from 'react';
import axiosInstance from '../../utils/http';
import Spinner from '../../components/UI/Spinner/Spinner';
import Flag from '../../components/UI/Flag/flag';

import classes from './CountryDetails.module.css';

class CountryDetails extends Component {
  state = {
    country: {},
    loading: false,
  };

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    const { country } = this.props.match.params;
    this.setState({ loading: true });
    axiosInstance
      .get('/name/' + country)
      .then((res) => {
        return res.data[0];
      })
      .then((res) => this.setState({ country: res, loading: false }))
      .catch((err) => console.log(err));
  }

  render() {
    const { name, flag } = this.state.country;
    let details;
    this.state.loading
      ? (details = <Spinner />)
      : (details = (
          <div>
            <div className=''>
              <Flag name={name} flag={flag} />
            </div>
          </div>
        ));
    return (
      <div className='container'>
        <div className='d-flex'>
          <article className='flex-grow-1 mr-5'>
            <h2>{name}</h2>
          </article>
          <aside className={classes.aside}>{details}</aside>
        </div>
      </div>
    );
  }
}

export default CountryDetails;
