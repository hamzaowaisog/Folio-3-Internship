# Internship Projects Repository

Welcome to my GitHub repository! This repository contains various projects developed during my internship tenure. It showcases my work with React, React Router, Redux Toolkit, and more. Each project highlights different aspects of web development, including state management, routing, and lifecycle management.

## Table of Contents

1. [Projects Overview](#projects-overview)
2. [Technologies Used](#technologies-used)
3. [Setup and Installation](#setup-and-installation)
4. [Inbuilt and Custom Hooks](#inbuilt-and-custom-hooks)
5. [Contributing](#contributing)
6. [License](#license)

## Projects Overview

### 1. React Router JS Assignment

- **Description**: Demonstrates the usage of React Router for handling routing and navigation within a React application.
- **Features**:
  - Setup of routes and navigation links
  - Dynamic routing and parameter handling
  - Navigation guards

### 2. Redux Toolkit Pizza Web

- **Description**: A pizza ordering web application utilizing Redux Toolkit for state management.
- **Features**:
  - Manage pizza data and user interactions
  - Add, update, and delete pizza items
  - Shopping cart and order management
  - Integration with Ant Design for UI components

### 3. React Lifecycle

- **Description**: A project focused on understanding and implementing the React component lifecycle methods.
- **Features**:
  - Demonstrates various lifecycle methods such as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`
  - Shows practical examples of lifecycle methods for data fetching and component updates

## Technologies Used

- **Frontend**:
  - React
  - React Router
  - Redux Toolkit
  - Ant Design
  - Formik
  - Yup

- **Backend**:
  - Node.js (for API interactions)
  - Express (if applicable to projects)

- **Tools**:
  - Axios
  - Vite
  - Git

## Setup and Installation

To set up and run the projects locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/hamzaowaisog/Folio-3-Internship.git
   cd Folio-3-Internship
   ```
   
2. **Navigate to Project Directory**

   Change to the specific project directory you want to run:

   ```bash
   cd <project-directory>
   ```
   
3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Run the Project**

   ```bash
   npm start
   ```

   for backend-related projects, you might need additional steps to start the server.

## Inbuilt and Custom Hooks

### Inbuilt Hooks

- **`useState`**: Manages local state within functional components.
- **`useEffect`**: Handles side effects such as data fetching and lifecycle management.
- **`useDispatch`**: Provides access to the Redux store's dispatch function.
- **`useSelector`**: Selects and retrieves state from the Redux store.

### Custom Hooks

- **`useModal`**: Manages the state and behavior of modal dialogs.
  - **`showModal(pizza)`**: Displays the modal with pizza details.
  - **`handleOk()`**: Closes the modal.
  - **`handleCardClick(pizza)`**: Opens the modal with the selected pizza details.
  - **`handleChildClick(event)`**: Stops event propagation in the modal.

- **`useRoleBasedAccess`**: Manages role-based access control based on user authentication and roles.
  - Returns the appropriate route based on the user's role and authentication status.

## Contributing

Contributions are welcome! To contribute to this repository:

1. **Fork the Repository**
2. **Create a New Branch**
3. **Make Your Changes**
4. **Submit a Pull Request**

Please ensure that your code adheres to the existing style and includes appropriate tests.


   
