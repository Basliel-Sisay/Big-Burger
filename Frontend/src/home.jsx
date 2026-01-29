import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
function Home(){
  return (
    <div className="homepageBackground">
      <header className="transparentHeader">
        <nav>
          <div className="navLeft">
            <img src="https://i.ibb.co/Q7H3fyx5/logo.png" alt="Big Burger Logo" className="homepageLogo"/>
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
        <div className="homepageMain">
          <div className="homepageHero">
            <div className="homepageHeader">
              <h1>Big Burger</h1>
            </div>
            <div className="heroContent">
              <p className="heroTagline">Real burgers, real flavor</p>
              <p className="heroDescription">
                Sink your teeth into the most flavorful and delicious burgers in town. 
                Every bite is a taste of happiness, made fresh just for you.
              </p>
              <div className="heroButtons">
                <Link to='/menu' className="heroButton">View Menu</Link>
                <Link to='contact' className="heroButton secondaryButton">Order Now</Link>
              </div>
            </div>
          </div>
          <div className="contentOverlay">
            <div className="textContentContainer">
              <div className="textContainer">
                <h3 className="title">
                  Welcome to Big Burger 
                </h3>
                <p className="text">
                  From classic favorites to bold new creations, Big Burger is where flavor comes alive and every meal is an experience.
                  <br /><br />
                  Come hungry and leave smiling! We use only the finest, locally sourced ingredients, from crisp vegetables to premium cuts of beef.
                </p>
              </div>
              <div className="featuresContainer">
                <h3 className="featTitle">What makes us special</h3>
                <p className="feat">
                  Each burger is crafted with care to ensure the perfect balance of flavor and quality.
                  <br /><br />
                  At Big Burger, freshness and taste come together in every bite.
                  <br /><br />
                  Our team grills each patty to perfection, toasting the buns just right and layering on fresh ingredients.
                </p>
              </div>
            </div>  
            <div className="hoursContainer">
              <h3 className="hoursTitle">Opening Hours</h3>
              <p className="hoursText">Sunday: 10am - 11pm<br /> Monday: 11am - 10pm<br />Tuesday: 11am - 10pm<br />Wednesday: 11am - 10pm<br />Thursday: 11am - 10pm<br />Friday: 11am - 10pm<br />Saturday: 10am - 11pm </p>
            </div>
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
export default Home;