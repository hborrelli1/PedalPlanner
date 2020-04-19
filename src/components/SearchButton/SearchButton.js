import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import greenDifficulty from '../../svgs/green-difficulty.svg';
import blueDifficulty from '../../svgs/blue-difficulty.svg';
import blackDifficulty from '../../svgs/black-difficulty.svg';
import doubleBlackDifficulty from '../../svgs/double-black-difficulty.svg'

const SearchButton = ({ trail, history }) => {
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

  const handleClick = (id) => {
    history.push(`/trails/${id}`);
  }

  return (
    <button
      type="submit"
      className="trail-button"
      onClick={() => handleClick(id)}
    >
      <img src={trailDifficulty} alt="trail difficulty" />
      {name}
      <span className="trail-location">{location}</span>
    </button>
  )
}

export default SearchButton;
