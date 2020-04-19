import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import blackDifficulty from '../../svgs/black-difficulty.svg';
import RideBlock from './RideBlock';

describe('RideBlock Tests', () => {
  it('should render rides to the DOM', () => {
    const fakeRideData =
      {
        date: '2020-04-22',
        time: '8:00pm',
        trail: 'White Ranch Trail',
        location: 'Golden, CO',
        difficulty: 'black',
        friends: ['Tyler', 'Jeff', 'Jackson'],
        message: 'Stoked to ride this!'
      }
    ;

    const { getByText } = render(
      <RideBlock
        rideInfo={fakeRideData}
      />
    )

    expect(getByText('04/22/20')).toBeInTheDocument();
    expect(getByText('8:00pm')).toBeInTheDocument();
    expect(getByText('White Ranch Trail | Golden, CO')).toBeInTheDocument();
    expect(getByText('Tyler, Jeff, Jackson')).toBeInTheDocument();
    expect(getByText('- Stoked to ride this!')).toBeInTheDocument();
  });

  it('should be able to navigate to trail', () => {
    const fakeRideData =
      {
        date: '2020-04-22',
        time: '8:00pm',
        trail: 'White Ranch Trail',
        trailId: 632917,
        location: 'Golden, CO',
        difficulty: 'black',
        friends: ['Tyler', 'Jeff', 'Jackson'],
        message: 'Stoked to ride this!'
      };

    const historyMock = { push: jest.fn() };

    const { getByText } = render(
      <RideBlock
        rideInfo={fakeRideData}
        history={historyMock}
      />
    )

    expect(getByText('04/22/20')).toBeInTheDocument();
    expect(getByText('8:00pm')).toBeInTheDocument();
    expect(getByText('White Ranch Trail | Golden, CO')).toBeInTheDocument();
    expect(getByText('Tyler, Jeff, Jackson')).toBeInTheDocument();
    expect(getByText('- Stoked to ride this!')).toBeInTheDocument();

    fireEvent.click(getByText('White Ranch Trail | Golden, CO'));

    expect(historyMock.push).toBeCalledTimes(1)
  });
})
