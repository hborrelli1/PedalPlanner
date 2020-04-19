import React from 'react';
import { render } from '@testing-library/react';

import TrailDisplay from './TrailDisplay';

describe('TrailDisplay Tests', () => {
  it('should render to the DOM', () => {
    const { getByText, getByPlaceholderText } = render(
      <TrailDisplay />
    );

    expect(true).toEqual(true);
  });
});
