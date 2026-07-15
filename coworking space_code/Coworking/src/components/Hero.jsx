import React, { useEffect, useMemo, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {
  FaStar,
  FaUser,
  FaGlobe,
  FaProjectDiagram,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';
import hero from '../assets/hero_facade.png';
import { Link } from "react-router-dom";
import '../styles/Hero.css';

const HERO_PHONE_WHATSAPP = "917397779764";
const HERO_WHATSAPP_TEXT =
  "Hello! Welcome to iCity Co-Working Space — we're glad you reached out. How can we help you today?";

const Hero = () => {
  const [rating, setRating] = useState(4.8); // fallback
  const [totalReviews, setTotalReviews] = useState(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch("/api/rating");
        if (!res.ok) throw new Error(`API ${res.status}`);
        const data = await res.json();
        if (cancelled) return;

        if (typeof data?.rating === "number") setRating(data.rating);
        if (typeof data?.totalReviews === "number") setTotalReviews(data.totalReviews);
      } catch {
        // keep fallback rating
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const quickHighlights = useMemo(
    () => [
      {
        icon: <FaStar />,
        title: Number.isFinite(rating) ? rating.toFixed(1) : "4.8",
        text:
          typeof totalReviews === "number"
            ? `Google rating (${totalReviews} reviews)`
            : "Google and Justdial rating",
      },
      { icon: <FaUser />, title: "300+", text: "Active Members" },
      { icon: <FaGlobe />, title: "25+", text: "Global Clients" },
      { icon: <FaProjectDiagram />, title: "90+", text: "Conference Meetings" },
    ],
    [rating, totalReviews]
  );

  useEffect(() => {
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const cards = document.querySelectorAll(".hero-info-card");
    if (!cards.length) return;

    if (prefersReduced) {
      cards.forEach((c) => c.classList.add("in-view"));
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
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );

    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <nav
          className="hero-banner-social"
          aria-label="Quick social links"
        >
          <a
            href="https://www.facebook.com/share/1Nst9iNxJ2/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/icityinc.cbe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/icitycoworkingspace/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={`https://wa.me/${HERO_PHONE_WHATSAPP}?text=${encodeURIComponent(
              HERO_WHATSAPP_TEXT
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </nav>
      </section>

      <section className="hero-content-section">
        <Container>
          <div className="hero-content">
            <h1>
              <span className="hero-line">Reliable and Comfortable</span>
              <span className="hero-line hero-line-accent">Workspace designed for</span>
              <span className="hero-line">Modern professionals</span>
            </h1>
            <p>The Digital Workshop</p>
            <Link to="/workspaces">
              <Button className="hero-btn">
                Book Now
              </Button>
            </Link>

            <div className="hero-scroll-indicator" aria-hidden="true">
              <span />
            </div>
          </div>
        </Container>
      </section>

      <div className="hero-divider" aria-hidden="true" />

      <section className="hero-cards-section">
        <Container>
          <div className="hero-cards-header">
            <h2>Why Teams Choose iCity</h2>
            <p>Performance, trust, and workspace excellence at a glance.</p>
          </div>
          <Row className="g-4">
            {quickHighlights.map((item) => (
              <Col lg={3} md={6} key={item.title}>
                <article className="hero-info-card">
                  <div className="hero-info-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};
 
export default Hero;