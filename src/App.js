import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Footer from './components/Layout/Footer/footer';
import MainNav from './components/Navigation/Main/mainNav';
import Dashboard from './containers/pages/Dashboard';

class App extends Component {
  render() {
    return (
      <Layout header={<MainNav />} footer={<Footer />}>
        <Switch>
          <Route path='/countries' component={Dashboard} />
          <Redirect from='/' to='/countries' />
          <Route path='*' render={() => <h1>Page Not Found</h1>} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
