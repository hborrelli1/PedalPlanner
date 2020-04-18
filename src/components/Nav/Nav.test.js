import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';

import Nav from './Nav';

describe('Nav Tests', () => {
  it('should be able to render to the DOM', () => {
    const store = createStore(rootReducer);

    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Nav />
        </Router>
      </Provider>
    )

    expect(getByTestId('logo')).toBeInTheDocument();
  });
});
