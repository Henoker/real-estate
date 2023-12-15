Real Estate App
This is a real estate application with Django backend and React frontend.

Backend
Django REST Framework API for real estate listings, profiles, authentication etc.

Key features:
Django REST Framework
Django ORM and PostgreSQL database
Token authentication
Endpoints for profiles, properties, search etc.
Features
Django REST Framework API
User authentication and registration
Agent profiles and listings
Property listings and management
Search and filtering for properties
Image uploads for properties
Django ORM for database models
Models
The main models include:

Users - Contains user accounts and authentication
Profiles - Stores agent profile information like photo, bio, etc.
Properties - Real estate listings with details like price, description, etc.
Property Views - Tracks views data for each property
Endpoints
The main endpoints cover:

Authentication - Register, login, logout
Profiles - Agent list, retrieve profile, update profile
Properties - Property list, retrieve, create, update, delete
Search - Search and filter properties
Getting Started
Install dependencies

pip install -r requirements.txt



Run migrations

python manage.py migrate



Run development server

python manage.py runserver



The API will be available at http://127.0.0.1:8000/

Testing
Run tests

python manage.py test



API Documentation
API documentation with endpoints and example requests/responses is available at:

API Docs

Frontend
React application with Redux Toolkit and RTK Query.

Key features:
Create React App
React Router for routing
RTK Query for API calls
Redux Toolkit for state management
React Bootstrap for styling
Authentication and protected routes
Property listing and search
Agent profiles
Image uploads
Install and run
cd client
npm install
npm start



Frontend will be available at http://localhost:3000

License
This project is open source and available under the MIT License.




