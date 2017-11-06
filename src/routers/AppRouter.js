import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import styled from 'styled-components';

import ServiceDashboard from '../components/ServiceDashboard';
import EditService from '../components/EditService';
import AddService from '../components/AddService';
import NotFound from '../components/NotFound';
import AddCar from '../components/cars/AddCar';
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
margin: 25px;
padding: 10px;
`;

export const history = createHistory();

const AppRouter = () => (
  <Router history={history} >
    <Wrapper>
      <Switch>
        <PublicRoute exact path="/" component={Login} />
        <PrivateRoute path="/dashboard" component={ServiceDashboard} />
        <PrivateRoute path="/addcar" component={AddCar} />
        <PrivateRoute path="/create" component={AddService} />
        <PrivateRoute path="/edit/:id" component={EditService} />
        <Route component={NotFound} />
      </Switch>
    </Wrapper>
  </Router>
);

export default AppRouter;
