import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

import { removeService } from '../actions/services';

const ServiceListItem = ({ id, description, amount, createdAt }) => {
  return (
    <div>
      <h1><Link to={`/edit/${id}`}>{description}</Link></h1>
      <p>{numeral(amount/100).format('$0,0.00')} - {moment(createdAt).format('MM-DD-YYYY')}</p>
    </div>
  )
};

export default ServiceListItem;
