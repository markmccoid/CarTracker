import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import ServiceList from './ServiceList';
import ServiceListFilters from './ServiceListFilters';

const ServiceDashboard = () => (
  <div>
    <div className="content-container">
      <div className="dashboard-header">
        <h1 style={{margin: "1rem"}}>Service Dashboard</h1>
        <NavLink className="button dashboard-links" to="/create" activeClassName="is-active">Add Service </NavLink>
        <NavLink className="button dashboard-links" to="/addcar" activeClassName="is-active">Cars </NavLink>
      </div>
    </div>
    <ServiceListFilters />
    <ServiceList />
  </div>);

export default ServiceDashboard;
