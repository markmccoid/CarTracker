import React from 'react';
import { connect } from 'react-redux';

import CarForm from './CarForm';
import { addCar } from '../../actions/cars';

const AddCar = (props) => {
  return (
    <div>
      <h1>Add Car</h1>
      <CarForm onSubmit={(carObj) => {
        console.log(carObj)
        props.dispatch(addCar(carObj));
      }} />
    </div>
  )
};

export default connect()(AddCar);