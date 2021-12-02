import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Nav from './nav.js';

it('renders nav', () => {
  const nav = renderer.create(
    <Router>
    <Nav />
    </Router>,
  ).toJSON();
  expect(nav).toMatchSnapshot();
});