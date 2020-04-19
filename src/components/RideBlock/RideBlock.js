import React from 'react'
import PropTypes from 'prop-types'
import logoIcon from '../../svgs/pedalPlanner-logo-icon.svg';

import greenDifficulty from '../../svgs/green-difficulty.svg';
import blueDifficulty from '../../svgs/blue-difficulty.svg';
import blackDifficulty from '../../svgs/black-difficulty.svg';
import doubleBlackDifficulty from '../../svgs/double-black-difficulty.svg'

const RideBlock = ({ rideInfo }) => {
  let trailDifficulty;
  let friendsList
  const { id, date, trail, location, difficulty, friends } = rideInfo;

  if (difficulty === 'green') {
    trailDifficulty = greenDifficulty;
  } else if (difficulty === 'blue') {
      trailDifficulty = blueDifficulty;
  } else if (difficulty === 'black') {
      trailDifficulty = blackDifficulty;
  } else if (difficulty === 'dblack') {
    trailDifficulty = doubleBlackDifficulty;
  }

  if (friends) {
    friendsList = friends.join(', ')
  } else {
    friendsList = 'Solo Ride'
  }

  return (
    <div className="ride-block">
      <p className="date">{date}</p>
      <h4><span>Trail:</span></h4>
      <p>
        <img src={trailDifficulty} alt="Trail Difficulty" />
        {trail} | {location}
      </p>
      <h4><span>Friends:</span></h4>
      <p>{friendsList}</p>
    </div>
  )
}

export default RideBlock
