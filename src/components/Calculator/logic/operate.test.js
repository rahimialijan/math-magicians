const operate = require('./operate').default;

describe('Operate function', () => {
  test('Addition operation should return the correct result', () => {
    const result = operate('5', '3', '+');
    expect(result).toBe('8');
  });

  test('Division operation should return the correct result', () => {
    const result = operate('10', '2', '÷');
    expect(result).toBe('5');
  });

  test('Multiplication operation should return the correct result', () => {
    const result = operate('5', '3', 'x');
    expect(result).toBe('15');
  });

  test('Subtraction operation should return the correct result', () => {
    const result = operate('10', '2', '-');
    expect(result).toBe('8');
  });

  test('Modulus operation should return the correct result', () => {
    const result = operate('5', '2', '%');
    expect(result).toBe('1');
  });

  test('Unknown operation should throw an error', () => {
    expect(() => {
      operate('5', '3', '^');
    }).toThrow("Unknown operation '^'");
  });
});
