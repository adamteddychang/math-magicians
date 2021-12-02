import React from 'react';
import renderer from 'react-test-renderer';
import Home from './home.js';

it('renders home', () => {
  const home = renderer.create(
    <Home />,
  ).toJSON();
  expect(home).toMatchSnapshot();
});