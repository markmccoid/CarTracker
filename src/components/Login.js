import React from 'react';
import { connect } from 'react-redux';

import { startLogin } from '../actions/auth';

const Login = (props) => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="layout__title">Car Tracker</h1>
        <p>Login with Goodle</p>
        <button className="large_button"
          onClick={props.startLogin}
        >
        Login with Google
        </button>
      </div>
    </div>
  );
};

export default connect(undefined, {
  startLogin
})(Login);
