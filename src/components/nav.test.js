import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Nav from './nav.js';

it('renders nav', () => {
  const nav = renderer.create(
    <Router>
    <Nav />
    </Router>,
  ).toJSON();
  expect(nav).toMatchSnapshot();
});

test('clicking on Calculator brings you to Calculator page', () => {
  render(<Router>
      <Nav />
      </Router>);
  const calcLink = screen.getByTestId('calculator');

  userEvent.click(calcLink);
  const divideSymb = screen.getByText('Calculator');

  expect(divideSymb).toBeVisible();
});