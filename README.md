# Multi User REAL ESTATE web app

Welcome to the project!

## Table of Contents

-   [Introduction](#introduction)
-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Contributing](#contributing)
-   [License](#license)

## Introduction

The project is a full-stack real estate web application that allows customers to browse through a wide range of listings, contact the relators, rate relators, and contact the web admin for more info. For relators, it offers a simple and efficient way to list properties, create thier profiles and find customers for thier listings.

This project was developed with scalability, security, and usability in mind. It follows best practices for web development to ensure a robust and stable Real Estate app.

## Features

-   **User Registration and Authentication**: Users can create accounts, log in securely, and reset their passwords if needed. JWT tokens are used to securely authenticate users.
-   **Property Listings Catalog**: A rich property listing catalog with categories, property details, and search functionality to help users find what they need easily.
-   **Agent Rating Capability**: Users can rate relators and view the ratings.
-   **Property Specific Enquiry for agents**: users can contact the relator directly from the listing page.
-   **Admin Dashboard**: Realators can manage property listings, track ratings, and view activity statistics through an intuitive admin dashboard.
-   **Responsive Design**: The website is optimized for various devices, providing a smooth user experience on desktops, tablets, and mobiles.

## Technologies Used

-   **Front-end**: React js, React-router, React-bootstrap, React-redux, React-toastify, React-router-dom,  React-router-bootstrap, redux/toolkit,RTQuery, React-helmet
-   **Back-end**: Django, Django-rest-framework, Django-cors-headers, Django-djoser
-   **Database**: Postgres
-   **Authentication**: JSON Web Tokens (JWT)
-   **EMail HOST**: Mailtrap (Test)

## Installation

To run this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the backend directory.
3. pip install -r requirements.txt
4. Navigate to client folder 

```bash
npm install
```

1. Set up environment variables:
   Create a .env file in the root directory and add the necessary configuration:

```dotenv
# Application secrets:
SECRET_KEY=
DEBUG=
ALLOWED_HOSTS="localhost 127.0.0.1 [::1]"

# Database credentials:
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_PORT=

#SIMPLE_JWT settings:
SIGNING_KEY=

# Email host
EMAIL_HOST=
EMAIL_PORT=
EMAIL_HOST_USER=
EMAIL_HOST_PASSWORD=
DOMAIN=localhost:3000



```

1. Start the application from the backend directory after creating virtual environment:

```bash
python manage.py migrate
python manage.py runserver
```

The backend website will be accessible at http://localhost:8000.

2. Start the application from the frontend client directory:

```bash
npm start
```

The frontend main website will be accessible at http://localhost:3000.

## Usage

1. As a Customer:

-   Sign up or log in to your account.
-   Browse the property listings and click on items to view their details.
-   fill out contact form to contact the relator or contact admin in the contact page 
-   view realotors profile and contact them 

2. As a Relator:

-   Sign up or log in to your account.
-   Add, update, delete and view property listings.
-   view, update your own profile.

3. As an Admin:

-   Log in to your admin account.
-   Manage property listings, relators, and everyting.

## Contributing

We welcome contributions from the community! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bugfix.
3. Commit your changes and push the branch to your fork.
4. Submit a pull request, explaining your changes and their purpose.
   Please ensure your code follows the project's coding standards and includes appropriate tests.

## License

This project is....

---

I hope you enjoy using this project. If you have any questions or encounter any issues, please don't hesitate to contact me or submit a bug report. Happy coding!