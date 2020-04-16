import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Nav = (props) => {
  return (
    <header>
      <div>
        Logo Here.
      </div>
      <Link
        to="/login"
      >
        Login
      </Link>
    </header>
  )
}

export default Nav
