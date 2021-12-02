import operate from './operate.js';

describe('testing operate.js', () => {
  test('test add operator', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  test('test minus operator', () => {
    expect(operate(3, 2, '-')).toBe('1');
  });

  test('test multiply operator', () => {
    expect(operate(2, 3, 'x')).toBe('6');
  });

  test('test divide operator', () => {
    expect(operate(10, 5, '÷')).toBe('2');
  });
});