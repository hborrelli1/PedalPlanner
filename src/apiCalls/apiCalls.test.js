import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import App from '../containers/App/App';
import { apiGetLocalTrails } from './apiCalls.js';
jest.mock('./apiCalls');

describe('apiCalls Testing', () => {
  let trailsData;
  let userData;
  let initialState;

  beforeEach(() => {
    initialState = {
      userInfo: {
        name: 'Harry',
        username: 'pedalUser',
      	location:'',
      	friends: [],
        pastRides: [
          {
            id: 1,
            date: 'May 22',
            trail: 'White Ranch Trail',
            location: 'Golden, CO',
            friends: ['Tyler', 'Jeff', 'Doug']
          }
        ],
      	upcomingRides: []
      }
    }
    trailsData = [
      {
        "id": 46286,
        "name": "Betasso Preserve",
        "type": "Ride",
        "summary": "A solid ride close to Boulder that is often ridden from town.",
        "difficulty": "blue",
        "stars": 4,
        "starVotes": 250,
        "location": "Boulder, Colorado",
        "url": "https://www.mtbproject.com/trail/46286/betasso-preserve",
        "imgSqSmall": "https://cdn-files.apstatic.com/mtb/7002944_sqsmall_1554403854.jpg",
        "imgSmall": "https://cdn-files.apstatic.com/mtb/7002944_small_1554403854.jpg",
        "imgSmallMed": "https://cdn-files.apstatic.com/mtb/7002944_smallMed_1554403854.jpg",
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
      },
    ]

    userData = {
      name: 'Harry',
      username: '',
      location:'',
      friends: ['Tyler', 'Jeff', 'Doug'],
      pastRides: [
        {
          id: 1,
          date: '2020-03-22',
          time: '7:00pm',
          trail: 'White Ranch Trail',
          trailId: 632917,
          difficulty: 'black',
          location: 'Golden, CO',
          friends: ['Tyler', 'Jeff', 'Doug'],
          message: "Let's shred boys!"
        }
      ],
      upcomingRides: [
        {
          id: 1,
          date: '2020-05-02',
          time: '11:00am',
          trail: 'The Whole Enchilada',
          trailId: 4670265,
          difficulty: 'black',
          location: 'Moab, UT',
          friends: ['Spencer', 'Jeff', 'Doug'],
          message: "The plan is to leave Denver at 6pm the day before"
        },
      ]
    }
  })

  it.skip('should be able to fetch trails', () => {
    // apiGetLocalTrails.mockImplementation(login(userData));
    apiGetLocalTrails.mockResolvedValue(trailsData);
    const store = createStore(rootReducer);

    const { getByText, getByPlaceholderText, debug } = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    )

    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const submitButton = getByText('Submit');

    expect(usernameInput).toBeInTheDocument();

    fireEvent.change(usernameInput, { target: { value: 'pedalUser' } })
    fireEvent.change(passwordInput, { target: { value: 'pedalPass' } })
    fireEvent.click(submitButton);
    debug()
    expect(apiGetLocalTrails).toHaveBeenCalledTimes(1);
  });
})
