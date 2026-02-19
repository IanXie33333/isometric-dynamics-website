// src/components/Hero.jsx
import React, { useState } from "react";
import Button from "./Button";
import { tokens } from "../utils/tokens";

/**
 * Hero component
 * Props:
 *  - heroSrc: optional URL for the hero image (string). If omitted, a placeholder will be used.
 */
export default function Hero({ heroSrc }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  // default placeholder (fast, reliable). Replace with your own CDN URL if available.
  const defaultHero = "https://picsum.photos/960/640"; 
  const heroImg = heroSrc || defaultHero;

  return (
    <section className="hero" aria-label="Hero - Isometric Dynamics">
      {/* Left */}
      <div className="hero-left" style={{ flex: 6 }}>
        <span style={{ color: tokens.colorPrimary, fontWeight: 700, letterSpacing: 2, marginBottom: 12 }}>
          ISOMETRIC DYNAMICS
        </span>

        <h1 style={{ fontSize: "var(--h1-size-mobile)", lineHeight: 1.02, margin: "8px 0 0 0", maxWidth: "100%" }}>
          A New Era of <br /> E-Guitar
        </h1>

        <p style={{ marginTop: 16, color: tokens.text2, fontSize: 16, maxWidth: "100%" }}>
          Precision engineered. Futuristic design. Experience sound in a completely new dimension.
        </p>

        <div style={{ marginTop: 28, display: "flex", gap: 12 }}>
          <Button style={{ padding: "12px 28px" }}>Explore Product</Button>
          <Button variant="ghost" style={{ padding: "12px 20px" }}>Compare Models</Button>
        </div>
      </div>

      {/* Right */}
      <div className="hero-right" style={{ flex: 4 }}>
        {!imgLoaded && <div className="skeleton" aria-hidden />}

        <img
          src={heroImg}
          alt="Isometric Dynamics product"
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          className="hero-image"
          style={{ display: imgLoaded ? "block" : "none" }}
        />
      </div>
    </section>
  );
}
