import React from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import logo from '../../svgs/PedalPlanner-logo.svg';

import { logout } from '../../actions';

const Nav = ({ userInfo, logout, location }) => {

  const handleLogout = () => {
    userInfo.username && logout();
  }

  return (
    <header>
      <div className="logo-block">
        <img src={logo} />
      </div>
      <nav>
        {location.pathname !== '/login' && (
          <Link
            to="/login"
            className="login-button"
            onClick={() => handleLogout()}
          >
            Login
          </Link>
        )}

      </nav>
    </header>
  )
}

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch( logout() ),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav))
