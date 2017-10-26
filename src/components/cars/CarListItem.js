import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;

`;

const Field = styled.div`
  width: 100%;
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
`;

const CarListItem = (props) => {
  return (
    <Wrapper>
      <Field>{props.car.nickName}</Field>
      <Field>{props.car.make}</Field>
      <Field>{props.car.model}</Field>
      <Field>{props.car.year}</Field>
    </Wrapper>

  )
};

export default CarListItem;