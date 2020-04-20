import React from 'react'
import PropTypes from 'prop-types'

import RideForm from '../RideForm/RideForm';

import greenDifficulty from '../../svgs/green-difficulty.svg';
import blueDifficulty from '../../svgs/blue-difficulty.svg';
import blackDifficulty from '../../svgs/black-difficulty.svg';
import doubleBlackDifficulty from '../../svgs/double-black-difficulty.svg'

const TrailDisplay = ({ trail }) => {
  let trailDifficulty;

  if (!trail) {
    return (<div>This trail does not exist!</div>);
  }

  const {
    id,
    name,
    summary,
    difficulty,
    location,
    imgMedium,
    length,
    ascent,
    descent,
    high,
    low,
    conditionStatus,
    conditionDetails,
    conditionDate,
  } = trail;

  if (difficulty === 'green') {
    trailDifficulty = greenDifficulty;
  } else if (difficulty === 'blue') {
      trailDifficulty = blueDifficulty;
  } else if (difficulty === 'black') {
      trailDifficulty = blackDifficulty;
  } else if (difficulty === 'dblack') {
    trailDifficulty = doubleBlackDifficulty;
  }

  const backgroundStyle = {
    backgroundImage: `url(${imgMedium})`
  }

  return (
    <div className="trail-display">
      <div className="trail-img" style={backgroundStyle}>
      </div>
      <div className="trail-title">
        <img src={trailDifficulty} alt="trail difficulty" />
        <h2>{name}</h2>
        <p className="location">{location}</p>
      </div>
      <div className="trail-meta">
        <div className="length block">
          <h4><span>Length</span></h4>
          <p>{length} <span className="units">mi</span></p>
        </div>
        <div className="elevation block">
          <h4><span>Elevation</span></h4>
          <div className="high-low">
            <p><span>High</span>{high} <span className="units">ft</span></p>
            <p><span>Low</span>{low} <span className="units">ft</span></p>
          </div>
        </div>
        <div className="ascent block">
          <h4><span>Ascent</span></h4>
          <p>{ascent} <span className="units">ft</span></p>
        </div>
        <div className="descent block">
          <h4><span>Descent</span></h4>
          <p>{descent} <span className="units">ft</span></p>
        </div>
      </div>
      <p className="summary">
        <span className='quote'>"{summary}"</span>
      </p>
      <div className="plan-ride">
        <RideForm
          trailInfo={trail}
        />
      </div>
    </div>
  )
}

export default TrailDisplay;
