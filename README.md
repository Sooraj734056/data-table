# React Component Development Assignment

## 📋 Overview

This project implements two reusable React components - `InputField` and `DataTable` - built with TypeScript, TailwindCSS, and modern React patterns. The components are fully documented using Storybook and include comprehensive testing.

## 🚀 Tech Stack

- **React 19** - Latest React with modern hooks and patterns
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **Storybook** - Component documentation and development environment
- **Jest + React Testing Library** - Component testing

## 📁 Project Structure

```
frontend-assignment/
├── src/
│   ├── components/
│   │   ├── InputField.tsx          # Flexible input component
│   │   ├── InputField.test.tsx     # InputField tests
│   │   ├── DataTable.tsx           # Data table component
│   │   ├── DataTable.test.tsx      # DataTable tests
│   │   └── ...                     # Other components
│   ├── stories/
│   │   ├── InputField.stories.ts   # InputField Storybook stories
│   │   └── DataTable.stories.ts    # DataTable Storybook stories
│   ├── App.tsx                     # Demo application
│   └── index.tsx
├── .storybook/                     # Storybook configuration
├── public/
└── package.json
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frontend-assignment
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3001`.

### Running Tests

```bash
npm test
```

### Running Storybook

```bash
npm run storybook
```

Storybook will be available at `http://localhost:6006`.

### Building for Production

```bash
npm run build
```

## 🎯 Components

### InputField

A flexible input component with validation states, multiple variants, and accessibility features.

**Key Features:**
- Text input with label, placeholder, helper text, error message
- States: disabled, invalid, loading
- Variants: filled, outlined, ghost
- Sizes: small, medium, large
- Optional: clear button, password toggle
- Full accessibility support with ARIA labels

**Usage:**
```tsx
<InputField
  label="Email Address"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  helperText="We'll never share your email."
  type="email"
  showClearButton
/>
```

### DataTable

A powerful data table component with sorting, selection, and state management.

**Key Features:**
- Display tabular data with customizable columns
- Column sorting (ascending/descending)
- Row selection (single/multiple)
- Loading and empty states
- Responsive design
- Accessibility support

**Usage:**
```tsx
const columns = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
];

<DataTable
  data={users}
  columns={columns}
  selectable
  onRowSelect={setSelectedUsers}
/>
```

## 🧪 Testing

The project includes comprehensive tests for both components:

- **InputField tests:** Cover rendering, user interactions, validation states, and accessibility
- **DataTable tests:** Cover data rendering, sorting, selection, and state management

Run tests with:
```bash
npm test
```

## 📚 Storybook Documentation

Storybook provides interactive documentation for both components, showcasing:

- All prop variations
- Different states and variants
- Usage examples
- Accessibility features

Access Storybook at: `http://localhost:6006`

## 🎨 Design System

The components follow a consistent design system:

- **Colors:** Blue primary (#3B82F6), Gray neutrals
- **Typography:** System fonts with proper hierarchy
- **Spacing:** Consistent padding and margins using Tailwind's spacing scale
- **Responsive:** Mobile-first approach with breakpoints

## ♿ Accessibility

Both components are built with accessibility in mind:

- Proper ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Color contrast compliance

## 🚀 Deployment

### Storybook Deployment

The Storybook can be deployed to Chromatic or Vercel:

```bash
# Build Storybook
npm run build-storybook

# Deploy to Vercel (requires Vercel CLI)
npx vercel --prod
```

### Application Deployment

The React app can be deployed to any static hosting service:

```bash
npm run build
# Deploy the build/ folder contents
```

## 📝 Approach & Architecture

### Component Architecture

- **Modular Design:** Each component is self-contained with its own types and logic
- **Type Safety:** Full TypeScript coverage with generic types for DataTable
- **Reusability:** Components accept flexible props for various use cases
- **Performance:** Optimized with React.memo and useMemo where appropriate

### State Management

- **Local State:** useState for component-specific state
- **Props-based:** Data flows down through props, events bubble up
- **Controlled Components:** All inputs are controlled for predictable behavior

### Styling Approach

- **Utility-first:** TailwindCSS for rapid development and consistency
- **Responsive:** Mobile-first responsive design
- **Themeable:** CSS custom properties for potential theming
- **Accessible:** High contrast ratios and proper focus states

### Testing Strategy

- **Unit Tests:** Component behavior and interactions
- **Integration Tests:** Component composition and data flow
- **Accessibility Tests:** ARIA compliance and keyboard navigation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
# data-table
