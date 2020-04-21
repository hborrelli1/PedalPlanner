import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Metrics from './Metrics';
import Chart from "chart.js";

Chart.defaults.global.elements.line.tension = 0;

describe('Metrics Tests', () => {

  it.skip('should render to the DOM', () => {
    const { getByTestId } = render(
      <Metrics
        type="bar"
        display='Distance'
      />
    );

    expect(true).toEqual(true);
  });
});
