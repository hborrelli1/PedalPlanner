  import Login from './Login';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Login Test', () => {
  it('should display the login form to the page', () => {
    const store = createStore(rootReducer);

    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    )

    expect(getByText('Sign In')).toBeInTheDocument();
    expect(getByPlaceholderText('Username')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
    expect(getByText('Submit')).toBeInTheDocument();
  });

  it('should get error message if login credentials are invalid', () => {
    const store = createStore(rootReducer);
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    )

    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const submitButton = getByText('Submit');

    fireEvent.change(usernameInput, { target: { value: 'defaultt' }})
    fireEvent.change(passwordInput, { target: { value: 'password' }})
    fireEvent.click(submitButton);

    expect(getByText('Username or Password are invalid.')).toBeInTheDocument();
  });

  it('should be able to login successfully', () => {
    const historyMock = { push: jest.fn() };
    const store = createStore(rootReducer);
    const { getByText, getByPlaceholderText, debug } = render(
      <Provider store={store}>
        <Login history={historyMock}/>
      </Provider>
    );

    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const submitButton = getByText('Submit');

    fireEvent.change(usernameInput, { target: { value: 'pedalUser' }})
    fireEvent.change(passwordInput, { target: { value: 'pedalPass' }})
    fireEvent.click(submitButton);

    expect(historyMock.push).toBeCalledTimes(1);
  })
})
