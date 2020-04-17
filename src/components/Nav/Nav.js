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

  const logoPath = userInfo.username ? '/' : '/login';
  const loginButtonText = userInfo.username ? 'Logout' : 'Login';

  return (
    <header>
      <Link
        to={logoPath}
        className="logo-block"
      >
        <img src={logo} />
      </Link>
      <nav>
        {location.pathname !== '/login' && (
          <Link
            to="/login"
            className="login-button"
            onClick={() => handleLogout()}
          >
            {loginButtonText}
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
