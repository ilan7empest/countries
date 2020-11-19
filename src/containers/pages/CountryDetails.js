import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import axiosInstance from '../../utils/http';
import Spinner from '../../components/UI/Spinner/Spinner';
import Flag from '../../components/UI/Flag/flag';
import Code from '../../components/UI/Cards/code';
import Genearl from '../../components/UI/Cards/general';
import Names from '../../components/UI/Cards/names';
import Geo from '../../components/UI/Cards/geo';
import Breadcrumbs from '../../components/UI/Breadcrumbs/breadcrumbs';

import classes from './CountryDetails.module.css';

class CountryDetails extends Component {
  state = {
    country: {},
    loading: false,
  };

  componentDidMount() {
    this.loadData(this.props.match.params.country);
  }

  loadData(country) {
    this.setState({ loading: true });
    axiosInstance
      .get('/name/' + country)
      .then((res) => {
        return res.data[0];
      })
      .then((res) => this.setState({ country: res, loading: false }))
      .catch((err) => console.log(err));
  }

  handleClick = (e, border) => {
    console.log(border);
    this.loadData(border);
  };

  render() {
    const { name, nativeName, flag } = this.state.country;
    let renderContent = (
      <Fragment>
        <div className='w-100 d-flex align-items-center'>
          <h2 className='mr-2'>{name}</h2>
          <small>({nativeName})</small>
        </div>
        <div className='d-flex flex-wrap flex-lg-nowrap w-100'>
          <aside className={`d-flex flex-wrap flex-column ${classes.aside}`}>
            <div className={classes.flag}>
              <Flag name={name} flag={flag} classes='card-img-top shadow' />
            </div>
            <div className='mt-4'>
              <Genearl {...this.state.country} />
            </div>
          </aside>
          <article className='flex-grow-1 ml-lg-5 mt-3 mt-lg-0'>
            <div className='row'>
              <div className='col-md-6'>
                <Names {...this.state.country} />
              </div>
              <div className='col-md-6'>
                <Code {...this.state.country} />
                <Geo {...this.state.country} />
              </div>
            </div>
          </article>
        </div>
      </Fragment>
    );
    if (_.isEmpty(this.state.country)) {
      renderContent = <h2>Couldn't find a matching country by that name</h2>;
    }
    if (this.state.loading && !_.isEmpty(this.state.country)) {
      renderContent = <Spinner />;
    }
    return (
      <div className='d-flex flex-wrap'>
        <Breadcrumbs />

        {renderContent}
      </div>
    );
  }
}

export default CountryDetails;
