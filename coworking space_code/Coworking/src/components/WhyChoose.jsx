import React from "react";
import "../styles/WhyChoose.css";

const ITEMS = [
  "24/7 Access",
  "Premium Amenities",
  "Networking Opportunities",
  "Prime Location",
];

export default function WhyChoose() {
  return (
    <section className="why-section" aria-label="Why choose iCity Co-Working">
      <div className="icity-container">
        <div className="why-grid">
          <div className="why-left">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              A premium, minimal workspace experience built for productivity, comfort,
              and modern teams.
            </p>
          </div>

          <div className="why-right">
            <ul className="why-list">
              {ITEMS.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

