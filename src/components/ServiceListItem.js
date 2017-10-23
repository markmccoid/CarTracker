import React from 'react';
import { removeService } from '../actions/services';
import { Link } from 'react-router-dom';

const ServiceListItem = ({ id, description, amount, createdAt }) => {
  return (
    <div>
      <h1><Link to={`/edit/${id}`}>{description}</Link></h1>
      <p>{amount} - {createdAt}</p>
    </div>
  )
};

export default ServiceListItem;

