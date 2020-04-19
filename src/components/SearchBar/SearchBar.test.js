import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import '@testing-library/jest-dom/extend-expect';

import SearchBar from './SearchBar';


describe('SearchBar Tests', () => {
  it('should render to the dom', () => {
    const store = createStore(rootReducer);

    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <SearchBar/>
      </Provider>
    );

    expect(getByPlaceholderText('Find a trail for your next ride...')).toBeInTheDocument();
  });

  it('should display message if no results match search query', () => {
    const initialState = {  localTrails: [{
      "id": 7015764,
      "name": "Little Scraggy Trail Loop",
      "type": "Ride",
      "summary": "A great, new flow trail at Buffalo Creek, which combined with Nice Kitty is a BC classic ride.",
      "difficulty": "blue",
      "stars": 4.7,
      "starVotes": 524,
      "location": "Pine, Colorado",
      "url": "https://www.mtbproject.com/trail/7015764/little-scraggy-trail-loop",
      "imgSqSmall": "https://cdn-files.apstatic.com/mtb/7011149_sqsmall_1554838935.jpg",
      "imgSmall": "https://cdn-files.apstatic.com/mtb/7011149_small_1554838935.jpg",
      "imgSmallMed": "https://cdn-files.apstatic.com/mtb/7011149_smallMed_1554838935.jpg",
      "imgMedium": "https://cdn-files.apstatic.com/mtb/7011149_medium_1554838935.jpg",
      "length": 12.6,
      "ascent": 1432,
      "descent": -1443,
      "high": 8534,
      "low": 7659,
      "longitude": -105.2573,
      "latitude": 39.3443,
      "conditionStatus": "Minor Issues",
      "conditionDetails": "",
      "conditionDate": "2020-04-10 15:42:43"
    }]};
    const store = createStore(rootReducer, initialState);

    const { getByPlaceholderText, getByText, debug } = render(
      <Provider store={store}>
        <SearchBar/>
      </Provider>
    );

    const searchInput = getByPlaceholderText('Find a trail for your next ride...')

    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'avg' } });

    expect(getByText("There are no trails that match the term 'avg'")).toBeInTheDocument();
  });

  it('should display results', () => {
    const initialState = {  localTrails: [{
      "id": 7015764,
      "name": "Little Scraggy Trail Loop",
      "type": "Ride",
      "summary": "A great, new flow trail at Buffalo Creek, which combined with Nice Kitty is a BC classic ride.",
      "difficulty": "blue",
      "stars": 4.7,
      "starVotes": 524,
      "location": "Pine, Colorado",
      "url": "https://www.mtbproject.com/trail/7015764/little-scraggy-trail-loop",
      "imgSqSmall": "https://cdn-files.apstatic.com/mtb/7011149_sqsmall_1554838935.jpg",
      "imgSmall": "https://cdn-files.apstatic.com/mtb/7011149_small_1554838935.jpg",
      "imgSmallMed": "https://cdn-files.apstatic.com/mtb/7011149_smallMed_1554838935.jpg",
      "imgMedium": "https://cdn-files.apstatic.com/mtb/7011149_medium_1554838935.jpg",
      "length": 12.6,
      "ascent": 1432,
      "descent": -1443,
      "high": 8534,
      "low": 7659,
      "longitude": -105.2573,
      "latitude": 39.3443,
      "conditionStatus": "Minor Issues",
      "conditionDetails": "",
      "conditionDate": "2020-04-10 15:42:43"
    }]};
    const store = createStore(rootReducer, initialState);
    const { getByPlaceholderText, getByText, debug } = render(
      <Provider store={store}>
          <SearchBar />
      </Provider>
    );
    const searchInput = getByPlaceholderText('Find a trail for your next ride...')

    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'little scraggy' } });

    expect(getByText('Little Scraggy Trail Loop')).toBeInTheDocument();
  });
})
