import React from "react";
import "../styles/Community.css";

const POINTS = [
  "Entrepreneurs & Startups",
  "Freelancers",
  "Remote Teams",
  "Creatives",
  "Tech Professionals",
  "Business Consultants",
];

export default function Community() {
  return (
    <section className="community-section" aria-label="Our Community">
      <div className="icity-container">
        <header className="community-head">
          <h2 className="section-title">Our Community</h2>
          <p className="section-subtitle">
            A vibrant mix of professionals who value focus, collaboration, and growth.
          </p>
        </header>

        <div className="community-grid" role="list">
          {POINTS.map((x) => (
            <article className="community-chip" role="listitem" key={x}>
              {x}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

