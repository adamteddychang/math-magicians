import calculate from './calculate.js';

describe('testing calculate.js', () => {
  const object = {
    total: null,
    next: null,
    operation: null,
  };
  test('test add', () => {
    let ans = calculate(object, '5');
    ans = calculate(ans, '+');
    ans = calculate(ans, '5');
    ans = calculate(ans, '=');
    expect(ans.total).toBe('10');
  });
  test('test minus', () => {
    let ans = calculate(object, '5');
    ans = calculate(ans, '-');
    ans = calculate(ans, '5');
    ans = calculate(ans, '=');
    expect(ans.total).toBe('0');
  });
  test('test multiply', () => {
    let ans = calculate(object, '5');
    ans = calculate(ans, 'x');
    ans = calculate(ans, '5');
    ans = calculate(ans, '=');
    expect(ans.total).toBe('25');
  });
  test('test divide', () => {
    let ans = calculate(object, '5');
    ans = calculate(ans, '÷');
    ans = calculate(ans, '5');
    ans = calculate(ans, '=');
    expect(ans.total).toBe('1');
  });
});