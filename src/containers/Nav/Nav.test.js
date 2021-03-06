import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactTestUtils from 'react-dom/test-utils';

import Nav from './Nav';

describe('Nav Tests', () => {
  it('should be able to render to the DOM', () => {
    const locationMock = { pathname: '/' };
    const store = createStore(rootReducer);

    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Nav
            location={locationMock}
          />
        </Router>
      </Provider>
    )

    expect(getByTestId('logo')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
  });

  it('should be able to render to the DOM without button if url is "/login"', () => {
    const locationMock = { pathname: '/login' };
    const store = createStore(rootReducer);

    const { getByText, getByTestId, queryByText } = render(
      <Provider store={store}>
        <Router>
          <Nav
            location={locationMock}
          />
        </Router>
      </Provider>
    )

    expect(getByTestId('logo')).toBeInTheDocument();
    expect(queryByText('Login')).toBeNull();
  });

  it('should be able to click Logout', () => {
    const locationMock = { pathname: '/' };
    const initialState = {  userInfo: { username: 'Harry'} };
    const store = createStore(rootReducer, initialState);

    const { getByText, getByTestId, debug } = render(
      <Provider store={store}>
        <Router>
          <Nav
            location={locationMock}
            userInfo={{username: 'harry'}}
          />
        </Router>
      </Provider>
    )

    expect(getByTestId('logo')).toBeInTheDocument();
    expect(getByText('Logout')).toBeInTheDocument();

    fireEvent.click(getByText('Logout'));

    expect(getByText('Login')).toBeInTheDocument();
  });

});
