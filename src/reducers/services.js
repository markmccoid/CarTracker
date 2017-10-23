//-------------------------
//--Services Reducer -- 
//-- Allows Add, Edit, Remove a server
//-------------------------
import { ADD_SERVICE, EDIT_SERVICE, REMOVE_SERVICE } from '../actions/actionTypes';

const servicesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SERVICE:
      return [...state, action.service];
    case EDIT_SERVICE:
    // let obj = state.filter(service => service.id === action.id)[0];
    // let reduceState = state.filter(service => service.id !== action.id);
    // return [...reduceState, {...obj, ...action.serviceObj}];

    return state.map(service => {
      if (service.id === action.id) {
        return {...service, ...action.serviceObj}
      }
      return service;
    });
  case REMOVE_SERVICE:
    return state.filter(service => service.id !== action.id)
    default:
      return state;
  }
};

export default servicesReducer;