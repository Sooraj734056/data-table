import type { Meta, StoryObj } from '@storybook/react-webpack5';
import DataTable from '../components/DataTable';

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

const meta = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    loading: { control: 'boolean' },
    selectable: { control: 'boolean' },
  },
} satisfies Meta<typeof DataTable<User>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: sampleData,
    columns,
  },
};

export const Selectable: Story = {
  args: {
    data: sampleData,
    columns,
    selectable: true,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns,
  },
};

export const WithSorting: Story = {
  args: {
    data: sampleData,
    columns,
  },
};
