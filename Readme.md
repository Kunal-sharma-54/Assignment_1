📦 Full Stack Assignment (Frontend + Backend)

This project is a simple full-stack application built as part of an internship assignment.
It contains a React frontend and a Node.js + Express backend.

The project shows:

Product listing

Add to Cart functionality

Frontend–Backend connection

Basic Docker setup

🛠 Tech Stack Used
Frontend

React (Vite)

Context API (for cart state)

CSS (basic styling)

Fetch API

Backend

Node.js

Express.js

MVC structure (routes & controllers)

Demo data (no database)

Tools

Git & GitHub

Docker & Docker Compose

📁 Project Structure
Assignment/
├── backend/
│   ├── controllers/
│   │   ├── productController.js
│   │   └── cartController.js
│   ├── routes/
│   │   ├── productRoutes.js
│   │   └── cartRoutes.js
│   ├── data/
│   │   └── demoData.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── context/
│   │   │   └── CartContext.jsx
│   │   ├── pages/
│   │   │   ├── Products.jsx
│   │   │   └── Cart.jsx
│   │   └── App.jsx
│   └── package.json
│
├── docker-compose.yml
└── README.md

⚙️ Backend Explanation (Simple)
Product API

Products are stored in a demo data file

API sends product list to frontend

Endpoint

GET /api/products

Add to Cart API (Assignment Requirement)

This API is only to show:

How params are used

How frontend talks to backend

Endpoint

GET /api/cart/:id


Product ID is sent using URL params

Logic is written inside controller

No database is used

🎨 Frontend Explanation (Simple)
Products Page

Fetches products from backend

Displays product name and price

Has Add to Cart button

Cart Functionality

Cart state is managed using Context API

When user clicks Add to Cart:

Backend API is called using GET /api/cart/:id

Product is added to frontend cart

Quantity increases if same product is added again

Cart Page

Shows all added products

Displays quantity

Has Remove button to delete item from cart

▶️ How to Run the Project (Without Docker)
Backend
cd backend
npm install
npm start


Backend runs on:

http://localhost:5000

Frontend
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173

🐳 How to Run Using Docker

Make sure Docker Desktop is installed and running.

From project root:

docker compose up --build

Open in browser:

Frontend → http://localhost:5173

Backend → http://localhost:5000