import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import RideBlock from './RideBlock';

describe('RideBlock Tests', () => {
  it('should render rides to the DOM', () => {
    const fakeRideData = [
      {
        date: 'May 22',
        trail: 'White Ranch Trail',
        location: 'Golden, CO',
        friends: ['Tyler', 'Jeff', 'Jackson']
      }
    ];

    const { getByText } = render(
      <RideBlock
        rideInfo={fakeRideData}
      />
    )

    expect(getByText('May 22')).toBeInTheDocument();
    expect(getByText('White Ranch Trail | Golden, CO')).toBeInTheDocument();
    expect(getByText('Tyler, Jackson, Jeff')).toBeInTheDocument();
  });
})
