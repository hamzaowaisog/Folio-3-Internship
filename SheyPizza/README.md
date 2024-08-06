# SHEY Pizza

Welcome to the Pizza Ordering Application! This project allows users to manage pizza orders, including browsing, adding, updating, and deleting pizzas. It supports user authentication, a shopping cart, and role-based access for admins and regular users.

## Features

- **User Authentication**: Register and log in as a user or admin.
- **Pizza Management**: Admins can add, update, and delete pizzas.
- **Shopping Cart**: Users can add pizzas to the cart, adjust quantities, and view the total price.
- **Role-Based Access**: Access different functionalities based on user roles (admin or regular user).
- **Responsive Design**: User-friendly interface using Ant Design.

## Project Structure

### Components

#### `AddPizzaData` Hook

- **Purpose**: Manages the state and functionality for adding new pizza items.
- **Key States**:
  - `imageUrl`: URL of the pizza image.
- **Key Functions**:
  - `handleImageUrlChange(e, setFieldValue)`: Updates the image URL and Formik field.
  - `onFinish(values)`: Submits the form data and navigates to the home page.
  - `onFinishFailed(errorInfo)`: Handles form submission errors.

#### `CardFunctionality` Hook

- **Purpose**: Handles functionality for pizza cards, including variant selection and quantity adjustments.
- **Key States**:
  - `pizzaStates`: State of all pizzas.
  - `isError`: Indicates if there was an error during data fetching.
  - `isLoading`: Indicates if data is still loading.
- **Key Functions**:
  - `handleVariantChange(index, value)`: Updates selected variant.
  - `handleQuantityChange(index, value)`: Updates quantity.
  - `calculatePrice(index)`: Calculates price based on variant and quantity.

#### `CartDisplayFunction` Hook

- **Purpose**: Manages cart display and operations.
- **Key States**:
  - `pizzaData`: Data about pizzas in the cart.
  - `cart`: Items currently in the cart.
- **Key Functions**:
  - `handleIncreaseQuantity(item)`: Increases item quantity.
  - `handleDecreaseQuantity(item)`: Decreases item quantity.
  - `handleRemoveItem(item)`: Removes an item from the cart.
  - `getPrice(pizzaName, variantName)`: Retrieves price of a pizza variant.
  - `getImageUrl(pizzaName)`: Retrieves image URL of a pizza.
  - `totalPrice`: Computes total price of cart items.
  - `success()`: Displays success message for cart operations.

#### `UpdatePizza` Hook

- **Purpose**: Handles update functionality for existing pizzas.
- **Key States**:
  - `imageUrl`: URL of the pizza image.
- **Key Functions**:
  - `handleImageUrlChange(e, setFieldValue)`: Updates the image URL and Formik field.
  - `onFinish(values)`: Submits updated pizza data and navigates to the home page.
  - `onFinishFailed(errorInfo)`: Handles form submission errors.

#### `useModal` Hook

- **Purpose**: Provides modal functionality for displaying pizza details.
- **Key States**:
  - `isModalOpen`: Indicates if the modal is open.
  - `modalTitle`: Title of the modal.
  - `modalDes`: Description of the pizza.
  - `modalImg`: Image URL of the pizza.
- **Key Functions**:
  - `showModal(pizza)`: Sets modal content and opens the modal.
  - `handleOk()`: Closes the modal.
  - `handleCardClick(pizza)`: Opens the modal when a pizza card is clicked.
  - `handleChildClick(event)`: Prevents event propagation in modal children.

### API Functions

#### `api.js`

Contains functions for making API requests using Axios.

- **`getData(endpoint)`**: Makes a GET request to the specified endpoint.
- **`postData(endpoint, data)`**: Makes a POST request with JSON data to the specified endpoint.
- **`putData(endpoint, data)`**: Makes a PUT request with JSON data to the specified endpoint.
- **`deleteData(endpoint)`**: Makes a DELETE request to the specified endpoint.

#### `useFetch.js`

Contains thunk actions for fetching data using Redux Toolkit.

- **`fetchPizzaData`**: Fetches pizza data from the `/Pizza` endpoint.
- **`fetchUserData`**: Fetches user data.
- **`fetchSpecificPizza(id)`**: Fetches data for a specific pizza by ID.

### Redux Toolkit Usage

#### Slices

- **`pizzaSlice`**:
  - Manages pizza data state, including loading and errors.
  - Contains reducers for updating pizza variants and quantities.
  - Includes async actions for fetching pizza data.

- **`cartSlice`**:
  - Manages cart state, including item quantities and removal.
  - Contains reducers for updating and removing cart items.

- **`authSlice`**:
  - Manages authentication status and user roles.
  - Contains reducers for logging in and managing user roles.

#### `createAsyncThunk`

Handles asynchronous operations, such as API calls, and dispatches actions based on API responses.

- **`fetchPizzaData`**: Fetches and updates pizza data.
- **`fetchUserData`**: Fetches and updates user data.

## Custom Hooks

### `useModal`

- **Purpose**: Manages modal state and behavior for displaying pizza details.
- **Key States**:
  - `isModalOpen`: Boolean indicating if the modal is open.
  - `modalTitle`: Title of the modal.
  - `modalDes`: Description of the pizza.
  - `modalImg`: Image URL of the pizza.
- **Key Functions**:
  - `showModal(pizza)`: Sets modal content and opens the modal.
  - `handleOk()`: Closes the modal.
  - `handleCardClick(pizza)`: Opens the modal when a pizza card is clicked.
  - `handleChildClick(event)`: Prevents event propagation in modal children.

### `useRoleBasedAccess`

- **Purpose**: Manages access control based on user roles.
- **Key Functions**:
  - Checks user authentication and role to determine access.

## Setup Instructions

### Prerequisites

Ensure that you have the following installed:

- Node.js (v14 or higher)
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/hamzaowaisog/Folio-3-Internship.git
cd Folio-3-Internship
```

### Install Dependencies
```bash
npm install
#or 
yarn install
```

### Configure Envirmoment Variable

Create a `.env` file in the root directory and add your environment variables. Example:
```bash
VITE_API_BASE_URL=http://your-api-base-url.com
```

### Run the Development Server

```bash
npm run dev
#or
yarn dev
```

## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests. Ensure that your contributions follow the existing style and include relevant tests.