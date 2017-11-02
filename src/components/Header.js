import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = props => (
  <header>
    <h1>Car Tracker</h1>
    <NavLink exact to="/" activeClassName="is-active">Home </NavLink>
    <NavLink to="/create" activeClassName="is-active">Add Service </NavLink>
    <NavLink to="/addcar" activeClassName="is-active">Add Car </NavLink>
    <NavLink to="/help" activeClassName="is-active">Help </NavLink>
    <button onClick={props.startLogout}>Logout</button>
  </header>
);

export default connect(undefined, { startLogout })(Header);
