import React from 'react';
import ServiceList from './ServiceList';
import ServiceListFilters from './ServiceListFilters';

const ServiceDashboard = () => (
  <div>
    <div className="content-container">
      <h1>Service Dashboard</h1>
    </div>
    <ServiceListFilters />
    <ServiceList />
  </div>);

export default ServiceDashboard;
