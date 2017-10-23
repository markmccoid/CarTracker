import uuid from 'uuid';
import { ADD_SERVICE, EDIT_SERVICE, REMOVE_SERVICE } from './actionTypes';
//--------------------------
//--Expenses Action creators
//--------------------------
//ADD_EXPENSE
export const addService = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
  return {
    type: ADD_SERVICE,
    service: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  };
};
//EDIT EXPENSE
export const editService = (id, serviceObj) => {
  return {
    type: EDIT_SERVICE,
    id, 
    serviceObj
  }
};

//REMOVE EXPENSE
export const removeService = (id) => {
  return {
    type: REMOVE_SERVICE,
    id
  }
};