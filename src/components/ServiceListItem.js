import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import styled from 'styled-components';

import { removeService } from '../actions/services';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  justify-content: space-between;
  margin-top: 1.2rem;
`
const CardRow = styled.div`
  display: flex;
  border-top: 1px solid #ccc;
`
const ServiceListItem = (props) => {
  return (
    <Card>
      <CardRow>
        <h1>{props.carNickName}</h1>
        <h1><Link to={`/edit/${props.id}`}>{props.description}</Link></h1>
      </CardRow>
      <CardRow>
        Service Provider:{props.serviceProvider}
      </CardRow>
      <CardRow>
        Cost:{numeral(props.amount / 100).format('$0,0.00')}
        Date of Service:{moment(props.createdAt).format('MM-DD-YYYY')}
      </CardRow>
      <CardRow>
        {props.notes || 'No Notes'}
      </CardRow>

    </Card>
  );
};

export default ServiceListItem;
