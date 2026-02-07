
🛍️ Naksh Jewels – Full Stack Assignment

This project is a full-stack internship assignment built using React (Frontend) and Node.js + Express.js

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
└── README.md

🔑 Features (As Per Assignment PDF)
✔ Product Listing

Products are fetched from backend demo data

Displayed on frontend using React

✔ Add to Cart

Clicking Add to Cart:

Calls backend API using GET with params

Example: GET /api/cart/:id

Frontend cart state managed using Context API

✔ Cart Page

Displays added products

Shows quantity

Allows removing items from cart

🌐 API Endpoints
Get Products
GET /api/products


Returns demo product list.

Add to Cart (Assignment Requirement)
GET /api/cart/:id


Uses URL params (req.params.id)

Implemented using controller

No database logic (as per PDF scope)

🧠 Architecture Notes

Backend follows MVC pattern

Routes handle URL mapping

Controllers handle logic

Cart logic and quantity handling are managed on the frontend using Context API

Backend cart API is a dummy endpoint used only to demonstrate frontend–backend communication (as required)

▶️ How to Run the Project
Backend
cd backend
npm install
npm start


Server runs on:

http://localhost:5000

Frontend
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173

