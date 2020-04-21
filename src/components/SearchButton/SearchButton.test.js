import React from 'react';
import { render,fireEvent,cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SearchButton from './SearchButton';
const historyMock = { push: jest.fn() };

describe('SearchButton Tests', () => {
  let trailInfo;

  beforeEach(() => {
    trailInfo = {
      "id": 46286,
      "name": "Betasso Preserve",
      "type": "Ride",
      "summary": "A solid ride close to Boulder that is often ridden from town.",
      "difficulty": "blue",
      "stars": 4,
      "starVotes": 250,
      "location": "Boulder, Colorado",
      "imgMedium": "https://cdn-files.apstatic.com/mtb/7002944_medium_1554403854.jpg",
      "length": 7.4,
      "ascent": 829,
      "descent": -829,
      "high": 6589,
      "low": 6178,
      "longitude": -105.3422,
      "latitude": 40.0155,
    }
  });

  afterEach(() => {
    cleanup;
  });

  it('should render to the DOM', () => {
    const { getByPlaceholderText, getByText,debug } = render(
      <SearchButton trail={trailInfo} history={historyMock}/>
    )
    expect(getByText('Betasso Preserve')).toBeInTheDocument();
    expect(getByText('Boulder, Colorado')).toBeInTheDocument();
  });
  it('should be able to change views when clicked on', () => {
    const { getByPlaceholderText, getByText,debug } = render(
      <SearchButton trail={trailInfo} history={historyMock}/>
    );
    expect(getByText('Betasso Preserve')).toBeInTheDocument();
    fireEvent.click(getByText('Betasso Preserve'));
    expect(historyMock.push).toHaveBeenCalledTimes(1);
  });
})
