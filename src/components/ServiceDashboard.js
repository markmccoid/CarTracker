import React from 'react';
import ServiceList from './ServiceList';
import ServiceListFilters from './ServiceListFilters';

const ServiceDashboard = () => (
  <div>
    <h1>Service Dashboard</h1>
    <ServiceListFilters />
    <ServiceList />
  </div>);

  export default ServiceDashboard;