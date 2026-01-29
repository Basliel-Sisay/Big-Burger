# Big Burger - Restaurant Web Application

A modern single-page restaurant website for **Big Burger**, an imaginary burger spot in Addis Ababa, Ethiopia.

The project currently exists in **two parallel implementations**:

- A **modern React + Vite frontend** (recommended for future development)
- A **static HTML + CSS + JavaScript prototype** (original version, kept for reference)

---

## Project Overview

**Big Burger** is a responsive web application that allows users to:

- Browse the menu (burgers, drinks, desserts)
- Add items to a cart
- Proceed to checkout
- View customer testimonials
- Read about the business and contact the restaurant

The **React version** uses React Router for navigation, localStorage-based cart persistence, and modern component-based architecture.

The **HTML/JS version** is a simpler, static prototype using vanilla JavaScript and CSS — useful as a reference or fallback.

---

## Features

- Responsive navigation bar across all pages
- Menu page with food, drink, and dessert categories
- Interactive shopping cart (add, remove, update quantity)
- Checkout form with order summary
- Testimonials section with customer reviews and ratings
- About, Contact, and Home pages with branding
- Persistent cart using `localStorage` (React version)
- Clean, modern UI with custom CSS

**Note**: The React version is more maintainable and scalable, while the HTML version serves as the original proof-of-concept.

---

## File Structure

<pre>
Big-Burger/
├── Frontend/                    ← Modern React + Vite application
│   ├── README.md
│   ├── eslint.config.js
│   ├── .gitignore
│   ├── index.html
│   ├── node_modules/
│   ├── package-lock.json
│   ├── package.json
│   ├── public/
│   ├── src/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── about.jsx
│   │   ├── assets/
│   │   ├── checkout.jsx
│   │   ├── components/
│   │   │   └── index.css
│   │   ├── contact.jsx
│   │   ├── home.jsx
│   │   ├── main.jsx
│   │   ├── menu.jsx
│   │   └── testimonial.jsx
│   └── vite.config.js
├── HTML-JS/                     ← Original static HTML + JS prototype
│   ├── Home.html
│   ├── Restaurant.css
│   ├── about.html
│   ├── cart.js
│   ├── checkout.html
│   ├── contact.html
│   ├── menu.html
│   └── testimonial.html
├── LICENSE
└── README.md
</pre>

<h2>Installation & Setup</h2>

<h3>1. React Frontend (recommended)</h3>

<pre>
# 1. Go to the frontend folder
cd Frontend

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
</pre>

→ Open http://localhost:5173 (or the port shown in terminal)

<h3>2. Static HTML/JS Version</h3>

No installation needed.

Open any .html file directly in your browser (e.g. HTML-JS/menu.html)

Or serve the folder with a simple server:

<pre>
cd HTML-JS
npx serve
</pre>

→ Open http://localhost:3000

<h2>Usage</h2>

<h3>React Version</h3>

Home → landing page with welcome message and branding

Menu → browse and add items to cart 

Cart appears on the buttom side of the menu page

Submit Order → redirects to checkout page

Checkout → fill delivery details and place order

Testimonials → view customer reviews (form coming soon)

About / Contact → static information pages

Navigation is handled via <Link> components and React Router.

<h3>Static HTML/JS Version</h3>

All pages are separate .html files

Cart is managed via cart.js and localStorage

Navigation uses plain <a> links

Simpler, but less maintainable for larger updates

<h2>Current State</h2>

The React frontend is the main development direction

Most pages are converted to React components

Cart and checkout logic is functional

Styling is still basic (mostly ported from App.css)

Testimonials page has static reviews + placeholder form logic

No backend yet — cart and reviews are client-side only

Authentication / user reviews backend → planned next phase

<h2>License</h2>

This project is licensed under the terms of the LICENSE file (MIT by default unless otherwise specified).

Feel free to use, modify, and distribute — attribution appreciated.

