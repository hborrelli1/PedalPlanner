import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import logo from '../../svgs/PedalPlanner-logo.svg';

const Nav = (props) => {
  return (
    <header>
      <div className="logo-block">
        <img src={logo} />
      </div>
      <nav>
        <Link
          to="/login"
          className="login-button"
          >
          Login
        </Link>
      </nav>
    </header>
  )
}

export default Nav
