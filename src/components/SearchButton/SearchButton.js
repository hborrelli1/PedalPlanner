import React from 'react'
import PropTypes from 'prop-types'

import greenDifficulty from '../../svgs/green-difficulty.svg';
import blueDifficulty from '../../svgs/blue-difficulty.svg';
import blackDifficulty from '../../svgs/black-difficulty.svg';
import doubleBlackDifficulty from '../../svgs/double-black-difficulty.svg'

const SearchButton = ({ trail }) => {
  let trailDifficulty;
  const { id, name, difficulty, location } = trail;

  if (difficulty === 'green') {
    trailDifficulty = greenDifficulty;
  } else if (difficulty === 'blue') {
      trailDifficulty = blueDifficulty;
  } else if (difficulty === 'black') {
      trailDifficulty = blackDifficulty;
  } else if (difficulty === 'dblack') {
    trailDifficulty = doubleBlackDifficulty;
  }

  return (
    <button className="trail-button">
      <img src={trailDifficulty} alt="trail difficulty" />
      {name}
      <span className="trail-location">{location}</span>
    </button>
  )
}

export default SearchButton;
