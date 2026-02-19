// src/App.jsx
import React from "react";
import "./index.css";
import Hero from "./components/Hero";
import Card from "./components/Card";
const sampleImg = "data:image/svg+xml;utf8," + encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='640' height='480'>
     <rect width='100%' height='100%' fill='#f3e8ff'/>
     <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#7c3aed' font-size='20'>Sample</text>
   </svg>`
);

export default function App() {
  return (
    <div>
      <Hero />

      <section className="container" style={{ paddingTop: 48, paddingBottom: 120 }}>
        <h2 style={{ fontSize: "var(--h2-size)" }}>Featured Models</h2>

        <div className="product-grid">
          <Card title="Iso Model A" subtitle="Lightweight. Modular pickup system." img={sampleImg} />
          <Card title="Iso Model R" subtitle="Extended range. Hybrid analog/digital." img={sampleImg} />
          <Card title="Iso Model X" subtitle="Pro-level tone shaping and onboard DSP." img={sampleImg} />
        </div>
      </section>
    </div>
  );
}
