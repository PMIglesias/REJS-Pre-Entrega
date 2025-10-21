import React from "react";

export default function Brands() {
  const brands = [
    { name: "CHEANEY", logo: "/brands/cheaney.jpg" },
    { name: "CROCKETT & JONES", logo: "/brands/crockett.jpg" },
    { name: "HEINRICH DINKELACKER", logo: "/brands/heinrich.jpg" },
    { name: "JOHN LOBB", logo: "/brands/johnlobb.jpg" },
  ];

  return (
    <section className="brands">
      <h2>Our Premium Brands</h2>
      <div className="brands__grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-card">
            <img src={brand.logo} alt={brand.name} />
            <h3>{brand.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
