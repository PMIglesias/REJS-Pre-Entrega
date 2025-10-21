import React from "react";

export default function Brands() {
  const brands = ["henry-stevens.png", "heinrich-dinkelacker.png", "valentino.png", "falke.png"];

  return (
    <section className="brands">
      {brands.map((b, i) => (
        <img key={i} src={`/brands/${b}`} alt={b.replace(".png", "")} />
      ))}
    </section>
  );
}
