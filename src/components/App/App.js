import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, Redirect } from 'react-router-dom'
import Nav from '../Nav/Nav';
import Login from '../Login/Login';

import logo from '../../logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { userInfo } = this.props;

    return (
      <main>
        <Nav />
        {!userInfo.username && <Redirect to="/login" />}
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <p>UserProfile</p>
              <p>Dashboard</p>
            </div>
          )}
        />
        <Route
          path="/login"
          render={() => <Login />}
        />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo,
})

export default connect(mapStateToProps,null)(App);
