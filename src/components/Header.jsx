import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./../styles/globals.css";

export default function Header() {
  const { getCartCount } = useCart();
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/carrito");
  };

  const handleFavClick = () => {
    navigate("/favoritos");
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">SHOEPASSION</Link>
        <nav className="header__nav">
          <Link to="/" className="active">MEN</Link>
          <Link to="/productos">WOMEN</Link>
          <Link to="/productos">SHOES</Link>
          <a href="#">AUTUMN/WINTER 25</a>
          <a href="#" className="outlet">OUTLET</a>
          <a href="#">ACCESSORIES</a>
          <a href="#">BRANDS</a>
          <a href="#">STORES</a>
        </nav>
        <div className="header__icons">
          <button className="icon-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
          
          <button className="icon-btn" onClick={handleFavClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          
          <button className="icon-btn cart-btn" onClick={handleCartClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            {getCartCount() > 0 && (
              <span className="cart-badge">{getCartCount()}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
