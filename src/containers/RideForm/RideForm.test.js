import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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
    const dateInput = getByPlaceholderText('YYYY-MM-DD');
    const messageTextarea = getByPlaceholderText('Message');
    const friendSelect = getByTestId('select');
    const submitButton = getByText('Send Invite!');

    expect(header).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(messageTextarea).toBeInTheDocument();
    expect(friendSelect).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should be able to submit form', () => {
    const mockHandleSubmitRideForm = jest.fn();
    const mockTrailInfo = {
      "id": 46286,
      "name": "Betasso Preserve",
      "type": "Ride",
      "summary": "A solid ride close to Boulder that is often ridden from town.",
      "difficulty": "blue",
      "stars": 4,
      "starVotes": 250,
      "imgMedium": "https://cdn-files.apstatic.com/mtb/7002944_medium_1554403854.jpg",
      "length": 7.4,
      "ascent": 829,
      "descent": -829,
      "high": 6589,
      "low": 6178,
      "longitude": -105.3422,
      "latitude": 40.0155,
      "conditionStatus": "Minor Issues",
      "conditionDetails": "Snowy, Some Mud, Icy",
      "conditionDate": "2020-03-08 18:49:53"
    };
    const store = createStore(rootReducer);

    const { getByText, getByPlaceholderText, getByTestId, debug } = render(
      <Provider store={store}>
        <RideForm
          handleSubmitRideForm={mockHandleSubmitRideForm}
          trailInfo={mockTrailInfo}
        />
      </Provider>
    )

    const header = getByText('Plan A Ride');
    const dateInput = getByPlaceholderText('YYYY-MM-DD');
    const timeInput = getByPlaceholderText('10:00am');
    const messageTextarea = getByPlaceholderText('Message');
    const friendSelect = getByTestId('select');
    const submitButton = getByText('Send Invite!');

    fireEvent.change(dateInput, {target: { value: '2020-04-16'}})
    fireEvent.change(timeInput, {target: { value: '9:00pm'}})
    fireEvent.change(messageTextarea, {target: { value: 'Lets shred it!'}})
    fireEvent.change(friendSelect, {target: { value: ['Tyler']}})

    fireEvent.click(submitButton);

    expect(getByText('Your ride has been scheduled!')).toBeInTheDocument()
  });
});
