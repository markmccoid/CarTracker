import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import CarForm from './CarForm';
import { addCar } from '../../actions/cars';
import CarList from './CarList';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddCar = (props) => {
  
  return (
    <div>
      <h1>Add Car</h1>
      <Wrapper>
        <CarForm onSubmit={(carObj) => {
          console.log(carObj)
          props.dispatch(addCar(carObj));
          }}
        />
        <CarList cars={props.cars} />
      </Wrapper>
    </div>
  )
};

const MapStateToProps = state => ({
  cars: state.cars
});

export default connect(MapStateToProps)(AddCar);