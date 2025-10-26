import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./../styles/globals.css";

export default function Header() {
  const { getCartCount } = useCart();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleCartClick = () => {
    navigate("/carrito");
  };

  const handleFavClick = () => {
    navigate("/favoritos");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (q.length === 0) return;
    navigate(`/search?q=${encodeURIComponent(q)}`);
    setSearchQuery("");
  };

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo" onClick={(e) => {
          if (typeof window !== 'undefined' && window.innerWidth <= 768) {
            e.preventDefault();
            setMobileOpen(true);
          }
        }}>SHOEPASSION</Link>

        <nav className="header__nav">
          <NavLink to="/men" className={({ isActive }) => (isActive ? "active" : "")}>HOMBRE</NavLink>
          <NavLink to="/women" className={({ isActive }) => (isActive ? "active" : "")}>MUJER</NavLink>
          <NavLink to="/accessories" className={({ isActive }) => (isActive ? "active" : "")}>ACCESORIOS</NavLink>
        </nav>

  <form className="header-search" onSubmit={handleSearchSubmit} role="search">
          <input
            className="search-input"
            type="search"
            name="q"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Buscar productos"
          />
          <button type="submit" className="icon-btn search-btn" aria-label="Buscar">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
        </form>

        <div className="header__icons">
          <button className="icon-btn favorite-btn" onClick={handleFavClick}>
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
          <button
            className="icon-btn hamburger-btn"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="mobile-nav"
          role="dialog"
          aria-modal="true"
          onClick={(e) => { if (e.target === e.currentTarget) setMobileOpen(false); }}
        >
          <div className="mobile-nav__inner">
            <button className="mobile-nav__close" aria-label="Cerrar menú" onClick={() => setMobileOpen(false)}>
              ✕
            </button>

            <nav className="mobile-nav__links">
              <NavLink to="/men" onClick={() => setMobileOpen(false)}>HOMBRE</NavLink>
              <NavLink to="/women" onClick={() => setMobileOpen(false)}>MUJER</NavLink>
              <NavLink to="/accessories" onClick={() => setMobileOpen(false)}>ACCESORIOS</NavLink>
            </nav>

            <form className="mobile-search" onSubmit={(e) => { handleSearchSubmit(e); setMobileOpen(false); }}>
              <input
                className="search-input"
                type="search"
                name="q"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Buscar productos"
              />
              <button type="submit" className="icon-btn search-btn" aria-label="Buscar">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
