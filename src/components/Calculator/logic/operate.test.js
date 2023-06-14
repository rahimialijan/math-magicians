const operate = require('./operate').default;

test('Addition operation should return the correct result', () => {
  const result = operate('5', '3', '+');
  expect(result).toBe('8');
});
test('Division operation should return the correct result', () => {
  const result = operate('10', '2', '÷');
  expect(result).toBe('5');
});
