import React from "react";
import PromoBanner from "../components/PromoBanner";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import Brands from "../components/Brands";

export default function Home() {
  return (
    <main className="home">
      <PromoBanner />
      <Hero />
      <ProductGrid />
      <Brands />
    </main>
  );
}
