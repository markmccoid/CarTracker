import React from 'react';
import styled from 'styled-components';
import EditableFieldSemantic from '../common/EditableFieldSemantic';


const Wrapper = styled.div`
  display: flex;
  width: 960px;
`;

const Field = styled.div`
  width: 100%;
  margin: 10px;
`;

const CarListItem = (props) => {
  return (
    <Wrapper>
      <Field>
        <EditableFieldSemantic
          fieldValue={props.car.nickName}
          inputType="input"
          onSave={nickName => props.onEditCar(props.car.id, { nickName })}
        />
      </Field>
      <Field>
        <EditableFieldSemantic
          fieldValue={props.car.make}
          inputType="input"
          onSave={make => props.onEditCar(props.car.id, { make })}
        />
      </Field>
      <Field>
        <EditableFieldSemantic
          fieldValue={props.car.model}
          inputType="input"
          onSave={model => props.onEditCar(props.car.id, { model })}
        />
      </Field>
      <Field>
        <EditableFieldSemantic
          fieldValue={props.car.year}
          inputType="input"
          onSave={year => props.onEditCar(props.car.id, { year })}
        />
      </Field>
    </Wrapper>

  )
};

export default CarListItem;