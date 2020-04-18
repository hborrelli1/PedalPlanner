import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import InputIcon from './InputIcon';

describe('InputIcon Test', () => {
  it('should be able to render to the DOM', () => {
    const { getByText, getByPlaceholderText } = render(
      <InputIcon icon='search' placeholder='Search...' />
    )

    expect(getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('should be able to be typed in', () => {
    const { getByDisplayValue, getByPlaceholderText } = render(
      <InputIcon icon='search' placeholder='Search...' />
    )

    const input = getByPlaceholderText('Search...');
    fireEvent.change(input, { target: {value: 'cats'}});

    expect(getByDisplayValue('cats')).toBeInTheDocument();
  });
});
