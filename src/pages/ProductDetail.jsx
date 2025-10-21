import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/catalog_shoes_store_es.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.url === id);
        setProduct(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className="product-detail">
      <div className="product-detail__images">
        {product.img.map((image, i) => (
          <img key={i} src={image} alt={`${product.title_es} ${i + 1}`} />
        ))}
      </div>
      <div className="product-detail__info">
        <h1>{product.title_es}</h1>
        <p className="price">{product.price}</p>
        <p className="vendor">Marca: {product.vendor}</p>
        <button>Agregar al carrito</button>
      </div>
    </div>
  );
}

