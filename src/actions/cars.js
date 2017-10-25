import uuid from 'uuid';
import { ADD_CAR, EDIT_CAR, REMOVE_CAR } from './actionTypes';
//--------------------------
// --Expenses Action creators
//--------------------------
// ADD_EXPENSE
export const addCar = (carObj = {}) => {
  return {
    type: ADD_CAR,
    carObj: {
      id: uuid(),
      ...carObj
    }
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

// REMOVE EXPENSE
export const removeCar = (id) => {
  return {
    type: REMOVE_CAR,
    id
  };
};