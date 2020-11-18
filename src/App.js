import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import MainNav from './components/Navigation/Main/mainNav';
import Countries from './containers/pages/Countries';
import CountryDetails from './containers/pages/CountryDetails';
class App extends Component {
  render() {
    return (
      <Layout header={<MainNav />} footer={<h5>footer</h5>}>
        <Switch>
          <Route path='/countries/:country' component={CountryDetails} />
          <Route path='/countries' component={Countries} />
          <Redirect from='/' to='/countries' />
          <Route path='*' render={() => <h1>Page Not Found</h1>} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
