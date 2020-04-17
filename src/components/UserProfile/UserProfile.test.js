import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';
import '@testing-library/jest-dom/extend-expect';

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
    const store = createStore(rootReducer);
    const userInfo = {
      name: 'Harry',
      username: 'default',
    	location:'',
    	friends: [],
      pastRides: [
        {
          date: 'May 22',
          trail: 'White Ranch Trail',
          location: 'Golden, CO',
          friends: []
        }
      ],
    	upcomingRides: []
    }

    const { getByText } = render(
      <Provider store={store}>
        <UserProfile userInfo={userInfo}
        />
      </Provider>
    );

      expect(getByText('May 22')).toBeInTheDocument();
      expect(getByText('White Ranch Trail | Golden, CO')).toBeInTheDocument();
  });

  // Add upcoming movie tests.
})
