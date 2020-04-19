import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';

import RideForm from './RideForm';

describe('RideForm Tests', () => {
  it('should render to the DOM', () => {
    const store = createStore(rootReducer);

    const { getByText, getByPlaceholderText, getByTestId } = render(
      <Provider store={store}>
        <RideForm />
      </Provider>
    )

    const header = getByText('Plan A Ride');
    const dateInput = getByPlaceholderText('MM/DD/YY');
    const messageTextarea = getByPlaceholderText('Message');
    const friendSelect = getByTestId('select');
    const submitButton = getByText('Send Invite!');

    expect(header).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(messageTextarea).toBeInTheDocument();
    expect(friendSelect).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
