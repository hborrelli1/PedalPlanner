import React from 'react'
import PropTypes from 'prop-types'

import greenDifficulty from '../../svgs/green-difficulty.svg';
import greenBlueDifficulty from '../../svgs/green-blue-difficulty.svg';
import blueDifficulty from '../../svgs/blue-difficulty.svg';
import blackDifficulty from '../../svgs/black-difficulty.svg';
import blueBlackDifficulty from '../../svgs/blue-black-difficulty.svg';
import doubleBlackDifficulty from '../../svgs/double-black-difficulty.svg'

const SearchButton = ({ trail, history }) => {
  let trailDifficulty;
  const { id, name, difficulty, location } = trail;

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

SearchButton.propTypes = {
  trail: PropTypes.object,
  history: PropTypes.object,
}

export default SearchButton;
