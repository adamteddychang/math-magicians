import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import Nav from './nav.js';

it('renders nav', () => {
  const nav = renderer.create(
    <Router>
    <Nav />
    </Router>,
  ).toJSON();
  expect(nav).toMatchSnapshot();
});

test('Navbar calculator button function', () => {
  render(<Router>
      <Nav />
      </Router>);
  const calcLink = screen.getByText('Calculator');
  const history = createMemoryHistory();

  userEvent.click(calcLink);

  expect(history.location.pathname).toBe('/');
});