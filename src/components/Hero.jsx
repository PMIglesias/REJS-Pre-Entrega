import React, { useState } from "react";

const images = [
  "/brands/hero_1.jpg",
  "/brands/hero_2.jpg"
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <section className="hero">
      <div className="hero__carousel">
        <img
          src={images[current]}
          alt={`Hero ${current + 1}`}
          className="hero__img"
        />
        <button className="hero__carousel-btn left" onClick={prevSlide}>&lt;</button>
        <button className="hero__carousel-btn right" onClick={nextSlide}>&gt;</button>
        <div className="hero__carousel-dots">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={"hero__dot" + (idx === current ? " active" : "")}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
      <div className="hero__content">
        <h1 className="hero__title">Autumn Special</h1>
        <p className="hero__subtitle">Now up to 50% off autumn styles</p>
        <button className="hero__button">Discover now</button>
        <div className="hero__brands">
          <div className="hero__brand">
            <img src="/brands/heinrich-dinkelacker.png" alt="Heinrich Dinkelacker" />
          </div>
          <div className="hero__brand">
            <img src="/brands/1991.png" alt="1991" />
          </div>
          <div className="hero__brand">
            <img src="/brands/henry-stevens.png" alt="Henry Stevens" />
          </div>
        </div>
      </div>
    </section>
  );
}
