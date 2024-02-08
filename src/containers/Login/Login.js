import React from 'react'
import PropTypes from 'prop-types'
import { login } from '../../actions';
import { connect } from 'react-redux';
// import { apiGetLocalTrails } from '../../apiCalls/apiCalls';
import { setLocalTrails } from '../../actions';
import mockTrailInfo from '../../mocks/mocked-trail';

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
          date: '2020-03-22',
          time: '7:00pm',
          trail: 'White Ranch Trail',
          trailId: 632917,
          difficulty: 'black',
          location: 'Golden, CO',
          friends: ['Tyler', 'Jeff', 'Doug'],
          message: "Let's shred boys!"
        },
        {
          id: 2,
          date: '2020-03-28',
          time: '4:00pm',
          trail: 'Buffalo Creek Mini Tour',
          trailId: 7008221,
          difficulty: 'black',
          location: 'Pine, CO',
          friends: ['Spencer'],
          message: "Let's hit the brewery on our way back!"
        }
      ],
      upcomingRides: [
        {
          id: 1,
          date: '2020-09-02',
          time: '11:00am',
          trail: 'The Whole Enchilada',
          trailId: 4670265,
          difficulty: 'black',
          location: 'Moab, UT',
          friends: ['Spencer', 'Jeff', 'Doug'],
          message: "The plan is to leave Denver at 6pm the day before"
        },
      ]
    }

    let validCredentials =
      (this.state.username === 'pedalUser')
        && (this.state.password === 'pedalPass');

    if (validCredentials) {
      this.setState({ error: '' })
      this.props.login(userData);
      this.props.history.push('/');
      // apiGetLocalTrails()
      //   .then(info => this.props.setTrails(info.trails))
      this.props.setTrails(mockTrailInfo)
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
          <p><span>SHRED</span> the trails</p>
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

Login.propTypes = {
  history: PropTypes.object,
  userInfo: PropTypes.object,
  localTrails: PropTypes.array,
  login: PropTypes.func,
  setTrails: PropTypes.func,
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
