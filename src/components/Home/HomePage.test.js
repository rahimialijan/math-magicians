import React from 'react';
import { render } from '@testing-library/react';
import Homepage from './HomePage';

describe('Homepage', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Homepage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
