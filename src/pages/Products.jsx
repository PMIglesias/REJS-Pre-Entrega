import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tab, setTab] = useState("men");

  useEffect(() => {
    fetch("/data/catalog_shoes_store_es.json")
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar los productos");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading-page"><p>Cargando productos...</p></div>;
  if (error) return <div className="error-page"><p>Error: {error}</p></div>;

  // Filtrar productos por categoría
  let filtered = [];
  if (tab === "men") {
    filtered = products.filter(p => p.category === "mens-shoes");
  } else if (tab === "women") {
    filtered = products.filter(p => p.category === "womens-shoes");
  } else if (tab === "accessories") {
    filtered = products.filter(p => p.category === "accessories");
  }

  return (
    <div className="products-page">
      <h1>Productos</h1>
      <div className="products-tabs">
        <button className={tab === "men" ? "active" : ""} onClick={() => setTab("men")}>Men</button>
        <button className={tab === "women" ? "active" : ""} onClick={() => setTab("women")}>Women</button>
        <button className={tab === "accessories" ? "active" : ""} onClick={() => setTab("accessories")}>Accesorios</button>
      </div>
      <div className="products-container">
        {filtered.length === 0 ? (
          <p>No hay productos en esta categoría.</p>
        ) : (
          filtered.map((p) => (
            <ProductCard key={p.url} product={p} />
          ))
        )}
      </div>
    </div>
  );
}

export default Products;
