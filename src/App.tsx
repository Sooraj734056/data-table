import React, { useState } from 'react';
import InputField from './components/InputField';
import DataTable from './components/DataTable';

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const sampleData: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 28 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 32 },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 45 },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', age: 29 },
];

const columns = [
  { key: 'id', title: 'ID', dataIndex: 'id' as keyof User, sortable: true },
  { key: 'name', title: 'Name', dataIndex: 'name' as keyof User, sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email' as keyof User },
  { key: 'age', title: 'Age', dataIndex: 'age' as keyof User, sortable: true },
];

function App() {
  const [inputValue, setInputValue] = useState('');
  const [selectedRows, setSelectedRows] = useState<User[]>([]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">React Component Assignment</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">InputField Component</h2>
            <InputField
              label="Email Address"
              placeholder="Enter your email"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              helperText="We'll never share your email with anyone."
              type="email"
              showClearButton
            />
            <InputField
              label="Password"
              placeholder="Enter your password"
              type="password"
              showPasswordToggle
              className="mt-4"
            />
            <InputField
              label="Search"
              placeholder="Search users..."
              showClearButton
              className="mt-4"
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">DataTable Component</h2>
            <DataTable
              data={sampleData}
              columns={columns}
              selectable
              onRowSelect={setSelectedRows}
            />
            {selectedRows.length > 0 && (
              <p className="mt-4 text-sm text-gray-600">
                Selected: {selectedRows.map(row => row.name).join(', ')}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
