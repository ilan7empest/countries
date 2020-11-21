import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axiosInstance from '../../utils/http';
import Countries from './Countries';
import CountryDetails from './CountryDetails';

class Dashboard extends Component {
  state = {
    countries: [],
    loading: false,
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
      .then((res) => {
        this.setState({ countries: res, loading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Switch>
        <Route path='/countries/:country' render={() => <CountryDetails />} />
        <Route path='/countries' render={() => <Countries {...this.state} />} />
      </Switch>
    );
  }
}

export default Dashboard;
