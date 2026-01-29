import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './home.jsx';
import Menu from './menu.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';
import Testimonials from './testimonial.jsx';
import Checkout from './checkout.jsx';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;