import React from "react";
import { Link } from "react-router-dom";
import "../styles/Pricing.css";

const PLANS = [
  {
    name: "Basic",
    price: "",
    desc: "Perfect for flexible workdays and starters.",
    features: ["Hot desk access", "High-speed internet", "Community access"],
  },
  {
    name: "Standard",
    price: "",
    desc: "For consistent productivity and growing teams.",
    features: ["Dedicated desk", "Meeting room credits", "Premium amenities"],
    popular: true,
  },
  {
    name: "Premium",
    price: "",
    desc: "For teams who want privacy and maximum comfort.",
    features: ["Private office", "Priority support", "Conference access"],
  },
];

export default function Pricing() {
  return (
    <section className="pricing-section" aria-label="Pricing">
      <div className="icity-container">
        <header className="pricing-head">
          <h2 className="section-title">Pricing</h2>
        </header>

        <div className="pricing-grid">
          {PLANS.map((p) => (
            <article
              key={p.name}
              className={`pricing-card ${p.popular ? "is-popular" : ""}`}
            >
              {p.popular && <div className="popular-badge">Most Popular</div>}
              <h3>{p.name}</h3>
              {p.price ? <div className="price">{p.price}</div> : null}
              <p className="desc">{p.desc}</p>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              {p.name === "Basic" ? (
                <Link
                  className="pricing-cta"
                  to="/workspaces?workspace=private-office"
                >
                  Get Started
                </Link>
              ) : p.name === "Standard" ? (
                <Link
                  className="pricing-cta"
                  to="/workspaces?workspace=private-office"
                >
                  Get Started
                </Link>
              ) : p.name === "Premium" ? (
                <Link
                  className="pricing-cta"
                  to="/workspaces?workspace=executive"
                >
                  Get Started
                </Link>
              ) : (
                <a className="pricing-cta" href="/contact">
                  Get Started
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

