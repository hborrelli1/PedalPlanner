import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';
import '@testing-library/jest-dom/extend-expect';
import moment from 'moment'

import UserProfile from './UserProfile';

describe('UserProfile Tests', () => {
  it('should render to the DOM', () => {
    const store = createStore(rootReducer);

    const { getByText } = render(
      <Provider store={store}>
        <UserProfile />
      </Provider>
    )

    expect(getByText('Welcome back,')).toBeInTheDocument();
    expect(getByText('Upcoming Rides')).toBeInTheDocument();
    expect(getByText('Past Rides')).toBeInTheDocument();
  });

  it('should be able to display past rides to the DOM', () => {
    const moment = jest.fn();
    jest.mock('moment', () => () => ({format: () => '05/02/20'}));
    
    const store = createStore(rootReducer);
    const userInfo = {
      name: 'Harry',
      username: 'default',
    	location:'',
    	friends: [],
      pastRides: [
        {
          id: 1,
          date: '2020/05/02',
          time: '11:00am',
          trail: 'The Whole Enchilada',
          trailId: 4670265,
          difficulty: 'black',
          location: 'Moab, UT',
          friends: ['Spencer', 'Jeff', 'Doug'],
          message: "The plan is to leave Denver at 6pm the day before"
        },
      ],
    	upcomingRides: []
    }

    const { getByText } = render(
      <Provider store={store}>
        <UserProfile userInfo={userInfo}
        />
      </Provider>
    );

      expect(getByText('05/02/20')).toBeInTheDocument();
      expect(getByText('White Ranch Trail | Golden, CO')).toBeInTheDocument();
  });

  // Add upcoming movie tests.
})
