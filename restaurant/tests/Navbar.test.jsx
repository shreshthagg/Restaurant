import { render, fireEvent } from '@testing-library/react';
import Navbar from '../src/components/Navbar';

/* globals describe, expect, it */
describe('Navbar', () => {
  it('should shrink afterscrolling', () => {
    // Render the Navbar component
    const { container } = render(<Navbar />);
    const navbar = container.querySelector('.navbar');

    // Assert that the initial navbar class does not contain the 'shrink' class
    expect(navbar).not.toHaveClass('shrink');

    // Simulate scrolling
    fireEvent.scroll(window, { target: { scrollY: 100 } });

    // Assert that the navbar now has the 'shrink' class
    expect(navbar).toHaveClass('shrink');

    // Simulate scrolling back to the top
    fireEvent.scroll(window, { target: { scrollY: 0 } });

    // Assert that the initial navbar class does not contain the 'shrink' class
    expect(navbar).not.toHaveClass('shrink');
  });
});
