import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

import Nav from '../Nav/Nav';
import Login from '../Login/Login';
import SearchBar from '../SearchBar/SearchBar';
import UserProfile from '../UserProfile/UserProfile';
import Metrics from '../../components/Metrics/Metrics';
import TrailDisplay from '../../components/TrailDisplay/TrailDisplay';

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
        <Route
          path="/"
          render={() => <Nav location={location} />}
        />

        {!userInfo.username && <Redirect to="/login" />}

        <Route
          exact
          path="/"
          render={({ history }) => (
            <div className="dashboard">
              <UserProfile history={history} />
              <div className="main-content">
                <SearchBar
                  history={this.props.history}
                />
                <Metrics
                  type="bar"
                  display='Distance'
                />
                <Metrics
                  type="line"
                  display='Elevation'
                />
              </div>
            </div>
          )}
        />

        <Route
          path="/trails/:id"
          render={({ match, history }) => {
            const trail = this.props.localTrails.find(trail => trail.id === parseInt(match.params.id));

            return (<div className="dashboard">
              <UserProfile history={history} />
              <div className="main-content">
                <SearchBar
                  history={this.props.history}
                />
                <TrailDisplay trail={trail}/>
              </div>
            </div>)
          }}
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
  localTrails: state.localTrails,
})

export default connect(mapStateToProps,null)(withRouter(App));
