import React from 'react'
import PropTypes from 'prop-types'
import { login } from '../../actions';
import { connect } from 'react-redux';

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

    let validCredentials =
      (this.state.username === this.state.defaultUser.username)
        && (this.state.password === this.state.defaultUser.password);

    if (validCredentials) {
      console.log('Redirecting to hompage');
      this.setState({ error: '' })
      this.props.login({username: 'Harry'})
    } else {
      this.setState({ error: 'Username or Password are invalid.' });
    }
  }

  validateForm = () => {
    let validateInputs =
      (this.state.username !== '')
      && (this.state.password !== '');

    return validateInputs ? false : true;
  }

  render () {
    return (
      <form>
        <h1>Login</h1>
        <span>{this.state.error}</span>
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
        >Submit</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
})

const mapDispatchToProps = dispatch => ({
  login: userInfo => dispatch( login(userInfo) ),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
