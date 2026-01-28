import React, { useState, useEffect } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import './App.css';
function Checkout(){
const navigate = useNavigate();
const [cart, setCart] = useState([]);
useEffect(() => {
const savedCart = JSON.parse(localStorage.getItem('cart'));
if (savedCart) {
    setCart(savedCart);
}
}, []);
function calculateTotal(){
    let sum = 0;
    cart.forEach(item => {
      sum += item.amount * item.cost;
    });
    return sum;
  };
function handleCheckout(event){
    event.preventDefault();
    if (cart.length === 0) {
      alert('Your cart is empty. Please add foods or drinks or desserts to your cart first');
      navigate('/menu');
      return;
    }
const totalVal = calculateTotal();
const formData = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    address: document.getElementById('address').value,
    notes: document.getElementById('notes').value,
    items: cart,
    total: totalVal,
};
    alert("Order placed successfully\n\nTotal: " + totalVal.toFixed(2) + " Birr\n\nYour order will be delivered soon.");
    localStorage.removeItem('cart');
    setCart([]);
    navigate('/');
};
let cartItemsDisplay;
  if (cart.length === 0) {
    cartItemsDisplay = (<p>Your cart is empty. <a href="menu.html">Return to menu</a></p>);
  } else {
    cartItemsDisplay = cart.map((item, index) => (
      <div key={index} className="checkoutItem">
        <div className="checkoutItemInfo">
          <strong>{item.name}</strong>
          <small>{item.cost} Birr x {item.amount}</small>
        </div>
        <div className="checkoutItemPrice">
          {(item.cost * item.amount).toFixed(2)} Birr
        </div>
      </div>
    ));
  }
  return (
    <div>
      <header>
        <nav>
          <div className="navLeft">
            <img src="https://i.ibb.co/Q7H3fyx5/logo.png" alt="Big Burger Logo" className="homepageLogo" />
          </div>
          <div className="navRight">
          <Link to="/" className="navButton">Home</Link>
          <Link to="/menu" className="navButton">Menu</Link>
          <Link to="/about" className="navButton">About</Link>
          <Link to="/contact" className="navButton">Contact</Link>
          <Link to="/testimonials" className="navButton">Testimonials</Link>
          </div>
        </nav>
      </header>
      <div id="content">
        <h1 className="contactTitle">Checkout</h1>
        <div className="checkoutContainer">
          <div className="checkoutLeft">
            <h2>Receipt</h2>
            <div id="checkoutItemsList">
              {cartItemsDisplay}
            </div>
            <div className="checkoutTotal">
              <div className="totalRow">
                <span>Subtotal:</span>
                <span id="checkoutSubtotal">{calculateTotal().toFixed(2)} Birr</span>
              </div>
              <div className="totalRow">
                <strong>Total:</strong>
                <strong id="checkoutTotal">{calculateTotal().toFixed(2)} Birr</strong>
              </div>
            </div>
          </div>
          <div className="checkoutRight">
            <h2>Delivery Information</h2>
            <form id="checkoutForm" onSubmit={handleCheckout}>
              <div className="formGroup">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="username" placeholder="Please Enter name" required />
              </div>
              <div className="formGroup">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone number" placeholder="Please Enter Phone number" required />
              </div>
              <div className="formGroup">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Please Enter email" />
              </div>
              <div className="formGroup">
                <label htmlFor="address">Delivery Address</label>
                <textarea id="address" name="address" rows="3" required></textarea>
              </div>
              <div className="formGroup">
                <label htmlFor="delivery">choose delivery partner</label>
                <select id="delivery" name="Delivery partners">
                  <option>Yegna Delivery</option>
                  <option>ZMall Express</option>
                  <option>Beu Delivery</option>
                </select>
              </div>
              <div className="formGroup">
                <label htmlFor="notes">Special Instructions</label>
                <textarea id="notes" name="notes" rows="3" placeholder="Any special instructions for the delivery"></textarea>
              </div>
              <div className="checkoutButtons">
                <button type="button" onClick={() => navigate('/menu')} className="cancelButton">Go back to menu</button>
                <button type="submit" className="submitButton">Place Order</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footerInner">
          <div className="footerBrand">
            <img src="https://i.ibb.co/Q7H3fyx5/logo.png" alt="Big Burger Icon" className="footerLogo"/>
            <p className="footerSlogan"> Real burgers, real flavor</p>
          </div>
          <div className="footerContact">
            <h4>Contact Information</h4>
            <p>
              <strong>Big Burger HQ</strong><br />
              Bole Atlas, Addis Ababa, Ethiopia
            </p>
            <span>Phone: +251 911 055 508</span><br/>
            <span>WhatsApp: +251 935 287 463</span><br/>
            <span>Email: order@bigburger.et</span><br/>
          </div>
          <div className="footerHours">
            <h4>Business Hours</h4>
            <ul>
              <li>Mon - Fri: 11:00 AM - 10:00 PM</li>
              <li>Sat - Sun: 10:00 AM - 11:00 PM</li>
            </ul>
          </div>
          <div className="footerLinks">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/testimonials" >Testimonials</Link>
          </div>
        </div>
        <div className="footerLegal">
          <p>&copy; 2025 Basliel Sisay. All rights reserved</p>
          <div className="legalLinks">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Checkout;