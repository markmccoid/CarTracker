import React from 'react';
import CarListItem from './CarListItem';

const CarList = (props) => {
  return (
    <div>
      <h2>List of Cars</h2>
      {props.cars.map(car => <CarListItem key={car.id} car={car} onEditCar={props.onEditCar} onRemoveCar={props.onRemoveCar} />
      )}
    </div>
  );
};

export default CarList;
