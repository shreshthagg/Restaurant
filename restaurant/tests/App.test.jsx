import { render } from '@testing-library/react';
import App from '../src/App';

/* globals describe, expect, it */
describe('App', () => {
  it('should render restaurant name', () => {
    // Render the App
    const { getByText } = render(<App />);
    const name = getByText(/La Petite Pâtisserie!/i);

    // Assert that the header contains the name of restaurant
    expect(name).toBeInTheDocument();
  });
});
