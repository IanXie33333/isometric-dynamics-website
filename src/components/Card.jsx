// src/components/Card.jsx
import React, { useState } from "react";
import Button from "./Button";
import { tokens } from "../utils/tokens";

export default function Card({ title, subtitle, img, style = {} }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="card"
      style={{
        background: tokens.bg2,
        borderRadius: tokens.radiusMd,
        padding: tokens.spacing.md,
        boxShadow: tokens.shadowMd,
        display: "flex",
        flexDirection: "column",
        gap: tokens.spacing.sm,
        ...style
      }}
    >
      <div style={{
        height: 180,
        borderRadius: 10,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(145deg,#e9e7ff,#ffffff)",
      }}>
        {!loaded && <div style={{ width: "100%", height: "100%", background: "linear-gradient(90deg,#eee,#f7f7f7)" }} />}
        {img ? (
          <img
            src={img}
            alt={title}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            style={{ display: loaded ? "block" : "none", width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div style={{ fontWeight: 700, color: "rgba(0,0,0,0.2)" }}>Product Preview</div>
        )}
      </div>

      <div style={{ paddingTop: tokens.spacing.xs }}>
        <h3 style={{ margin: 0, fontSize: 18 }}>{title}</h3>
        <p style={{ margin: 0, color: tokens.text2, marginTop: 8 }}>{subtitle}</p>
      </div>

      <div style={{ marginTop: tokens.spacing.md }}>
        <Button ariaLabel={`Learn more about ${title}`}>Learn more</Button>
      </div>
    </div>
  );
}
