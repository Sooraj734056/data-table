import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputField from './InputField';

export {};

describe('InputField', () => {
  test('renders label and input', () => {
    render(<InputField label="Test Label" placeholder="Test Placeholder" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Test Placeholder')).toBeInTheDocument();
  });

  test('displays helper text', () => {
    render(<InputField label="Test" helperText="This is helper text" />);
    expect(screen.getByText('This is helper text')).toBeInTheDocument();
  });

  test('displays error message when invalid', () => {
    render(<InputField label="Test" invalid errorMessage="This is an error" />);
    expect(screen.getByText('This is an error')).toBeInTheDocument();
  });

  test('calls onChange when input changes', () => {
    const handleChange = jest.fn();
    render(<InputField label="Test" onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('shows clear button when showClearButton is true and has value', () => {
    render(<InputField label="Test" showClearButton value="test" />);
    expect(screen.getByLabelText('Clear input')).toBeInTheDocument();
  });

  test('clears input when clear button is clicked', () => {
    const handleChange = jest.fn();
    render(<InputField label="Test" showClearButton value="test" onChange={handleChange} />);
    const clearButton = screen.getByLabelText('Clear input');
    fireEvent.click(clearButton);
    expect(handleChange).toHaveBeenCalledWith(expect.objectContaining({ target: { value: '' } }));
  });
});
