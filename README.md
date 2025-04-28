# FlavorHub Server

## Overview

FlavorHub Server is the backend application powering the FlavorHub platform, a culinary experience that brings flavors to your fingertips. This server handles user authentication, menu management, order processing, and more.

## Features

-   **User Authentication:** Secure user registration and login using JWT.
-   **Menu Management:**  APIs for adding, retrieving, updating, and deleting menu items.
-   **Order Processing:**  Handles cart operations and payment processing using Stripe.
-   **Admin Dashboard:**  Provides insights into users, menu items, orders, and revenue.
-   **Role-Based Authorization:**  Admin and user roles with protected routes.

## Technologies Used

-   Node.js
-   Express.js
-   MongoDB
-   jsonwebtoken
-   cors
-   dotenv
-   stripe

## Environment Variables

Before running the application, ensure you have the following environment variables set in a `.env` file:

-   `PORT`: The port the server will listen on (e.g., 5000).
-   `DB_USER`: MongoDB username.
-   `DB_PASS`: MongoDB password.
-   `STRIPE_SECRET_KEY`: Stripe secret key.
-   `ACCESS_TOKEN_SECRET`: Secret key for JWT authentication.

## Getting Started

### Prerequisites

-   Node.js and npm installed.
-   MongoDB account and cluster set up.
-   Stripe account for payment processing.

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/isha-web1/FlavorHub-server.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd flavorhub-server
    ```

3.  Install dependencies:

    ```bash
    npm install
    ```

4.  Create a `.env` file in the root directory and add the necessary environment variables.

### Running the Application

```bash
npm start



## API Endpoints

### Users

-   `POST /jwt`: Generate a JWT token for user authentication.
-   `GET /users`: Retrieve all users (admin only). Requires `verifyToken` and `verifyAdmin` middleware.
-   `POST /users`: Register a new user.
-   `PATCH /users/admin/:id`: Assign admin role to a user (admin only). Requires `verifyToken` and `verifyAdmin` middleware.
-   `GET /users/admin/:email`: Check if a user is an admin. Requires `verifyToken` middleware.
-   `DELETE /users/:id`: Delete a user (admin only). Requires `verifyToken` and `verifyAdmin` middleware.

### Menu

-   `POST /menu`: Add a new menu item (admin only). Requires `verifyToken` and `verifyAdmin` middleware.
-   `GET /menu`: Retrieve all menu items.
-   `GET /menu/:id`: Get a single menu item by ID.
-   `PATCH /menu/:id`: Update a menu item.
-   `DELETE /menu/:id`: Delete a menu item (admin only). Requires `verifyToken` and `verifyAdmin` middleware.

### Reviews

-   `GET /reviews`: Retrieve all reviews.

### Carts

-   `GET /carts`: Retrieve cart items for a specific user.
-   `POST /carts`: Add a new item to the cart.
-   `DELETE /carts/:id`: Delete an item from the cart.

### Payments

-   `POST /create-payment-intent`: Create a payment intent.
-   `GET /payments/:email`: Retrieve payment history for a user. Requires `verifyToken` middleware.
-   `POST /payments`: Process a payment and update order history.

### Admin Stats

-   `GET /admin-stats`: Get statistics for the admin dashboard (admin only). Requires `verifyToken` and `verifyAdmin` middleware.
-   `GET /order-stats`: Get order statistics by category (admin only). Requires `verifyToken` and `verifyAdmin` middleware.
