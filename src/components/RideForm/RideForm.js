import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import { planRide } from '../../actions';

class RideForm extends React.Component {
  constructor() {
    super();
    this.state = {
      date: '',
      time: '',
      message: '',
      friends: [],
      isSubmitted: false
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleFriends = (event) => {
    if (event.target.value === ('default')) {
      this.setState({ friends: [] })
    } else if (this.state.friends.includes(event.target.value)) {
      let filteredOptions = this.state.friends.filter(friend => friend !== event.target.value);
      this.setState({ friends: filteredOptions });
    } else {
      this.setState({ friends: [
        ...this.state.friends,
        event.target.value
      ] });
    }
  }

  handleSubmitRideForm = (event) => {
    event.preventDefault();
    const { trailInfo } = this.props;
    const ridePlan = {
      id: Date.now(),
      date: this.state.date,
      time: this.state.time,
      trail: trailInfo.name,
      trailId: trailInfo.id,
      location: trailInfo.location,
      difficulty: trailInfo.difficulty,
      message: this.state.message,
      friends: this.state.friends
    }

    this.props.planRide(ridePlan);
    this.setState({ isSubmitted: true });
  }

  validateForm = () => {
    const { date } = this.state;
    if (date === '') {
      return true;
    } else {
      return false;
    }
  }

  resetForm = () => {
    this.setState({
      date: '',
      time: '',
      message: '',
      friends: [],
      isSubmitted: false
    })
  }

  render () {
    let initialSelectValue = <option value="default">-- Select a Friend --</option>
    const { friends } = this.state;
    const { userInfo } = this.props;

    const friendsOptionsList = userInfo.friends
      ? userInfo.friends.map((friend, index) => (
        <option value={friend}>{friend}</option>
      ))
      : '';

    return (
      <form>
        <h2>Plan A Ride</h2>
        <div className="column">
          <div className="form-block">
            <label htmlFor="date">
              <span>Date:</span>
            </label>
            <input
              id="date"
              type="date"
              name="date"
              placeholder="YYYY-MM-DD"
              value={this.state.date}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-block">
            <label htmlFor="time">
              <span>Time:</span>
            </label>
            <input
              id="time"
              type="text"
              name="time"
              placeholder="10:00am"
              value={this.state.time}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-block">
            <label htmlFor="note">
              <span>Leave a Note:</span>
            </label>
            <textarea
              id="note"
              name="message"
              placeholder="Message"
              data-testid="select"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="column">
          <div className="form-block">
            <label htmlFor="friends">
              <span>Invite Friends:</span>
            </label>
            <select
              multiple
              id="friends"
              name="friends"
              value={this.state.friends}
              onChange={this.handleFriends}
            >
              {initialSelectValue}
              {friendsOptionsList}
            </select>
          </div>
          {!this.state.isSubmitted && (<button
            onClick={this.handleSubmitRideForm}
            disabled={this.validateForm()}
          >Send Invite!</button>)}
          {this.state.isSubmitted && (
            <div>
              <p>Your ride has been scheduled!</p>
              <button
                onClick={this.resetForm}
              >Plan another trip</button>
            </div>
          )}
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo,
})

const mapDispatchToProps = dispatch => ({
  planRide: ride => dispatch( planRide(ride) ),
})

export default connect(mapStateToProps, mapDispatchToProps)(RideForm);
