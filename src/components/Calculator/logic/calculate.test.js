import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import calculate from './calculate';

describe('calculate', () => {
  let obj;

  beforeEach(() => {
    obj = { total: null, text: null, operation: null };
  });

  it('should handle "AC" button', () => {
    const buttonName = 'AC';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ total: null, text: null, operation: null });
  });

  it('should handle number buttons', () => {
    const buttonName = '5';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ total: null, text: '5', operation: null });
  });

  it('should handle decimal point button', () => {
    obj.text = '3';
    const buttonName = '.';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ total: null, text: '3.', operation: null });
  });

  it('should handle "=" button without operation', () => {
    obj.total = '10';
    obj.text = '5';
    const buttonName = '=';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ total: '10', text: '5', operation: null });
  });

  it('should handle "=" button with "%" operation', () => {
    obj.total = '100';
    obj.text = '25';
    obj.operation = '%';
    const buttonName = '=';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ total: '0', text: '0', operation: null });
  });

  it('should handle "=" button with "+" operation', () => {
    obj.total = '10';
    obj.text = '5';
    obj.operation = '+';
    const buttonName = '=';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ total: '15', text: '15', operation: null });
  });

  it('should handle "+/-" button with text value', () => {
    obj.text = '5';
    const buttonName = '+/-';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ total: null, text: '-5', operation: null });
  });

  it('should handle operation button when there is no existing operation', () => {
    obj.total = '10';
    obj.text = '5';
    const buttonName = '+';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ total: '5', text: null, operation: '+' });
  });

  it('should simulate user interactions', () => {
    const { getByText } = render(
      <button
        type="button"
        onClick={() => {
          const result = calculate(obj, '5');
          obj = result;
        }}
      >
        5
      </button>,
    );

    fireEvent.click(getByText('5'));
    expect(obj).toEqual({ total: null, text: '5', operation: null });
  });
});
