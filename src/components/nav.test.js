import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Nav from './nav.js';

it('renders home', () => {
  const nav = renderer.create(
    <Router>
    <Nav />
    </Router>,
  ).toJSON();
  expect(nav).toMatchSnapshot();
});