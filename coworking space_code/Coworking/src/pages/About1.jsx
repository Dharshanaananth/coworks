import React, { useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/About1.css";
import commun1 from "../assets/Commun6.webp";
import commun2 from "../assets/Commun2.webp";
import commun3 from "../assets/Commun3.webp";
import commun4 from "../assets/Commun5.webp";


/* Reveal timeline items on scroll */
function useTimelineObserver() {
  useEffect(() => {
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const items = document.querySelectorAll(".timeline-item");
    if (prefersReduced) {
      items.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { root: null, threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
} /* Use IntersectionObserver for scroll-triggered reveals */

/* Reveal Mission/Vision cards on scroll */
function useMissionVisionObserver() {
  useEffect(() => {
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const cards = document.querySelectorAll(".mv-observe");
    if (prefersReduced) {
      cards.forEach((c) => c.classList.add("mv-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("mv-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);
} /* Same observer pattern for cards */

export default function About() {
  const milestones = [
    { year: "2018", subtitle: "The Beginning", text: "Icity Co-Works was founded with a vision to transform workspaces." },
    { year: "2020", subtitle: "Expansion", text: "Expanded to multiple cities, offering private offices & training spaces." },
    { year: "2022", subtitle: "Impact", text: "Empowered 50+ startups, enterprises, and freelancers." },
    { year: "2024", subtitle: "Future", text: "Building the future of work with AI-driven smart offices." },
  ];

  /* Call hooks as statements at top-level of the component (not inside JSX) */
  useMissionVisionObserver();
  useTimelineObserver(); /* Valid usage avoids no-unused-expressions errors */

  return (
    <main className="aboutus-page">
      {/* HERO SECTION */}
      <header className="aboutus-hero">
        <div className="aboutus-hero-text container">
          <h1 className="aboutus-hero-heading">
            Welcome to <span className="aboutus-highlight">Icity Co-Works</span>
          </h1>
          <p className="aboutus-hero-subheading aboutus-typing">
            Empowering entrepreneurs, startups, freelancers & teams ⟡
          </p>

          <div className="aboutus-hero-buttons">
            <a href="#mission-vision" className="aboutus-btn aboutus-btn-primary">
              Discover Our Story
            </a>
            <a href="#contact" className="aboutus-btn aboutus-btn-secondary">
              Let’s Connect
            </a>
          </div>
        </div>
      </header>

      {/* TIMELINE SECTION */}
      <section className="aboutus-timeline" id="journey">
        <div className="container">
          <h2 className="section-heading">Our Journey</h2>
          <div className="timeline">
            {milestones.map((item, i) => (
              <div
                key={i}
                className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
              >
                <div className="timeline-content" tabIndex="0">
                  <span className="timeline-dot" aria-hidden="true"></span>
                  <h3 className="timeline-year">{item.year}</h3>
                  <h4 className="timeline-subtitle">{item.subtitle}</h4>
                  <p className="timeline-description">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section id="mission-vision" className="aboutus-missionvision">
        <div className="container">
          <h2 className="section-heading">Our Mission & Vision</h2>
          <p className="mv-subheading">
            We build workspaces that support innovation, focus, collaboration,
            and business growth for modern teams.
          </p>

          <div className="missionvision-grid">
            {/* Mission */}
            <div className="missionvision-card mv-observe" data-side="left" tabIndex="0">
              <h3 className="missionvision-title">Our Mission</h3>
              <p className="missionvision-text">
                At iCity Co-Works, our mission is to create inspiring workspaces
                that foster innovation, collaboration, and growth for businesses
                of all sizes.
              </p>
            </div>

            {/* Vision */}
            <div className="missionvision-card mv-observe" data-side="right" tabIndex="0">
              <h3 className="missionvision-title">Our Vision</h3>
              <p className="missionvision-text">
                At Icity Co-Works, we envision a future where workspaces are not
                just places to work but catalysts for innovation, collaboration,
                and creativity. Empowering entrepreneurs, startups, freelancers,
                and remote corporate teams in flexible, hi-tech environments
                that adapt to their evolving needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY SECTION */}
      <section className="aboutus-community">
        <div className="community-wrap">
          {/* Left content */}
          <div className="community-copy">
            <h2 className="section-heading">Our Community</h2>
            <p className="section-paragraph">
            We bring together entrepreneurs, freelancers, and growing teams in a
             collaborative environment.
            </p>

            <ul className="community-highlights" aria-label="Community strengths">
              <li>
                <span className="icon ring" aria-hidden="true"></span>
                Professional networking opportunities
              </li>
              <li>
                <span className="icon headset" aria-hidden="true"></span>
                Collaborative and growth-driven environment
              </li>
              <li>
                <span className="icon rocket" aria-hidden="true"></span>
                Mentorship and knowledge sharing
              </li>
              <li>
                <span className="icon head" aria-hidden="true"></span>
                Fast and reliable peer support
              </li>
              <li>
                <span className="icon laptop" aria-hidden="true"></span>
                Events, workshops, and community engagement
              </li>
            </ul>

            <div className="community-tags" aria-label="Community profiles">
              <span>Entrepreneurs</span>
              <span>Startups</span>
              <span>Freelancers</span>
              <span>Remote Teams</span>
            </div>
          </div>

          {/* Right feature panel */}
          <aside className="community-feature" aria-hidden="true">
            <div className="feature-tiles">
              <figure className="tile">
                <img src={commun1} alt="" loading="lazy" decoding="async" />
              </figure>
              <figure className="tile">
                <img src={commun2} alt="community" loading="lazy" decoding="async" />
              </figure>
              <figure className="tile">
                <img src={commun3} alt="" loading="lazy" decoding="async" />
              </figure>
              <figure className="tile">
                <img src={commun4} alt="" loading="lazy" decoding="async" />
              </figure>
            </div>
            <div className="badge-vertical">
              <strong>Active</strong>
              <span>Community</span>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="about-cta" id="contact">
        <div className="container">
          <h2 className="cta-heading">Ready to Experience the Future of Work?</h2>
          <p className="cta-subheading">
            Join our vibrant community and unlock spaces designed for growth,
            collaboration, and innovation.
          </p>
          <a href="tel:+917397779764" className="btn btn-primary">Get in Touch</a>
        </div>
      </section>
    </main>
  );
}
