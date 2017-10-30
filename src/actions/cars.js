import uuid from 'uuid';
import database from '../firebase/firebase';
import { ADD_CAR, EDIT_CAR, REMOVE_CAR, SET_CARS } from './actionTypes';

//--------------------------
// --Expenses Action creators
//--------------------------
// ADD_EXPENSE
export const addCar = (carObj = {}) => {
  return {
    type: ADD_CAR,
    carObj
  };
};

export const startAddCar = (carObj = {}) => {
  return (dispatch) => {
    return database.ref('cars').push(carObj)
      .then((ref) => {
        dispatch(addCar({
          id: ref.key,
          ...carObj
        }));
      });
  };
};

// EDIT EXPENSE
export const editCar = (id, carObj) => {
  return {
    type: EDIT_CAR,
    id,
    carObj
  }
};

export const startEditCar = (id, carObj) => {
  return (dispatch) => {
    return database.ref(`cars/${id}`).update(carObj)
      .then((ref) => {
        dispatch(editCar(id, carObj));
      });
  };
};

// REMOVE EXPENSE
export const removeCar = (id) => {
  return {
    type: REMOVE_CAR,
    id
  };
};

// SET CARS
export const setCars = cars => ({
  type: SET_CARS,
  cars
});

export const startSetCars = () => {
  return (dispatch) => {
    return database.ref('cars').once('value')
      .then((snapshot) => {
        const carData = snapshot.val();
        
        const cars = Object.keys(carData).map(carId => ({id: carId, ...carData[carId]}))
        console.log(cars);
        dispatch(setCars(cars));
      });
  };
};