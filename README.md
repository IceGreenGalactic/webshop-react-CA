# ECCOH Webshop  
![ECCOH Webshop](/src/assets/images/screenshotEccoh.png)

## JavaScript Frameworks II - E-Commerce Website

**Live Site**: [https://eccho.netlify.app/]

This project is part of the **JavaScript Frameworks II** course at Noroff, where we were tasked with creating an e-commerce platform using React and other modern web development technologies. The application is designed as a boutique-style shopping site featuring product listings, a cart system, and dynamic data fetching via an API.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Assignment Requirements](#assignment-requirements)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The **ECCOH Webshop** is an online store built with React and Redux. This application provides users with a shopping experience where they can browse products, add items to a cart, view total quantities, and manage their selections. It features search capabilities, product detail pages, and a responsive design for mobile and desktop. Customer reviews are also supported through API integration. This project is developed as a part of a school assignment to demonstrate skills in **React**, state management, API integration, and routing.

## Features
- **Product Listing**: A catalog of products fetched dynamically from an external API.
- **Product Details**: Dedicated product pages showing more detailed information (price, description, and customer reviews).
- **Cart Management**: Add items to a shopping cart, view cart totals, and manage quantities.
- **Search Functionality**: Search for products by keywords in real-time.
- **Discounts**: Products display regular prices and discounts (if available).
- **Responsive Design**: The layout adjusts seamlessly between desktop and mobile devices.
- **Notification System**: Real-time notification when items are added to the cart.

## Technologies Used
- **React**: For building the user interface and managing the component hierarchy.
- **Vite**: As the build tool and development server for faster development workflow.
- **Redux**: For managing global state, especially the shopping cart.
- **React Router DOM**: For navigation and routing between different sections of the app.
- **Styled Components**: For scoped component-level styling.
- **Bootstrap**: For responsive layout and styling (via React-Bootstrap).
- **Yup & React Hook Form**: For form validation and user input management.
- **Font Awesome**: For icons used in navigation and other UI elements.

## Installation & Setup

### Prerequisites  
- Node.js (version 12+)  
- npm (comes with Node.js)  

### Steps to Set Up Locally

1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/victor101098/eccoh-webshop.git
   cd eccoh-webshop
   ```

2. Install Dependencies:

    ```bash
    npm install
    ```
3. Start the Development Server:
    z
    ```bash
    npm run dev
    ```
    This will start the app locally.

## Usage

- Browse Products: Check out the product listing on the homepage.
- Search Products: Use the search bar to filter products by keywords.
- View Product Details: Click on any product to view detailed information.
- Manage Cart: Add products to the cart, and view item quantities and totals in the cart.
- Notification: Get a real-time notification when new items are added to the cart.

## API Integration

The application interacts with a RESTful API for fetching product data and managing customer reviews. The following endpoints are used:

- GET /products: Fetch all available products.
- GET /products/:id: Fetch details for a specific product.

The data is dynamically displayed in the app, allowing the product catalog and details to be fetched in real-time.

## Assignment Requirements

This project was created as part of the JavaScript Frameworks II course, and it fulfills the following assignment requirements:

- React application with e-commerce functionality.
- Redux for managing the shopping cart state.
- API Integration for fetching dynamic product data and submitting customer reviews.
- React Router DOM for navigation and routing.
- Responsive design using Bootstrap and Styled Components.
- Form validation using Yup and React Hook Form for the contact page.

## Contributing

This project is primarily an assignment submission, but contributions and suggestions are welcome for future improvements. 