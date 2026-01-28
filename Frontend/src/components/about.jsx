import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
function About(){
  return (
    <div>
      <header>
        <nav>
          <div className="navLeft">
            <img src="https://i.ibb.co/Q7H3fyx5/logo.png"  alt="Big Burger Logo"  className="homepageLogo"/>
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
      <main>
        <div id="content">
          <h1 className="about">About Big Burger</h1>
          <p className="desc">
            At Big Burger, we believe every bite should be unforgettable. Born from a passion for flavor and freshness, we've been serving handcrafted burgers that bring people together one juicy stack at a time. 
            <br/><br/>
            Our team grills each patty to perfection, toasting the buns just right and layering on fresh, locally sourced ingredients that make every burger burst with taste. Whether you're craving a classic cheeseburger or something bold and new, Big Burger is where comfort meets quality and every meal feels like home.
          </p>
        </div>
      </main>
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
export default About;