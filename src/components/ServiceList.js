import React from 'react';
import { connect } from 'react-redux';

import ServiceListItem from './ServiceListItem';
import selectVisibleServices from '../store/selectors/services';


const ServiceList = (props) => (
  <div>
    <h1>List Of Services</h1>

    {props.services.map(service => {
      return <ServiceListItem key={service.id} {...service} />
    })}

  </div>
)
const mapStateToProps = (state) => (
  {
    services: selectVisibleServices(state.services, state.filters)
  }
)
export default connect(mapStateToProps)(ServiceList);