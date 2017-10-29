import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import CarForm from './CarForm';
import { addCar, editCar } from '../../actions/cars';
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
          props.addCar(carObj);
          }}
        />
        <CarList cars={props.cars} onEditCar={props.editCar} />
      </Wrapper>
    </div>
  )
};

const mapStateToProps = state => ({
  cars: state.cars
});


export default connect(mapStateToProps, { addCar, editCar })(AddCar);