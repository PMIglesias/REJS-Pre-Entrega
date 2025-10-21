import React, { createContext, useContext, useState, useEffect } from "react";

const FavContext = createContext();
export const useFav = () => useContext(FavContext);

export const FavProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.url === product.url);
      if (exists) {
        return prev.filter((item) => item.url !== product.url);
      }
      return [...prev, product];
    });
  };

  const isFavorite = (productUrl) => {
    return favorites.some((item) => item.url === productUrl);
  };

  return (
    <FavContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavContext.Provider>
  );
};
