import { render } from '@testing-library/react';
import Review from '../src/pages/Reviews';

/* globals describe, expect, it */
describe('Review', () => {
  it('should render review header', () => {
    // Render the App
    const { getByText } = render(<Review />);
    const header = getByText(/What our customers have to say:/i);

    // Assert that the header contains the name of restaurant
    expect(header).toBeInTheDocument();
  });
});
