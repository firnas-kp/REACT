import React from 'react'
import "./Navbar1.css";


const Navbar1 = () => {
  return (
    <nav className='navbar'>
        <div className='logo'>Shoppyyy</div>
        <ul className='nav-links'>
            <li>Categories</li>
            <li>Deals</li>
            <li>Whats new</li>
            <li>Delivery</li>
        </ul>
        <div className='nav-right'>
            <input type="text" placeholder='Search product' />
            <i className="ri-user-line"></i>
            <li className="ri-shopping-cart-line"></li>
        </div>
    </nav>
  );
}

export default Navbar1
