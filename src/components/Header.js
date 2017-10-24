import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Car Tracker</h1>
    <NavLink exact to="/" activeClassName="is-active">Home </NavLink>
    <NavLink to="/create" activeClassName="is-active">Add Service </NavLink>
    <NavLink to="/addcar" activeClassName="is-active">Add Car </NavLink>
    <NavLink to="/help" activeClassName="is-active">Help </NavLink>
    
  </header>
)

export default Header;