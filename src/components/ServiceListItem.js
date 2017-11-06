import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

import { removeService } from '../actions/services';

const ServiceListItem = (props) => {
  return (
    <div>
      <h1><Link to={`/edit/${id}`}>{props.description}</Link></h1>
      <p>{numeral(props.amount / 100).format('$0,0.00')} - {moment(props.createdAt).format('MM-DD-YYYY')}</p>
    </div>
  );
};

export default ServiceListItem;
