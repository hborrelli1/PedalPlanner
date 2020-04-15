import React from 'react'
import PropTypes from 'prop-types'

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
      defaultUser: {
        username: 'default',
        password: 'password'
      }
    }
  }

  handleChange = (event) => {
    this.validateForm();
    this.setState({ [event.target.name]: event.target.value  })
  }

  handleSubmit = (event) => {
    event.preventDefault();

  }

  validateForm = () => {
    let validCredentials =
      (this.state.username === this.state.defaultUser.username)
      && (this.state.password === this.state.defaultUser.password);

    return validCredentials ? false : true;
  }

  render () {
    return (
      <form>
        <h1>Login</h1>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button
          onClick={this.handleSubmit}
          disabled={this.validateForm()}
        >Login</button>
      </form>
    )
  }
}

export default Login;
