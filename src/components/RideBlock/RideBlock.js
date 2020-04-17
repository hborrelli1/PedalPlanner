import React from 'react'
import PropTypes from 'prop-types'

const RideBlock = ({ rideInfo }) => {

  console.log(rideInfo);
  const { id, date, trail, location , friends } = rideInfo;

  const friendsList = friends.join(', ');
  return (
    <div>
      <h2>{date}</h2>
      <h3>Trail: </h3>
      <p>{trail} | {location}</p>
      <h3>Friends: </h3>
      <p>{friendsList}</p>
    </div>
  )
}

export default RideBlock
