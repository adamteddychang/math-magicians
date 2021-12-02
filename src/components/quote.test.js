import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './quote.js';

it('Renders Quote', () => {
  const quote = renderer.create(
    <Quote />,
  ).toJSON();
  expect(quote).toMatchSnapshot();
});