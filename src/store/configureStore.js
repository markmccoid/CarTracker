import { createStore, combineReducers } from 'redux';
import carsReducer from '../reducers/cars';
import servicesReducer from '../reducers/services'
import filtersReducer from '../reducers/filters';

export default () => {
  //store creation
  const store = createStore(
    combineReducers({
      cars: carsReducer,
      services: servicesReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  return store;
};