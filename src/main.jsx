import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import "./styles/globals.css";

import { FavProvider } from "./context/FavContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <FavProvider>
          <App />
        </FavProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
