import React from 'react';
import { connect } from 'react-redux';

import ServiceForm from './ServiceForm';
import { startAddService } from '../actions/services';

const AddService = props => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Add Service</h1>
      </div>
    </div>
    <div className="content-container">
      <ServiceForm
        descArray={props.descArray}
        serviceArray={props.serviceArray}
        cars={props.cars}
        onSubmit={(serviceObj) => {
          props.dispatch(startAddService(serviceObj));
          props.history.push('/');
        }}
      />
    </div>
  </div>);

const mapStateToProps = state => ({
  descArray: Object.keys(state.services).map((key) => state.services[key].description),
  serviceArray: Object.keys(state.services).map((key) => state.services[key].serviceProvider),
  cars: state.cars
});
export default connect(mapStateToProps)(AddService);
