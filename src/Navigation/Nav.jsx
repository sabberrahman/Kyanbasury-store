import React from 'react';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css"

const Navigation = ({handleInputChange}) => {
    return (
        
        <nav>
            <div className="logo-section">
                <img  className="logo-img"src="/text-1706973082972.png" alt="Your Logo"  />
                <p>হ্যান্ডমেড উইথ লাভ --<b>নূরা রাইসা</b></p>
            </div>
            <div className="nav-cointainer">
                <input type="text"
                onChange={handleInputChange}
                className='search-input' 
                placeholder='আপনি যা খুঁজছেন তা লিখুন' />
            </div>
            <div className="profile-container">
            <a href="https://www.instagram.com/kyanbasury/" target='_blank' className="order-now">
                     <AiOutlineShoppingCart className='nav-icons'/>  অর্ডার করুন!
                </a>
            </div>
        </nav>
      
    );
};

export default Navigation;

