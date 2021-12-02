import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App.js';
import '@testing-library/jest-dom';

describe('nav links correct path', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('clicking on Home brings you to Home', () => {
    const homeLink = screen.getByText('Home');

    userEvent.click(homeLink);
    const homeText = screen.getByText('Welcome to this webApp!');

    expect(homeText).toBeVisible();
  });
});