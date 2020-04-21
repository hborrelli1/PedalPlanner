import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';
import '@testing-library/jest-dom/extend-expect';
import moment from 'moment'

import UserProfile from './UserProfile';

describe('UserProfile Tests', () => {
  let mockRender;
  const historyMock = { push: jest.fn() };

  beforeEach(() => {
    const initialState = {  userInfo: {
      pastRides: [
        {
          id: 1,
          date: '2020/05/02',
          time: '11:00am',
          trail: 'The Whole Enchilada',
          trailId: 4670265,
          difficulty: 'black',
          location: 'Moab, UT',
          friends: ['Spencer', 'Doug'],
          message: "The plan is to leave Denver at 6pm the day before"
        },
      ],
      upcomingRides: [
        {
          id: 2,
          date: '2020/05/08',
          time: '9:00am',
          trail: 'Little Scraggy Trail',
          trailId: 4670265,
          difficulty: 'black',
          location: 'Pine, CO',
          friends: ['Spencer', 'Jeff', 'Doug'],
          message: "Can't wait to ride this trail!"
        },
      ]
    }}
    const testStore = createStore(rootReducer, initialState);
    mockRender = render(
      <Provider store={testStore}>
        <UserProfile history={historyMock} />
      </Provider>
    )
  })

  afterEach(() => {
    cleanup;
  })

  it('should render to the DOM', () => {
    const { getByText } = mockRender;

    expect(getByText('Welcome back,')).toBeInTheDocument();
    expect(getByText('Harry')).toBeInTheDocument();
    expect(getByText('Upcoming Rides')).toBeInTheDocument();
    expect(getByText('Past Rides')).toBeInTheDocument();
  });

  it('should be able to display past rides to the DOM', () => {
    const { getByText } = mockRender;

    expect(getByText('05/02/20')).toBeInTheDocument();
    expect(getByText('The Whole Enchilada | Moab, UT')).toBeInTheDocument();
  });

  it('should display upcomingRides to the DOM', () => {
    const { getByText } = mockRender

    expect(getByText('05/08/20')).toBeInTheDocument();
    expect(getByText('9:00am')).toBeInTheDocument();
    expect(getByText('Little Scraggy Trail | Pine, CO')).toBeInTheDocument();
    expect(getByText('- Spencer, Doug')).toBeInTheDocument();
    expect(getByText('- Can\'t wait to ride this trail!')).toBeInTheDocument();
  });
});
