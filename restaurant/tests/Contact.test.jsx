import { render, fireEvent } from '@testing-library/react';
import Contact from '../src/pages/Contact';

/* globals describe, expect, it */
describe('Contact', () => {
  it('should update state when input boxes change and when submitted', () => {
    // Render the component
    const { container } = render(<Contact />);

    // find input elements
    const nameElement = container.querySelector('#formName');
    const emailElement = container.querySelector('#formEmail');
    const messageElement = container.querySelector('#formMessage');

    // change state of elemets
    fireEvent.change(nameElement, { target: { value: 'John Doe' } });
    fireEvent.change(emailElement, {
      target: { value: 'john.doe@example.com' },
    });
    fireEvent.change(messageElement, { target: { value: 'Hi there!' } });

    // assert that state have changed
    expect(nameElement.value).toBe('John Doe');
    expect(emailElement.value).toBe('john.doe@example.com');
    expect(messageElement.value).toBe('Hi there!');

    // simulate form submission
    const formElement = container.querySelector('#my-form');
    fireEvent.submit(formElement);

    // assert that state have reset
    expect(nameElement.value).toBe('');
    expect(emailElement.value).toBe('');
    expect(messageElement.value).toBe('');
  });

  it('should produce error when missing name or email', () => {
    // Render the component
    const { container, getByText } = render(<Contact />);

    // simulate form submission
    const formElement = container.querySelector('#my-form');
    fireEvent.submit(formElement);

    const errorMessage = getByText(/Please enter your name and email./i);
    expect(errorMessage).toBeInTheDocument();
  });
});
