import React from 'react'
import PropTypes from 'prop-types'
import RideBlock from '../RideBlock/RideBlock';

import { connect } from 'react-redux';

const UserProfile = (props) => {
  const { userInfo } = props;
  let pastRideBlocks;

  userInfo.pastRides
    ? pastRideBlocks = userInfo.pastRides.map(ride => (
        <RideBlock
          key={ride.id}
          rideInfo={ride}
        />
      ))
    : pastRideBlocks =
      (<p>No past rides to display. Time to plan another ride!</p>);

  return (
    <div className="user-profile">
      <div className="welcome-block block">
        <h1>
          <span class="welcome">Welcome back,</span>
          <span>Harry</span>
      </h1>
      </div>
      <div className="ride-log block">
        <h2><span>Upcoming Rides</span></h2>

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
