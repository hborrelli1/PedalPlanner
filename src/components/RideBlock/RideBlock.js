import React from 'react'
import PropTypes from 'prop-types'
import logoIcon from '../../svgs/pedalPlanner-logo-icon.svg';

const RideBlock = ({ rideInfo }) => {

  console.log(rideInfo);
  const { id, date, trail, location , friends } = rideInfo;

  const friendsList = friends.join(', ');
  return (
    <div className="ride-block">
      <h3>
        <img src={logoIcon} alt="PedalPlanner logo icon" />
        {date}
      </h3>
      <h4><span>Trail:</span></h4>
      <p>{trail} | {location}</p>
      <h4><span>Friends:</span></h4>
      <p>{friendsList}</p>
    </div>
  )
}

export default RideBlock
