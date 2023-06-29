import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Menu from '../src/pages/Menu';

/* globals describe, expect, it */
describe('Menu', () => {
  it('should render menu header', () => {
    // Render the App
    const { getByText } = render(<Menu />);
    const header = getByText(/Menu/i);

    // Assert that the header contains the name of restaurant
    expect(header).toBeInTheDocument();
  });

  it('should display a list of categories', async () => {
    const categories = [
      'CROISSANTS',
      'PASTRIES',
      'BREADS',
      'CAKES',
      'PIES',
      'DRINKS',
    ];

    render(<Menu />);

    for (const item of categories) {
      await screen.findByText(item);
    }
  });
});
