import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useFav } from "../context/FavContext";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFav();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleCardClick = () => {
    navigate(`/producto/${product.url}`);
  };

  const handleFavClick = (e) => {
    e.stopPropagation();
    toggleFavorite(product);
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <div className="image-container">
        <img src={product.img[0]} alt={product.title_es} />
        <button
          className={"fav-btn" + (isFavorite(product.url) ? " active" : "")}
          onClick={handleFavClick}
          title={isFavorite(product.url) ? "Quitar de favoritos" : "Agregar a favoritos"}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
      <div className="info">
        <h3>{product.title_es}</h3>
        <p className="price">{product.price}</p>
        <button onClick={handleAddToCart}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ProductCard;
