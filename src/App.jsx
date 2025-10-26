import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SearchResults from "./pages/SearchResults";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Fav from "./pages/Fav";
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
  <Route path="/search" element={<SearchResults />} />
        <Route path="/men" element={<Products defaultTab="men" />} />
        <Route path="/women" element={<Products defaultTab="women" />} />
        <Route path="/accessories" element={<Products defaultTab="accessories" />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/carrito"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="/favoritos" element={<Fav />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
