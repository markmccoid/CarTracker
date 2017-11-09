import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;

`;

const Field = styled.div`
  width: 100%;
  margin: 10px;
`;

const CarListItem = (props) => {
  return (
      <Wrapper>
        {props.car.nickName}
        <button onClick={() => props.onEditCar(props.car.id)}>
          Edit
        </button>
      </Wrapper>
  );
};

export default CarListItem;



/*
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
      onSave={(model) => {
          console.log('edit', props.car.id, model);
          props.onEditCar(props.car.id, { model });
        }
      }
    />
  </Field>
  <Field>
    <EditableFieldSemantic
      fieldValue={props.car.year}
      inputType="input"
      onSave={year => props.onEditCar(props.car.id, { year })}
    />
  </Field>
  <Field>
    <EditableFieldSemantic
      fieldValue={props.car.licensePlate}
      inputType="input"
      onSave={licensePlate => props.onEditCar(props.car.id, { licensePlate })}
    />
  </Field>
  <Field>
    <EditableFieldSemantic
      fieldValue={props.car.VIN}
      inputType="input"
      onSave={VIN => props.onEditCar(props.car.id, { VIN })}
    />
  </Field>
</Wrapper>
*/
