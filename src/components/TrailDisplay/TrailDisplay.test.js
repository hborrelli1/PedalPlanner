import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';

import TrailDisplay from './TrailDisplay';

describe('TrailDisplay Tests', () => {
  let trailInfo;
  let mockRender;

  beforeEach(() => {
    trailInfo = {
      "id": 601365,
      "name": "Walker Ranch",
      "type": "Ride",
      "summary": "A classic loop near boulder with a nice mix of technical riding, flowy descents, and scenery.",
      "difficulty": "black",
      "stars": 3.9,
      "starVotes": 206,
      "location": "Coal Creek, Colorado",
      "imgMedium": "https://cdn-files.apstatic.com/mtb/7017135_medium_1554916357.jpg",
      "length": 7.8,
      "ascent": 1516,
      "descent": -1510,
      "high": 7335,
      "low": 6446,
      "longitude": -105.3376,
      "latitude": 39.9511,
      "conditionStatus": "All Clear",
      "conditionDetails": "",
      "conditionDate": "2020-04-11 16:46:49"
    }

    const testStore = createStore(rootReducer);
    mockRender = render(
      <Provider store={testStore}>
        <TrailDisplay trail={trailInfo} />
      </Provider>
    )
  });

  afterEach(() => {
    cleanup;
  })

  it('should render to the DOM', () => {
    const { getByText, getByPlaceholderText } = mockRender;

    expect(getByText('Walker Ranch')).toBeInTheDocument();
    expect(getByText('Coal Creek, Colorado')).toBeInTheDocument();
    expect(getByText('"A classic loop near boulder with a nice mix of technical riding, flowy descents, and scenery."')).toBeInTheDocument();
    expect(getByText('7.8')).toBeInTheDocument();
    expect(getByText('1516')).toBeInTheDocument();
    expect(getByText('-1510')).toBeInTheDocument();
    expect(getByText('7335')).toBeInTheDocument();
    expect(getByText('6446')).toBeInTheDocument();
    expect(getByText('Plan A Ride')).toBeInTheDocument();
    expect(getByText('Date:')).toBeInTheDocument();
  });
});
