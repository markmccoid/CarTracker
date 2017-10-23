import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ServiceDashboard from '../components/ServiceDashboard'; 
import EditService from '../components/EditService'; 
import AddService from '../components/AddService'; 
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';

const AppRouter = () => (
  <BrowserRouter>
  <div>
    <Header />
    <Switch>
      <Route path="/" component={ServiceDashboard} exact/>
      <Route path="/create" component={AddService} />
      <Route path="/edit/:id" component={EditService} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFound} />
    </Switch>
  </div>
</BrowserRouter>
);

export default AppRouter;