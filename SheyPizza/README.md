Pizza Ordering Application
Welcome to the Pizza Ordering Application! This project is a comprehensive solution for managing pizza orders, allowing users to browse, add, update, and delete pizza items. It includes user authentication, a shopping cart, and admin functionalities for managing pizza data.

Features
User Authentication: Register and log in as a user or admin.
Pizza Management: Admins can add, update, and delete pizzas.
Shopping Cart: Users can add pizzas to the cart, adjust quantities, and view the total price.
Role-Based Access: Different functionalities are available based on user roles (admin or regular user).
Responsive Design: User-friendly interface with responsive design using Ant Design.
Project Structure
Components
1. AddPizzaData Hook
Manages the state and functionality required for adding new pizza items.

State:

imageUrl: URL of the pizza image, managed locally.
Functions:

handleImageUrlChange(e, setFieldValue): Updates the image URL state and Formik field.
onFinish(values): Submits the form data to the server and navigates to the home page on success.
onFinishFailed(errorInfo): Handles form submission failures with error messages.
2. CardFunctionality Hook
Handles the functionality for displaying pizza cards, including variant selection and quantity adjustments.

State:

pizzaStates: Contains the state of all pizzas fetched from the API.
isError: Boolean indicating if there was an error during data fetching.
isLoading: Boolean indicating if the data is still loading.
Functions:

handleVariantChange(index, value): Updates the selected variant for a pizza.
handleQuantityChange(index, value): Updates the quantity of a pizza.
calculatePrice(index): Calculates the price based on the selected variant and quantity.
3. CartDisplayFunction Hook
Manages the cart's display and operations.

State:

pizzaData: Data about pizzas available in the cart.
cart: Items currently in the cart.
Functions:

handleIncreaseQuantity(item): Increases the quantity of a cart item.
handleDecreaseQuantity(item): Decreases the quantity of a cart item.
handleRemoveItem(item): Removes an item from the cart.
getPrice(pizzaName, variantName): Retrieves the price of a specific pizza variant.
getImageUrl(pizzaName): Retrieves the image URL of a pizza.
totalPrice: Computes the total price of all items in the cart.
success(): Displays a success message for successful cart operations.
4. UpdatePizza Hook
Handles the update functionality for existing pizza items.

State:

imageUrl: URL of the pizza image, managed locally.
Functions:

handleImageUrlChange(e, setFieldValue): Updates the image URL state and Formik field.
onFinish(values): Submits updated pizza data and navigates to the home page on success.
onFinishFailed(errorInfo): Handles form submission failures with error messages.
5. useModal Hook
Provides modal functionality for displaying detailed pizza information.

State:

isModalOpen: Indicates whether the modal is open.
modalTitle: Title of the modal, set to the pizza name.
modalDes: Description of the pizza displayed in the modal.
modalImg: Image URL of the pizza.
Functions:

showModal(pizza): Opens the modal and sets its content based on the selected pizza.
handleOk(): Closes the modal.
handleCardClick(pizza): Opens the modal when a pizza card is clicked.
handleChildClick(event): Prevents event propagation when interacting with modal children.
6. useRoleBasedAccess Hook
Manages access control based on user roles.

Parameters:

requiredRole: Role required to access a specific route or component.
Returns:

Redirect path if the user does not meet the access requirements.
API Functions
1. api.js
Contains functions for making API requests using Axios.

getData(endpoint): Makes a GET request to the specified endpoint.
postData(endpoint, data): Makes a POST request with JSON data.
putData(endpoint, data): Makes a PUT request with JSON data.
deleteData(endpoint): Makes a DELETE request to the specified endpoint.
2. useFetch.js
Contains thunk actions for fetching data using Redux Toolkit.

fetchPizzaData: Fetches pizza data from the server.
fetchUserData: Fetches user data from the server.
fetchSpecificPizza(id): Fetches data for a specific pizza by ID.
Redux Toolkit Usage
1. Slices
pizzaSlice:

Manages the state of pizza data, including loading and errors.
Contains reducers for updating pizza variants and quantities.
Includes async actions for fetching pizza data.
cartSlice:

Manages the cart's state, including item quantities and removal.
Contains reducers for updating and removing cart items.
authSlice:

Manages authentication status and user roles.
Contains reducers for logging in and managing user roles.
2. createAsyncThunk
Used for handling asynchronous operations, such as API calls, and dispatching actions based on API responses.

fetchPizzaData: Fetches and updates pizza data.
fetchUserData: Fetches and updates user data.
Setup Instructions
1. Prerequisites
Ensure that you have the following installed:

Node.js (v14 or higher)
npm or yarn
2. Clone the Repository
bash
Copy code
git clone https://github.com/hamzaowaisog/Folio-3-Internship.git
cd Folio-3-Internship
3. Install Dependencies
bash
Copy code
npm install
# or
yarn install
4. Configure Environment Variables
Create a .env file in the root directory of the project and add your environment variables. Example:

env
Copy code
VITE_API_BASE_URL=http://your-api-base-url.com
5. Run the Development Server
bash
Copy code
npm run dev
# or
yarn dev
Contributing
Contributions are welcome! Feel free to fork this repository and submit pull requests. Ensure that your contributions follow the existing style and include relevant tests.

License
This project is licensed under the MIT License. See the LICENSE file for details.

