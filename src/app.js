import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import 'semantic-ui-css/semantic.min.css';

import AppRouter from './routers/AppRouter';

import './styles/styles.scss';

import configureStore from './store/configureStore';

import * as serviceActions from './actions/services';
import * as carActions from './actions/cars';
import * as filterActions from './actions/filters';
import getVisibleServices from './store/selectors/services';


const store = configureStore();

store.dispatch({
  type: 'ADD_SERVICE',
  service: {
    id: 22,
    description: 'desc',
    note: 'note',
    amount: 33,
    createdAt: 0
  }
});
store.dispatch(filterActions.setTextFilter('TEST'));
console.log(store.getState());
store.dispatch(carActions.startSetCars());
// store.dispatch(serviceActions.addService({description: 'Water Bill', amount: 12500, createdAt: 0}));
// store.dispatch(serviceActions.addService({description: 'FPL Bill', amount: 22500, createdAt: 100}));
// store.dispatch(serviceActions.addService({description: 'Audible', amount: 1995, createdAt: 50}));
// store.dispatch(serviceActions.addService({description: 'Money Gone', amount: 45, createdAt: 2050}));

const { services, filters } = store.getState();
console.log(getVisibleServices(services, filters));


ReactDOM.render((<Provider store={store}>
                    <AppRouter />
                  </Provider>), document.getElementById('app'));
