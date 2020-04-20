import React from 'react'
import PropTypes from 'prop-types'
import RideBlock from '../RideBlock/RideBlock';

import { connect } from 'react-redux';

const UserProfile = (props) => {
  const { userInfo, history } = props;
  let pastRideBlocks;
  let upcomingRideBlocks;
  let Moment = require('moment');

  userInfo.upcomingRides.length
    ? upcomingRideBlocks = userInfo.upcomingRides.sort((a,b) => {
      return Moment(a.date) - Moment(b.date)
    }).map(ride => (
        <RideBlock
          key={ride.id}
          rideInfo={ride}
          status='future'
          history={history}
        />
      ))
    : upcomingRideBlocks =
      <p>No upcoming rides to display. Time to plan another ride!</p>;

  userInfo.pastRides.length
    ? pastRideBlocks = userInfo.pastRides.sort((a,b) => {
      return Moment(b.date) - Moment(a.date)
    }).map(ride => (
        <RideBlock
          key={ride.id}
          rideInfo={ride}
          status='past'
          history={history}
        />
    ))
    : pastRideBlocks =
      <p>No past rides to display. Time to plan another ride!</p>;

  return (
    <div className="user-profile">
      <div className="welcome-block block">
        <h1>
          <span className="welcome">Welcome back,</span>
          <span>Harry</span>
      </h1>
      </div>
      <div className="ride-log block">
        <h2><span>Upcoming Rides</span></h2>
        {upcomingRideBlocks}
        <h2><span>Past Rides</span></h2>
        {pastRideBlocks}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
})

export default connect(mapStateToProps,null)(UserProfile);
