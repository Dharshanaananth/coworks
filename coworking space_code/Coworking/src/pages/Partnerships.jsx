import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/Partnerships.css";

import img1 from "../assets/smartCardia.png";
import img2 from "../assets/Super.png";
import img3 from "../assets/saxeo.svg";
import img4 from "../assets/techno1.png";
import img8 from "../assets/north.png";
import imgAnandRathi from "../assets/Anandrathi.png";
import partnerBanner from "../assets/banner.jpg";

const PILLARS = [
  {
    icon: "bi-diagram-3",
    title: "Strategic alignment",
    text:
      "We build partnerships around shared goals—events, member perks, and programs that fit your brand and our community.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Mutual growth",
    text:
      "Reach founders, teams, and freelancers in a high-trust workspace environment while we strengthen our member experience.",
  },
  {
    icon: "bi-shield-check",
    title: "Quality & trust",
    text:
      "We work with partners who share our standards for reliability, professionalism, and long-term relationships.",
  },
];

const PARTNERS = [
  { src: img1, alt: "Smartcardia", name: "Smartcardia", tag: "Health tech" },
  { src: img4, alt: "Technoduce", name: "Technoduce", tag: "Software" },
  { src: img2, alt: "The Super Accountants", name: "The Super Accountants", tag: "Advisory" },
  { src: img3, alt: "SAXEO", name: "SAXEO", tag: "Professional services" },
  { src: img8, alt: "North Telecom", name: "North Telecom", tag: "Telecom" },
  {
    src: imgAnandRathi,
    alt: "Anand Rathi Investment Services",
    name: "Anand Rathi",
    tag: "Investment services",
  },
];

export default function Partnerships() {
  return (
    <main className="partnerships-page">
      <header
        className="partnerships-hero"
        style={{ backgroundImage: `url(${partnerBanner})` }}
      >
        <div className="partnerships-hero__inner container">
          <h1 className="partnerships-title">Our Partnerships</h1>
          <p className="partnerships-subtitle">
            Collaborating with industry leaders to drive innovation and growth
          </p>
        </div>
      </header>

      <section className="partnerships-intro container" aria-labelledby="partnerships-intro-heading">
        <div className="partnerships-intro__card">
          <p className="partnerships-intro__eyebrow" id="partnerships-intro-heading">
            Better together
          </p>
          <p className="partnerships-intro__lead">
            Partnerships extend what we can offer members—specialist services, technology,
            and expertise—while giving our partners a credible channel into active teams and
            growing businesses.
          </p>
        </div>
      </section>

      <section className="partnerships-pillars container" aria-labelledby="pillars-heading">
        <div className="partnerships-section__head partnerships-pillars__head">
          <h2 id="pillars-heading" className="partnerships-section__title">
            How we partner
          </h2>
          <p className="partnerships-section__desc">
            A clear, member-first approach to collaboration—whether you are a service
            provider, technology company, or community organization.
          </p>
        </div>
        <div className="pillars-grid">
          {PILLARS.map((item) => (
            <article className="pillar-card" key={item.title}>
              <div className="pillar-card__icon" aria-hidden="true">
                <i className={`bi ${item.icon}`} />
              </div>
              <h3 className="pillar-card__title">{item.title}</h3>
              <p className="pillar-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="partnerships-section container" aria-labelledby="partners-grid-heading">
        <div className="partnerships-section__head">
          <h2 id="partners-grid-heading" className="partnerships-section__title">
            Our trusted partners
          </h2>
          <p className="partnerships-section__desc">
            Organizations we are proud to stand alongside—supporting members with depth,
            reach, and proven delivery.
          </p>
        </div>

        <div className="partners-grid" role="list" aria-label="Partner organizations">
          {PARTNERS.map((p) => (
            <article className="partner-card" role="listitem" key={p.alt}>
              <div className="partner-card__media">
                <img src={p.src} loading="lazy" alt={`${p.name} logo`} />
              </div>
              <div className="partner-card__meta">
                <h3 className="partner-card__name">{p.name}</h3>
                <span className="partner-card__tag">{p.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="partnerships-cta" aria-labelledby="partnerships-cta-heading">
        <div className="partnerships-cta__inner container">
          <div className="partnerships-cta__copy">
            <h2 id="partnerships-cta-heading" className="partnerships-cta__title">
              Interested in partnering with Icity?
            </h2>
            <p className="partnerships-cta__text">
              Tell us about your organization and how you would like to collaborate. Our
              team will follow up with next steps.
            </p>
          </div>
          <div className="partnerships-cta__actions">
            <Link className="partnerships-cta__btn partnerships-cta__btn--primary" to="/contact">
              Start a conversation
            </Link>
            <Link className="partnerships-cta__btn partnerships-cta__btn--ghost" to="/">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
