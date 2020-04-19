import React from 'react'
import PropTypes from 'prop-types'
import { login } from '../../actions';
import { connect } from 'react-redux';

import { apiGetLocalTrails } from '../../apiCalls/apiCalls';
import { setLocalTrails } from '../../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    }
  }

  handleChange = (event) => {
    this.validateForm();
    this.setState({ [event.target.name]: event.target.value  })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      name: 'Harry',
      username: this.state.username,
      location:'',
      friends: ['Tyler', 'Jeff', 'Doug'],
      pastRides: [
        {
          id: 1,
          date: 'May 22',
          trail: 'White Ranch Trail',
          difficulty: 'black',
          location: 'Golden, CO',
          friends: ['Tyler', 'Jeff', 'Doug']
        },
        {
          id: 2,
          date: 'May 28',
          trail: 'Buffalo Creek Mini Tour',
          difficulty: 'black',
          location: 'Pine, CO',
          friends: ['Spencer']
        }
      ],
      upcomingRides: []
    }

    let validCredentials =
      (this.state.username === 'pedalUser')
        && (this.state.password === 'pedalPass');

    if (validCredentials) {
      this.setState({ error: '' })
      this.props.login(userData);
      this.props.history.push('/');
      // Fetch all trails within 200 mile range of denver
      apiGetLocalTrails()
        .then(info => this.props.setTrails(info.trails))
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
      <div className="login-wrapper">
        <div className="tagline-block">
          <p><span>PLAN</span> a ride</p>
          <p><span>INVITE</span> some friends</p>
          <p><span>SHRED</span> the trials</p>
        </div>
        <form>
          <h1><span>Sign In</span></h1>
          <span className="error-message">{this.state.error}</span>
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
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
  localTrails: state.localTrails
})

const mapDispatchToProps = dispatch => ({
  login: userInfo => dispatch( login(userInfo) ),
  setTrails: trails => dispatch( setLocalTrails(trails) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
