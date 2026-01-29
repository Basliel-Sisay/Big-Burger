import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css'; 
import toast from 'react-hot-toast';
function Menu() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const saved = localStorage.getItem('cart');
    if (saved) {
      setCart(JSON.parse(saved));
    }
  }, []);
  useEffect(() => {
localStorage.setItem('cart', JSON.stringify(cart));
const total = cart.reduce((sum, item) => sum + item.cost * item.amount, 0);
localStorage.setItem('cartTotal', total.toString());
}, [cart]);
function add(food, price) {
    setCart((prev) => {
      const found = prev.find((item) => item.name === food);
      let newCart;
      let message = "";
      let icon = "🍔"; 
      if (found) {
        newCart = prev.map((item) =>
          item.name === food ? { ...item, amount: item.amount + 1 } : item);
        message = food + " x " + (found.amount + 1);
      } else {
        newCart = [...prev, { name: food, cost: price, amount: 1 }];
        message = food + " added";
      }
      if (food.toLowerCase().includes("burger") || food.toLowerCase().includes("sandwich") || food.toLowerCase().includes("nuggets") || food.toLowerCase().includes("wings") || food.toLowerCase().includes("fries")){
        icon = "🍔";
      } 
      else if(
        food.toLowerCase().includes("sprite") ||  food.toLowerCase().includes("coke") ||  food.toLowerCase().includes("pepsi") ||  food.toLowerCase().includes("water") ||  food.toLowerCase().includes("milkshake") || food.toLowerCase().includes("Sparkling water")){
        icon = "🥤";
        message += " to cart";
      } 
      else if(
        food.toLowerCase().includes("Mini cake") || food.toLowerCase().includes("Brownies") || food.toLowerCase().includes("Ice cream")){
        icon = "🍰";
        message += " to cart";
      }
      toast.success(message, {
        icon,
        duration: 2200,
        style: {
        borderRadius: '10px',
        background: 'rgb(50, 53, 51)',
        color: 'white',
        },
      });
      return newCart;
    });
}
function remove(foodName){
    setCart((prev) => prev.filter((item) => item.name !== foodName));
  };
function change (food, changes){
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.name === food) {
            const newAmount = item.amount + changes;
            if (newAmount < 1) return null;
            return { ...item, amount: newAmount };
          }
          return item;
        })
        .filter(Boolean);
    });
  };
