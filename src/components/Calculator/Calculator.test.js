import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Calculator />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('handles button clicks correctly', () => {
    const { getByText, getByTestId } = render(<Calculator />);

    fireEvent.click(getByText('7'));
    expect(getByTestId('screen')).toHaveTextContent('7');

    fireEvent.click(getByText('+'));
    expect(getByTestId('screen')).toHaveTextContent('7');

    fireEvent.click(getByText('3'));
    expect(getByTestId('screen')).toHaveTextContent('3');

    fireEvent.click(getByText('='));
    expect(getByTestId('screen')).toHaveTextContent('10');
  });
});
