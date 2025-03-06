# Node.js CRUD REST API

This is a simple CRUD (Create, Read, Update, Delete) REST API built using Node.js, Express.js and MongoDB.

## Features

- Create a new resource

- Read all resources (category filtering and sorting by price is implemented)

- Read a single resource by ID

- Update a resource by ID

- Delete a resource by ID


## Technologies Used

- Node.js

- Express.js

- MongoDB (Mongoose for database interaction)

- dotenv (for environment variable management)

- nodemon (for development server monitoring)

## Installation
1. Clone the repository:
```bash
git clone https://github.com/Mahim79/Project/REST-API.git
cd REST-API
```
2. Install dependencies:
```bash
npm install
```
3. Create a .env file and configure the database connection:
```bash
PORT=5000
mongooseURI=mongodb+srv://your_username:your_password@cluster0.mongodb.net/your_database_name
```
4. Start the server:
```bash
node app.js
or 
nodemon app.js
```
## API Endpoints
1. Create a new Product
    POST /api/products
```bash
{
    "name": "Wireless Headphones", 
    "price": 49.99, 
    "category": "Electronics", 
    "stock": 25, 
    "description": "Bluetooth over-ear headphones with noise cancellation" 

}
```
2. Get All Items

    GET /api/products

3. Get a Single Item by ID

GET /api/products/:id

4. Update an Item by ID

    PUT /api/products/:id

```bash
{
    "name": "Wireless Headphones", 
    "price": 40.00, 
    "category": "Electronics", 
    "stock": 15, 
    "description": "Bluetooth over-ear headphones with noise cancellation" 

}
```

5. Delete an Item by ID

    DELETE /api/items/:id

## Project Structure

```bash
REST-API/
│-- app.js
│-- package.json
|-- package-lock.json
│-- .env
│-- database.js
│-- Model/
│   └── productsModel.js
│-- Routers/
│   └── ProductsRouter.js

```