import Login from './Login';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Login Test', () => {
  it('should display the login form to the page', () => {
    const { getByText, getByPlaceholderText } = render(
      <Login />
    )

    expect(getByText('Login')).toBeInTheDocument();
    expect(getByPlaceholderText('Username')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
    expect(getByText('Submit')).toBeInTheDocument();
  });

  it('should be able to login', () => {
    const mockLogin = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <Login />
    )

    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const submitButton = getByText('Submit');

    fireEvent.change(usernameInput, { target: { value: 'defaultt' }})
    fireEvent.change(passwordInput, { target: { value: 'password' }})
    fireEvent.click(submitButton);

    expect(getByText('Username or Password doesn\'t exist')).toBeInTheDocument();

  })
})
