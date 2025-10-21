import React from "react";
import { Navigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useCart();

  if (!isAuthenticated) {
    // Redirigir a login si no está autenticado
    return <Navigate to="/login" replace />;
  }

  return children;
}
