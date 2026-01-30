<h1>Big Burger – Restaurant Web Application</h1>

The project started as a simple static HTML/CSS/JS prototype and has now evolved into a React + Vite frontend with a Node.js/Express + MongoDB backend. The goal was to create a clean, responsive food ordering experience similar to real apps used in Ethiopia

<h2>Project Overview</h2>

Big Burger is a restaurant web application that lets users:

Browse a menu of burgers, drinks, and desserts

Add foods, drinks and desserts to a shopping cart

Review(as in currently static) and submit orders with delivery information

View customer testimonials

Read about the restaurant and get contact details

The project currently has two versions:

Modern React + Vite frontend which is the main focus going forward

Static HTML + CSS + vanilla JS prototype which kept for reference and cross check the progress

The React version uses React Router for navigation, component based structure, and now connects to a real backend for persistent data storage.

<h2>Features</h2>

<h3>Frontend (React version):</h3>

Responsive navigation bar across all pages

Dynamic menu fetched from backend API for foods, drinks, desserts

Interactive cart that adds, removes, updates quantity with localStorage fallback

Checkout form with delivery details and order submission

Testimonials page but currently static reviews

Clean and responsive UI with vanilla CSS

<h3>Backend (Node.js + Express + MongoDB):</h3>

REST API endpoints for products and orders

MongoDB Atlas for cloud storage 

Persistent orders that is cart with delivery info saved to database

Basic health check and error handling


<h2>File Structure</h2>
<pre>
Big-Burger/
├── Frontend/                    # Modern React + Vite application 
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── about.jsx
│   │   ├── checkout.jsx
│   │   ├── contact.jsx
│   │   ├── home.jsx
│   │   ├── main.jsx
│   │   ├── menu.jsx
│   │   └── testimonial.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── .gitignore
│
├── Backend/                     # Node.js + Express + MongoDB API
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── controller.js     # Product controller
│   │   │   └── orderController.js
│   │   ├── models/
│   │   │   ├── product.js
│   │   │   └── order.js
│   │   ├── routes/
│   │   │   ├── products.js
│   │   │   └── orders.js
│   │   └── server.js
│   ├── .env                     # Contains MONGO_URI, PORT ...
│   ├── package.json
│   └── .gitignore
│
├── HTML-JS/                     # Original static prototype 
│   ├── Home.html
│   ├── Restaurant.css
│   ├── about.html
│   ├── cart.js
│   ├── checkout.html
│   ├── contact.html
│   ├── menu.html
│   └── testimonial.html
│
├── LICENSE
└── README.md
</pre>
<h2>Installation and Setup</h2>

<h3>1. React Frontend</h3>
   <pre>
cd Frontend
npm install
npm run dev
   </pre>
→ Open http://localhost:5173 

<h3>2. Backend API</h3>
<pre>
cd Backend
npm install
npm run dev
</pre> 

→ Server runs on http://localhost:5000

→ Health check: http://localhost:5000/api/health

→ Products: http://localhost:5000/api/products

→ Orders: http://localhost:5000/api/orders

3. Static HTML/JS Version (optional, legacy)
   
No install needed.

Just open any .html file in HTML-JS/ or run:

<pre>
cd HTML-JS
npx serve
</pre>

→ http://localhost:3000

Current State Big Burger project
<pre>
Frontend: Mostly complete, responsive, with cart and checkout logic working.
Backend: Connected to MongoDB Atlas, supports dynamic menu and persistent order storage.
Storage: Orders and menu items are now saved in the cloud database no more losing data on page refresh.
Styling: used vanilla CSS and also functional and responsive.
Next planned steps: User authentication, protected routes, dynamic menu fetching in React, and possibly deployment.
</pre>

This project has been a great learning journey from static pages to a full MERN like stack with real database persistence.

<h2>License</h2>

MIT License 

Feel free to use, modify, or learn from it attribution is appreciated.
