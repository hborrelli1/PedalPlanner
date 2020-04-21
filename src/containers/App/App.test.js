import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

describe('App Test', () => {
  it('renders to the DOM', () => {
    const testStore = createStore(rootReducer)
    const { getByText, getByPlaceholderText, debug } = render(
      <Provider store={testStore}>
        <Router>
          <App />
        </Router>
      </Provider>
    )
    expect(getByText('Sign In')).toBeInTheDocument();
    expect(getByPlaceholderText('Username')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
    expect(getByText('Submit')).toBeInTheDocument();
  });

  it.skip('should be able to click on form', () => {
    const testStore = createStore(rootReducer)
    const { getByText, getByPlaceholderText, debug } = render(
      <Provider store={testStore}>
        <Router>
          <App />
        </Router>
      </Provider>
    )

    const usernameInput = getByPlaceholderText('Username')
    const passwordInput = getByPlaceholderText('Password')
    const submitButton = getByText('Submit')

    fireEvent.change(usernameInput, { target: { value: 'pedalUser' } })
    fireEvent.change(passwordInput, { target: { value: 'pedalPass' } })
    fireEvent.click(submitButton)

    // Errors encountered here relating to Chart.js chart components...

    expect(getByText('Welcome back,')).toBeInTheDocument();
    expect(getByText('Upcoming Rides:')).toBeInTheDocument();
    expect(getByText('Past Rides:')).toBeInTheDocument();
  });

})
