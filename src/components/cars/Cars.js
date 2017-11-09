import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import CarForm from './CarForm';
import { startAddCar, startEditCar } from '../../actions/cars';
import CarList from './CarList';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateJSX: false
    }
  }
  render() {
    let carFormJSX =  <CarForm

            onSubmit={(carObj) => {
              this.props.startAddCar(carObj);
              carFormJSX = undefined;
            }}
          />;
    const editCar = (carId) => {
      console.log(`Editing Car ${carId}`);
      carFormJSX = (
        <CarForm
          car={this.props.cars.find(car => car.id === carId)}
          onSubmit={(carObj) => {
            this.props.startEditCar(carId, carObj);
            carFormJSX = undefined;
          }}
        />);
        this.setState({updateJSX: true});
    }
    const addCar = () => {
      console.log('adding car');
      carFormJSX = (
        <CarForm
          onSubmit={(carObj) => {
            this.props.startAddCar(carObj);
            carFormJSX = undefined;
          }}
        />);
        this.setState({updateJSX: true});
    }
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Cars</h1>
          </div>
        </div>
        <div className="content-container">
          <button className="button" onClick={addCar}>Add Car</button>
          {carFormJSX}
          <CarList cars={this.props.cars} onEditCar={editCar} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cars: state.cars
});


export default connect(mapStateToProps, { startAddCar, startEditCar })(Cars);
