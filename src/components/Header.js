import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = props => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1 >Car Tracker</h1>
        </Link>
        <NavLink className="button" to="/create" activeClassName="is-active">Add Service </NavLink>
        <NavLink className="button" to="/addcar" activeClassName="is-active">Cars </NavLink>
        <button className="button button--style-blank"
          onClick={props.startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

export default connect(undefined, { startLogout })(Header);
