import React from 'react';
import { connect } from 'react-redux';

import ServiceListItem from './ServiceListItem';
import selectVisibleServices from '../store/selectors/services';


const ServiceList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Services</div>
      <div className="show-for-desktop">Service</div>
      <div className="show-for-desktop">Amount</div>
    </div>

    { props.services.length === 0 ?
      <div className="list-item list-item--message">
        <span >No Services</span>
      </div>
      :
      props.services.map((service) => {
      return <ServiceListItem key={service.id} {...service} carNickName={props.cars.find(car => car.id === service.carId).nickName}/>
    })}

  </div>
);

const mapStateToProps = state => (
  {
    services: selectVisibleServices(state.services, state.filters),
    cars: state.cars
  }
);
export default connect(mapStateToProps)(ServiceList);
