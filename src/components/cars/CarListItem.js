import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  border: 1px solid #ccc;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
`;

const Field = styled.div`
  width: 100%;
  margin: 10px;
`;
const CarInfo = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
`;
const FlexRight = styled.div`
  display: flex;
  justify-content: flex-end;
`

const CarListItem = (props) => {
  return (
      <Wrapper>
        <Field>
          <CarInfo>{props.car.nickName} - {props.car.year} {props.car.make} {props.car.model}</CarInfo>
          <CarInfo>{props.car.licensePlate} - {props.car.VIN}</CarInfo>
        </Field>
        <Field>
          <FlexRight>
            <button
              className="button button--size-xsmall"
              style={{marginRight: "10px"}}
              onClick={() => props.onEditCar(props.car.id)}>
              Edit
            </button>
            <button
              className="button button--size-xsmall"
              onClick={() =>{ console.log('remove'); props.onRemoveCar(props.car.id)}}>
              Remove
            </button>
          </FlexRight>
        </Field>
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
