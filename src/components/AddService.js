import React from 'react';
import { connect } from 'react-redux';

import ServiceForm from './ServiceForm';
import { addService } from '../actions/services';

const AddService = (props) => (
  <div>
    <h1>Add Service</h1>
    <ServiceForm onSubmit={(serviceObj) => {
      props.dispatch(addService(serviceObj));
      props.history.push('/');
    }}/>
  </div>);

export default connect()(AddService);