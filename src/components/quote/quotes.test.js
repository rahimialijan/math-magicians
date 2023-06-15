import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Quotes from './quotes';

describe('Quotes component', () => {
  it('should render loading state when data is loading', () => {
    const { asFragment } = render(<Quotes />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render error state when data cannot be fetched', async () => {
    // Mock the fetch request to simulate an error
    global.fetch = jest.fn(() => Promise.reject(new Error('Failed to fetch data')));

    const { asFragment } = render(<Quotes />);
    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('should render the quote correctly when data is fetched', async () => {
    // Mock the successful fetch request and provide sample data
    const mockData = {
      category: 'Design',
      author: 'John Doe',
      quote: 'Sample quote',
    };
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([mockData]),
    }));

    const { asFragment, getByText } = render(<Quotes />);
    await waitFor(() => {
      expect(getByText('Category:')).toBeInTheDocument();
      expect(getByText(mockData.category)).toBeInTheDocument();
      expect(getByText('Author:')).toBeInTheDocument();
      expect(getByText(mockData.author)).toBeInTheDocument();
      expect(getByText('Quote:')).toBeInTheDocument();
      expect(getByText(mockData.quote)).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
