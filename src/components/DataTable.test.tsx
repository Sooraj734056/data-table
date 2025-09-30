import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DataTable from './DataTable';

export {};

interface TestData {
  id: number;
  name: string;
  age: number;
}

const sampleData: TestData[] = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 },
];

const columns = [
  { key: 'id', title: 'ID', dataIndex: 'id' as keyof TestData, sortable: true },
  { key: 'name', title: 'Name', dataIndex: 'name' as keyof TestData, sortable: true },
  { key: 'age', title: 'Age', dataIndex: 'age' as keyof TestData, sortable: true },
];

describe('DataTable', () => {
  test('renders table headers', () => {
    render(<DataTable data={sampleData} columns={columns} />);
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
  });

  test('renders table data', () => {
    render(<DataTable data={sampleData} columns={columns} />);
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
    expect(screen.getByText('25')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
  });

  test('shows loading state', () => {
    render(<DataTable data={[]} columns={columns} loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('shows empty state', () => {
    render(<DataTable data={[]} columns={columns} emptyText="No data found" />);
    expect(screen.getByText('No data found')).toBeInTheDocument();
  });

  test('handles row selection', () => {
    const handleSelect = jest.fn();
    render(<DataTable data={sampleData} columns={columns} selectable onRowSelect={handleSelect} />);
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[1]); // Select first row
    expect(handleSelect).toHaveBeenCalledWith([sampleData[0]]);
  });

  test('sorts data when header is clicked', () => {
    render(<DataTable data={sampleData} columns={columns} />);
    const nameHeader = screen.getByText('Name');
    fireEvent.click(nameHeader);
    // After sorting, Jane should come before John
    const rows = screen.getAllByRole('row');
    expect(rows[1]).toHaveTextContent('Jane');
    expect(rows[2]).toHaveTextContent('John');
  });
});
