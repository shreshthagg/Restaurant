import { render, screen } from '@testing-library/react';
import About from '../src/pages/About';

/* globals describe, expect, it */
describe('About', () => {
  it('should render About us', () => {
    // Render the App
    render(<About />);
    const header = screen.getByText(/About us/i);

    // Assert that the header contains the name of restaurant
    expect(header).toBeInTheDocument();
  });
});
