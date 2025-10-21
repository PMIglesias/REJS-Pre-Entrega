import React, { createContext, useState, useContext } from "react";

// Crear el contexto del carrito
const CartContext = createContext();

// Hook personalizado para usar el contexto del carrito
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de CartProvider");
  }
  return context;
};

// Provider del carrito
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  // Persistir carrito en localStorage
  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Agregar producto al carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.url === product.url);
      if (existing) {
        return prevCart.map((item) =>
          item.url === product.url
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remover producto del carrito
  const removeFromCart = (productUrl) => {
    setCart((prevCart) => prevCart.filter((item) => item.url !== productUrl));
  };

  // Actualizar cantidad de un producto
  const updateQuantity = (productUrl, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.url === productUrl ? { ...item, quantity } : item
      )
    );
  };

  // Limpiar carrito
  const clearCart = () => setCart([]);

  // Obtener total del carrito
  const getCartTotal = () =>
    cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Obtener cantidad total de items
  const getCartCount = () =>
    cart.reduce((count, item) => count + item.quantity, 0);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
