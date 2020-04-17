import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

import Nav from '../Nav/Nav';
import Login from '../Login/Login';
import SearchBar from '../SearchBar/SearchBar';
import UserProfile from '../UserProfile/UserProfile';

import { apiGetLocalTrails } from '../../apiCalls/apiCalls';

import logo from '../../logo.svg';
import backgroundImage from '../../images/mountain-bike-bg.jpg';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { userInfo, location, history } = this.props;
    const backgroundStyle = location.pathname === '/login'
      ? `url(${backgroundImage})`
      : '';
    const mainLoginClass = location.pathname === '/login'
      ? 'app-bg-img-layer'
      : '';

    const mainStyle = {
      backgroundImage: backgroundStyle,
    }

    return (
      <main
        style={mainStyle}
        className={mainLoginClass}
      >

        <Nav />
        {!userInfo.username && <Redirect to="/login" />}
        <Route
          exact
          path="/"
          render={() => (
            <div className="dashboard">
              <UserProfile />
              <SearchBar />
              <p>Dashboard</p>
            </div>
          )}
        />
        <Route
          path="/login"
          render={() => <Login history={history} />}
        />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo,
})

export default connect(mapStateToProps,null)(withRouter(App));