function clear(){
toast((t) => (
  <div style={{display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center'}}>
    <span>Are you sure you want to clear the cart?</span>
    <div style={{ display: 'flex', gap: '16px' }}>
      <button onClick={() => {
            setCart([]);
            localStorage.removeItem('cart');
            localStorage.removeItem('cartTotal');
            toast.dismiss(t.id);
            toast.success('Cart cleared', {duration: 700});
          }}
          style={{
            background: ' rgb(182, 44, 29)',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Yes clear</button>
        <button onClick={() => toast.dismiss(t.id)}  style={{background: 'rgb(127, 140, 141)',  color: 'white', border: 'none',  padding: '8px 16px',  borderRadius: '6px', cursor: 'pointer',}}>Cancel</button>
      </div>
    </div>
  ), {
    duration: Infinity, 
    position: 'top-center',
    style: { background: 'rgb(44, 62, 80)', color: 'white', padding: '16px'},
  });
};
function submitOrder(){
    if (cart.length === 0) {
      toast.error('Please add foods, drinks or desserts to your order first',{
      duration: 3000,
      style: { background: 'rgb(192, 57, 43)', color: 'white' }
      });
      return;
    }
    navigate('/checkout');
  };
  const total = cart.reduce((sum, item) => sum + item.cost * item.amount, 0);
  const isEmpty = cart.length === 0;
function renderCartContent(){
    if (isEmpty) {
      return (
        <div className="empty" id="empty">
          <p>Your cart is empty</p>
          <p>Select foods or drinks or desserts from the menu above</p>
        </div>
      );
    }
    return (
      <div className="itemsList" id="itemsList">
        {cart.map((item) => (
          <div key={item.name} className="items">
            <div className="cartItems">
              <strong>{item.name}</strong>
              <br />
              <small>
                {item.cost} Birr x{item.amount} = {(item.cost * item.amount).toFixed(2)} Birr
              </small>
            </div>
            <div className="cartItem">
              <button onClick={() => change(item.name, -1)}>-</button>
              <span>{item.amount}</span>
              <button onClick={() => change(item.name, 1)}>+</button>
              <button onClick={() => remove(item.name)} className="removeButton">
                x
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="menuPageWrapper">
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
        <h1>Our Menu:</h1>

        <div className="foods">
          <h2>Foods</h2>
        </div>
        <div className="menuGrid">
          <div className="items">
            <img src="https://cdn.pixabay.com/photo/2018/03/04/20/08/burger-3199088_1280.jpg" alt="double burger" />
            <p className="price">Big Burger Mini - 229.99 Birr</p>
            <button className="addToOrder" onClick={() => add("Big Burger Mini", 229.99)}>
              Add to Order
            </button>
          </div>
          <div className="items">
            <img src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="cheese burger" />
            <p className="price">Big Burger Cheese - 299.99 Birr</p>
            <button className="addToOrder" onClick={() => add("Big Burger Cheese", 299.99)}>
              Add to Order
            </button>
          </div>
          <div className="items">
            <img src="https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg" alt="beef burger" />
            <p className="price">Big Burger Beef - 279.99 Birr</p>
            <button className="addToOrder" onClick={() => add("Big Burger Beef", 279.99)}>
              Add to Order
            </button>
          </div>
          <div className="items">
            <img src="https://i.pinimg.com/1200x/56/47/71/5647715168a45b4740f350f498a03749.jpg" width="250px" alt="special" />
            <p className="price">Big Burger Special - 439.99 Birr</p>
            <button className="addToOrder" onClick={() => add("Big Burger Special", 439.99)}>
              Add to Order
            </button>
          </div>
          <div className="items">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgYSSTQkGgDRnt9ZYGwKK6YVbrM1rJXkqfAw&s" alt="double" />
            <p className="price">Big Burger Double - 379.99 Birr</p>
            <button className="addToOrder" onClick={() => add("Big Burger Double", 379.99)}>
              Add to Order
            </button>
          </div>
          <div className="items">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_CU_ITATMhOUniSGu4EKtkVNBfHOXjeo6dA&s" alt="chicken" />
            <p className="price">Big Burger Chicken - 339.99 Birr</p>
            <button className="addToOrder" onClick={() => add("Big Burger Chicken", 339.99)}>
              Add to Order
            </button>
          </div>
          <div className="items">
            <img src="https://i.pinimg.com/1200x/d8/d9/18/d8d918c5d377ec3d623e3db3f1c6ec7d.jpg" width="230px" alt="family" />
            <p className="price">Big Burger Family - 799.99 Birr</p>
            <button className="addToOrder" onClick={() => add("Big Burger Family", 799.99)}>
              Add to Order
            </button>
          </div>
          <div className="items">
            <img src="https://i.pinimg.com/1200x/65/19/ab/6519ab079930e427d9e0970d2c1faa7d.jpg" alt="bacon" />
            <p className="price">Big Burger Bacon - 319.99 Birr</p>
            <button className="addToOrder" onClick={() => add("Big Burger Bacon", 319.99)}>
              Add to Order
            </button>
          </div>
          <div className="items">
            <img src="https://i.pinimg.com/736x/19/44/c5/1944c52781e0a8f7dec718a5f54dcd18.jpg" width="220px" height="250px" alt="smashed" />
            <p className="price">Big Burger Smashed - 249.99 Birr</p>
            <button className="addToOrder" onClick={() => add("Big Burger Smashed", 249.99)}>
              Add to Order
            </button>
          </div>
          <div className="items">
            <img src="https://i.pinimg.com/1200x/9b/eb/9b/9beb9bca124793c100754556c0b0d4e9.jpg" width="230px" alt="veggie" />
            <p className="price">Big Burger Veggie - 219.99 Birr</p>
            <button className="addToOrder" onClick={() => add("Big Burger Veggie", 219.99)}>
              Add to Order
            </button>
          </div>
          <div className="items">
            <img src="https://i.pinimg.com/1200x/8b/f1/47/8bf147117ecd2c83fe2421434f1e18ec.jpg" width="230px" alt="tuna" />
            <p className="price">Tuna Sandwich - 179.99 Birr</p>
            <button className="addToOrder" onClick={() => add("Tuna Sandwich", 179.99)}>
              Add to Order
            </button>
          </div>
          <div className="items">
            <img src="https://i.pinimg.com/1200x/88/bd/37/88bd370c8dd5b36d936040add99f1a9f.jpg" width="250px" alt="chicken sandwich" />
            <p className="price">Chicken Sandwich - 199.99 Birr</p>
            <button className="addToOrder" onClick={() => add("Chicken Sandwich", 199.99)}>
              Add to Order
            </button>
          </div>
          <div className="items">
            <img src="https://i.pinimg.com/1200x/23/61/ce/2361ceb86d999535b293f925484798b4.jpg" width="250px" alt="nuggets" />
            <p className="price">Chicken Nuggets - 339.99 Birr</p>
            <button className="addToOrder" onClick={() => add("Chicken Nuggets", 339.99)}>
              Add to Order
            </button>
          </div>
          <div className="items">
            <img src="https://i.pinimg.com/736x/e1/6c/6a/e16c6abdb9e04596239436e47178c1cc.jpg" width="250px" alt="wings" />
            <p className="price">Chicken Wings - 419.99 Birr</p>
            <button className="addToOrder" onClick={() => add("Chicken Wings", 419.99)}>
              Add to Order
            </button>
          </div>
          <div className="items">
            <img src="https://i.pinimg.com/736x/27/24/3b/27243b6b21f40408d7ba973f8181739e.jpg" width="250px" alt="fries" />
            <p className="price">Big Burger Fries - 149.99 Birr</p>
            <button className="addToOrder" onClick={() => add("Big Burger Fries", 149.99)}>
              Add to Order
            </button>
          </div>
        </div>
        <div className="drinks">
          <h2>Drinks</h2>
        </div>
        <div className="menuGrid">
          <div className="items">
            <img
              src="data:image/jpeg;base64,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"  alt="sprite soft drink" />
            <p className="price">Sprite - 69.99 Birr</p>
            <button className="addToOrder" onClick={() => add("Sprite", 69.99)}>
              Add to Order
            </button>
          </div>
          <div className="items">
            <img src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500" alt="coke" />
            <p className="price">Coke - 69.99 Birr</p>
            <button className="addToOrder" onClick={() => add("Coke", 69.99)}>
              Add to Order
            </button>
          </div>
          <div className="items">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_ZH4IKi5BUK5IB2FvOax5Hb48a9ifah_bA&s" alt="pepsi" width="250px" />
            <p className="price">Pepsi - 69.99 Birr</p>
            <button className="addToOrder" onClick={() => add("Pepsi", 69.99)}>
              Add to Order
            </button>
          </div>
          <div className="items">
            <img src="https://i.pinimg.com/736x/75/5e/39/755e39a478af5f611b8214ffa9cb4f17.jpg"/>
            <p className="price">Water - 49.99 Birr</p>
            <button className="addToOrder" onClick={() => add("Water", 49.99)}>
              Add to Order
            </button>
          </div>
          <div className="items">
            <img src="https://i.pinimg.com/1200x/0a/85/75/0a8575a3726b99926282dc42b4b90ebe.jpg" alt="sparkling water" />
            <p className="price">Sparkling water - 69.99 Birr</p>
            <button className="addToOrder" onClick={() => add("Sparkling water", 69.99)}>
              Add to Order
            </button>
          </div>
          <div className="items">
            <img src="https://i.pinimg.com/736x/47/51/67/475167ec1534cc524abc375a3da6f867.jpg" alt="milkshake" />
            <p className="price">Milkshake - 149.99 Birr</p>
            <button className="addToOrder" onClick={() => add("Milkshake", 149.99)}>
              Add to Order
            </button>
          </div>
        </div>
        <div className="desserts">
          <h2>Desserts</h2>
        </div>
        <div className="menuGrid">
          <div className="items">
            <img src="https://i.pinimg.com/1200x/91/e6/7a/91e67abbb9f936709a58c181c031c2ba.jpg" alt="cake" />
            <p className="price">Mini cake - 109.99 Birr</p>
            <button className="addToOrder" onClick={() => add("Mini cake", 109.99)}>
              Add to Order
            </button>
          </div>
          <div className="items">
            <img src="https://i.pinimg.com/1200x/30/6f/3f/306f3f4d3b22a0536cce69065367a95e.jpg" width="200px" alt="Brownies" />
            <p className="price">Brownies - 129.99 Birr</p>
            <button className="addToOrder" onClick={() => add("Brownies", 129.99)}>
              Add to Order
            </button>
          </div>
          <div className="items">
            <img src="https://i.pinimg.com/736x/33/15/fa/3315fafeebd4edeb93d486e764b92b0a.jpg" width="230px" alt="ice cream" />
            <p className="price">Ice cream - 119.99 Birr</p>
            <button className="addToOrder" onClick={() => add("Ice cream", 119.99)}>
              Add to Order
            </button>
          </div>
        </div>
        <div className="insideCart" id="insideCart">
          <h2 className="title">Your Order</h2>
          <div className="contianer">
            {renderCartContent()}
            <div className="total">
              <div className="totalRow">
                <span>Subtotal:</span>
                <span id="cartSubtotal">{total.toFixed(2)} Birr</span>
              </div>
              <div className="totalRow">
                <strong>Total:</strong>
                <strong id="cartTotal" className="totalPrice">{total.toFixed(2)} Birr</strong>
              </div>
            </div>
            <div className="cartFunctions">
              <button className="clear" onClick={clear}>Clear Order</button>
              <button className="submit" onClick={submitOrder}>Submit Order</button>
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

export default Menu;