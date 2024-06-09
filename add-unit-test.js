const { add } = require('./test'); // Assuming the file is named test.js

describe('add', () => {
  it('adds two positive numbers', () => {
    expect(add(1, 2)).toBe(3);
  });

  it('adds two negative numbers', () => {
    expect(add(-1, -2)).toBe(-3);
  });

  it('adds a positive number and a negative number', () => {
    expect(add(-1, 2)).toBe(1);
  });

  it('adds a number and zero', () => {
    expect(add(5, 0)).toBe(5);
  });

  it('adds two floating point numbers', () => {
    expect(add(1.2, 3.4)).toBeCloseTo(4.6);
  });
});