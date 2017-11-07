import React from 'react';
import { connect } from 'react-redux';

import ServiceForm from './ServiceForm';
import { startEditService, startRemoveService } from '../actions/services';

const EditService = (props) => {
  return (
    <div>
      <ServiceForm
        onSubmit={(serviceObj) => {
            props.dispatch(startEditService(props.match.params.id, serviceObj));
            props.history.push('/');
          }
        }
        service={props.service}
        cars={props.cars}
      />
      <button onClick={() => {
          props.dispatch(startRemoveService(props.match.params.id));
          props.history.push('/');
        }
        }
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    service: state.services.find(service => service.id === props.match.params.id),
    cars: state.cars
  };
};

export default connect(mapStateToProps)(EditService);
