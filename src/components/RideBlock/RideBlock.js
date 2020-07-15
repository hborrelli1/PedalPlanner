import React from 'react'
import PropTypes from 'prop-types'

import greenDifficulty from '../../svgs/green-difficulty.svg';
import blueDifficulty from '../../svgs/blue-difficulty.svg';
import blackDifficulty from '../../svgs/black-difficulty.svg';
import doubleBlackDifficulty from '../../svgs/double-black-difficulty.svg'

const RideBlock = ({ rideInfo, status, history }) => {
  let moment = require('moment');
  let trailDifficulty;
  let friendsList;
  const {
    date,
    time,
    message,
    trail,
    trailId,
    location,
    difficulty,
    friends
  } = rideInfo;
  const formattedDate = moment(date, 'YYYY-MM-DD').format('MM/DD/YY');

  if (difficulty === 'green') {
    trailDifficulty = greenDifficulty;
  } else if (difficulty === 'blue') {
    trailDifficulty = blueDifficulty;
  } else if (difficulty === 'greenBlue') {
    trailDifficulty = greenBlueDifficulty
  } else if ( difficulty === 'blueBlack') {
    trailDifficulty = blueBlackDifficulty
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

  const friendsDisplay = friends.length
    ? (<div><h4><span>Friends:</span></h4><p>- {friendsList}</p></div>)
    : '' ;

  const messageDisplay = message !== ''
    ? (<div><h4><span>Message:</span></h4><p>- {message}</p></div>)
    : '' ;

  const handleTrailClick = (event) => {
    event.preventDefault();
    history.push(`/trails/${trailId}`)
  }

  return (
    <div
      className="ride-block"
    >
      <p className="time">{time}</p>
      <p className="date">{formattedDate}</p>
      <h4><span>Trail:</span></h4>
      <p>
        <img src={trailDifficulty} alt="Trail Difficulty" />
        <button
          onClick={handleTrailClick}
        >
          {trail} | {location}
        </button>
      </p>
      {friendsDisplay}
      {messageDisplay}
    </div>
  )
}

RideBlock.propTypes = {
  rideInfo: PropTypes.object,
  status: PropTypes.string,
  history: PropTypes.object,
}

export default RideBlock;
