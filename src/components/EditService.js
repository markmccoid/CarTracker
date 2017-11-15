import React from 'react';
import { connect } from 'react-redux';

import ServiceForm from './ServiceForm';
import { startEditService, startRemoveService } from '../actions/services';

const EditService = (props) => {
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Service Record</h1>
        </div>
      </div>
      <div className="content-container">
        <ServiceForm
          descArray={props.descArray}
          serviceArray={props.serviceArray}
          onSubmit={(serviceObj) => {
              props.dispatch(startEditService(props.match.params.id, serviceObj));
              props.history.push('/');
            }
          }
          service={props.service}
          cars={props.cars}
        />
        <button className="button button--secondary"
          onClick={() => {
            props.dispatch(startRemoveService(props.match.params.id));
            props.history.push('/');
          }
          }
        >
          Remove Service
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    service: state.services.find(service => service.id === props.match.params.id),
    cars: state.cars,
    descArray: Object.keys(state.services).map((key) => state.services[key].description),
    serviceArray: Object.keys(state.services).map((key) => state.services[key].serviceProvider),
  };
};

export default connect(mapStateToProps)(EditService);
