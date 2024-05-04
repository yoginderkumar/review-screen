# Review Screen Project

This project is a React-based application that allows users to review and confirm extracted data from a document they have uploaded/attached. Since, it is a demo project so have used static data provided by the hiring team. The application provides a user interface with a document previewer and a sidebar listing the extracted fields.

## Features

- **Document Previewer**:

  - Displays the document image.
  - Provides zoom options (fit, 75%, 100%) to adjust the document view.
  - Highlights specific areas in the document corresponding to the selected fields.

- **Sidebar**:

  - Lists all the extracted fields from the document.
  - Each field item displays its title, value, and a badge with the initial letters of the field title.
  - Checkboxes allow users to select/deselect fields.
  - Provides a "Remove" option to remove individual fields (state-level only).
  - Supports dynamic rendering of new fields added to the data source.

- **Field Highlighting**:

  - When a field is selected in the sidebar, the corresponding area in the document is highlighted.
  - When the cursor is positioned over a field in the sidebar are highlighted for better interaction.

- **Review Actions**:
  - "Select All" button to select all fields with a single click.

## Installation

1. Clone the repository:

```
git clone https://github.com/yoginderkumar/review-screen
```

2. Navigate to the project directory:

```
cd review-screen
```

3. Install dependencies:

```
npm install
```

## Usage

1. Start the development server:

```
npm start
```

2. Open your browser and visit `http://localhost:3000` to access the Review Screen application.

## Project Structure

- `src/components`: Contains the React components for the application.
  - `DocumentPreviewer.tsx`: Renders the document image and handles field highlighting.
  - `FieldItem.tsx`: Represents a single field item in the sidebar.
  - `FieldList.tsx`: Renders the list of fields using the `FieldItem` component.
  - `ReviewScreen.tsx`: The main component that combines the `DocumentPreviewer` and `Sidebar`.
  - `Sidebar.tsx`: Renders the sidebar containing the `FieldList` and review actions.
- `src/context`: Contains the React Context providers and hooks.
  - `ReviewScreenContext.tsx`: Manages the state and functionality related to field selection and highlighting.
  - `ThemeContext.tsx`: Manages the state and functionality related to the dark/light theme.
- `src/hooks`: Contains custom React hooks.
  - `useKeyboardShortcuts.ts`: Implements keyboard shortcut handling for navigating through fields.
- `src/data`: Contains the data files.
  - `pages.json`: Data related to multiple pages or documents (for the bonus requirement).
  - `sections.json`: Data for the extracted fields to be displayed in the sidebar.
- `src/styles`: Contains global styles and theme definitions.
  - `GlobalStyles.ts`: Defines global styles for the application.

## Dependencies

The project utilizes the following dependencies:

- `react`: The core React library.
- `react-dom`: Provides DOM-specific methods for React.
- `styled-components`: Used for styling components with CSS-in-JS.
- `react-icons`: Provides a collection of popular icons to use in the application.
- `generate-colors`: Provides random color for each unique field id.

## Additional Features (Optional)

- **Dark/Light Mode Toggle**: Implemented using CSS variables and a theme provider, allowing users to switch between dark and light modes.
- **TypeScript Support**: The codebase is written in TypeScript for improved type safety and better tooling support.

## Performance Optimizations

To ensure a smooth and responsive user experience, the following performance optimizations have been implemented:

- **Memoization**: Components and functions are memoized using the `memo` higher-order component and the `useMemo` hook, preventing unnecessary re-renders and improving performance.

## Google Lighthouse Report

A Google Lighthouse report has been generated for the deployed version of the application, highlighting its performance, accessibility, best practices, and SEO scores. The report can be found in the [`lighthouse-report.pdf`](https://drive.google.com/file/d/1mUitVFBCGFOuFmpVKdtdODO1plHQ1Cvo/view?usp=sharing) file uploaded at google drive.

## Deployment

The application is deployed and available at the following URL:

[https://reviewscreen.netlify.app](https://reviewscreen.netlify.app)

## Scope of improvement for better optimizations

- **Virtualization**: The `FieldList` component utilizes the `react-virtualized` library for virtualization, ensuring that only the visible portion of the list is rendered, improving performance and reducing memory usage.
