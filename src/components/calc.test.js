import React from 'react';
import renderer from 'react-test-renderer';
import Calc from './calc.js';

it('Renders Quote', () => {
  const calc = renderer.create(
    <Calc />,
  ).toJSON();
  expect(calc).toMatchSnapshot();
});