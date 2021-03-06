import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import styled from 'styled-components';

import { removeService } from '../actions/services';

const ListLeft = styled.div`
  width: 40%;
`;
const ListNote = styled.div`
  width: 35%;
  align-self: flex-start;
`;
const ListRight = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 25%
`;
const DateStyle = styled.span`
  font-size: 1.1rem;
  font-style: italic;
`;
const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;
const ServiceListItem = (props) => {
  return (
    <Link className="list-item" style={{position: "relative"}}to={`/edit/${props.id}`}>
      <ListLeft>
        <h3 className="list-item__title">{props.serviceDescription} -
          <DateStyle> {moment(props.serviceDate).format('MMM Do, YYYY')}</DateStyle>
        </h3>
        <div><strong>Service Provider: </strong> <span className="list-item__subtitle">{props.serviceProvider}</span></div>
        <div><strong>Car: </strong> <span className="list-item__subtitle">{props.carNickName}</span></div>
      </ListLeft>
      <ListNote>
        <span>{props.serviceNote}</span>
      </ListNote>

      <ListRight>
        <h3>{numeral(props.serviceCost / 100).format('$0,0.00')}</h3>
      </ListRight>
      <DeleteButton>
      Delete
      </DeleteButton>
    </Link>
  );
};

export default ServiceListItem;


/*--USING styled-components
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
`;
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
*/
