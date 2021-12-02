import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Calc from './calc.js';

it('Renders calculator', () => {
  const calc = renderer.create(
    <Calc />,
  ).toJSON();
  expect(calc).toMatchSnapshot();
});

it('captures clicks', (done) => {
  function handleClick() {
    done();
  }
  const { getByText } = render(
    <button onClick={handleClick}>Click Me</button>,
  );
  const node = getByText('Click Me');
  fireEvent.click(node);
});

afterEach(cleanup);