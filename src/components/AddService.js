import React from 'react';
import { connect } from 'react-redux';

import ServiceForm from './ServiceForm';
import { startAddService } from '../actions/services';

const AddService = props => (
  <div>
    <h1>Add Service</h1>
    <ServiceForm
      cars={props.cars}
      onSubmit={(serviceObj) => {
        props.dispatch(startAddService(serviceObj));
        props.history.push('/');
      }}
    />
  </div>);

const mapStateToProps = state => ({
  cars: state.cars
});
export default connect(mapStateToProps)(AddService);
