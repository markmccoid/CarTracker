import React from 'react';
import PropTypes from 'prop-types';

class LoginWithEmail extends React.Component {
  static propTypes = {
    onEmailLogin: PropTypes.func
  }

  state = {
    emailInput: '',
    passwordInput: '',
  }
  onEmailChange = (e) => {
    const emailInput = e.target.value;
    this.setState({ emailInput });
  }
  onPasswordChange = (e) => {
    const passwordInput = e.target.value;
    this.setState({ passwordInput });
  }
  render() {
    return (
      <div>
        <input 
          type="text"
          name="email"
          placeholder="Email"
          value={this.state.emailInput}
          onChange={this.onEmailChange}
        />
        <input 
          type="text"
          name="password"
          placeholder="Password"
          value={this.state.passwordInput}
          onChange={this.onPasswordChange}
        />
        <div>
          <button onClick={() => this.props.onEmailLogin(this.state.emailInput, this.state.passwordInput)}>Login With Email</button>
        </div>
      </div>
  
    );
  }
}

export default LoginWithEmail;