import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Fav from "./pages/Fav";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carrito" element={<CartPage />} />
  <Route path="/favoritos" element={<Fav />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
