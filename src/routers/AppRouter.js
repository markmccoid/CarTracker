import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import ServiceDashboard from '../components/ServiceDashboard';
import EditService from '../components/EditService';
import AddService from '../components/AddService';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';
import AddCar from '../components/cars/AddCar';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
margin: 25px;
padding: 10px;
`;

const AppRouter = () => (
  <BrowserRouter>
  <Wrapper>
    <Header />
    <Switch>
      <Route exact path="/" component={ServiceDashboard} />
      <Route path="/addcar" component={AddCar} />
      <Route path="/create" component={AddService} />
      <Route path="/edit/:id" component={EditService} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFound} />
    </Switch>
  </Wrapper>
</BrowserRouter>
);

export default AppRouter;