// src/components/Button.jsx
import React from "react";
import { tokens } from "../utils/tokens";

export default function Button({ children, onClick, style = {}, variant = "primary", disabled = false, ariaLabel }) {
  const base = {
    background: tokens.colorPrimary,
    color: tokens.colorOnPrimary,
    border: "none",
    padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
    borderRadius: tokens.radiusMd,
    fontWeight: 700,
    fontSize: 16,
    cursor: disabled ? "not-allowed" : "pointer",
    boxShadow: tokens.shadowMd,
    transition: "transform .12s ease, background .12s ease",
    display: "inline-block",
    outline: "none",
  };

  const composed = { ...base, ...style };

  if (variant === "ghost") {
    Object.assign(composed, {
      background: "transparent",
      color: tokens.colorPrimary,
      boxShadow: "none",
      border: `1px solid rgba(124,58,237,0.12)`,
    });
  }

  const handleEnter = (e) => {
    if (!disabled) {
      e.currentTarget.style.background = tokens.colorPrimaryHover;
      e.currentTarget.style.transform = "translateY(-2px)";
    }
  };
  const handleLeave = (e) => {
    if (!disabled) {
      e.currentTarget.style.background = variant === "ghost" ? "transparent" : tokens.colorPrimary;
      e.currentTarget.style.transform = "translateY(0)";
    }
  };

  return (
    <button
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={(e) => e.currentTarget.style.boxShadow = "0 0 0 4px rgba(124,58,237,0.12)"}
      onBlur={(e) => e.currentTarget.style.boxShadow = tokens.shadowMd}
      style={composed}
    >
      {children}
    </button>
  );
}
