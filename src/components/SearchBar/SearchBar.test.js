import React from 'react';
import { render } from '@testing-library/react';
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
})
