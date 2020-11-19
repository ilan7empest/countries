import React, { Component, Fragment } from 'react';
import axiosInstance from '../../utils/http';
import Spinner from '../../components/UI/Spinner/Spinner';
import Flag from '../../components/UI/Flag/flag';
import Code from '../../components/UI/Cards/code';
import Genearl from '../../components/UI/Cards/general';
import Names from '../../components/UI/Cards/names';
import Geo from '../../components/UI/Cards/geo';

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
    const { name, nativeName, flag } = this.state.country;
    let renderContent = (
      <Fragment>
        <div className='row'>
          <div className='col-md-6'>
            <Names {...this.state.country} />
          </div>
          <div className='col-md-6'>
            <Code {...this.state.country} />
            <Geo {...this.state.country} />
          </div>
        </div>
      </Fragment>
    );

    if (this.state.loading) {
      renderContent = <Spinner />;
    }
    return (
      <div className='d-flex flex-wrap'>
        <div className='w-100 d-flex align-items-center'>
          <h2 className='mr-2'>{name}</h2>
          <small>({nativeName})</small>
        </div>
        <div className='d-flex flex-wrap flex-lg-nowrap'>
          <aside className={`d-flex flex-wrap flex-column ${classes.aside}`}>
            <div className={classes.flag}>
              <Flag name={name} flag={flag} classes='card-img-top shadow' />
            </div>
            <div className='mt-4'>
              <Genearl {...this.state.country} />
            </div>
          </aside>
          <article className='flex-grow-1 ml-lg-5 mt-5 mt-lg-0'>
            {renderContent}
          </article>
        </div>
      </div>
    );
  }
}

export default CountryDetails;
