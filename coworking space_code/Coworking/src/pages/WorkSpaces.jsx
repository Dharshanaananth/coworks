import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../pages/styles/WorkSpaces.css";
import GetPlans from "../pages/Getplans";

/* Import workspace images */
import ws1 from "../assets/IndividualCabins1.webp";
import ws2 from "../assets/IndividualCabins2.webp";
import ws3 from "../assets/shared1.webp";
import ws4 from "../assets/ks 1.webp";
import ws5 from "../assets/ks 2.webp";
import ws6 from "../assets/KalamSpace1.webp";
import ws7 from "../assets/KalamSpace2.webp";
import ws8 from "../assets/KalamSpace3.webp";
import ws9 from "../assets/KalamSpace4.webp";
import ws10 from "../assets/TataSpace1.webp";
import ws11 from "../assets/TataSpace2.webp";
import ws12 from "../assets/TataSpace3.webp";
import ws13 from "../assets/TataSpace4.webp";
import ws14 from "../assets/TataSpace5.webp";
import ws15 from "../assets/SteveJobs1.webp";
import ws16 from "../assets/SteveJobs2.webp";
import ws17 from "../assets/SteveJobs3.webp";

import hero1 from "../assets/Coworks.webp";
import hero2 from "../assets/TataSpace3.webp";
import hero3 from "../assets/SteveJobs1.webp";
import hero4 from "../assets/IndividualCabins.webp";
import hero5 from "../assets/Cafe.webp";

/* Data model */
const WORKSPACE_TYPES = [
  { id: "cabins", name: "Private Cabins", imgs: [ws1, ws2] },
  { id: "shared", name: "Kalam space", imgs: [ws3, ws4, ws5] },
  { id: "private-office", name: "Steve Jobs Office", imgs: [ws6, ws7, ws8, ws9] },
  { id: "conference", name: "Ratan Tata Conference Hall", imgs: [ws10, ws11, ws12, ws13, ws14] },
  { id: "executive", name: "Elon musk Office", imgs: [ws15, ws16, ws17] },
];

/* Amenity list */
const AMENITIES = [
  { title: "High-speed Internet", icon: "bi-wifi" },
  { title: "Power backup", icon: "bi-battery-charging" },
  { title: "Pantry/Cafeteria", icon: "bi-cup-hot" },
  { title: "Printing/Scanning", icon: "bi-printer" },
  { title: "Housekeeping", icon: "bi-stars" },
  { title: "Mail handling", icon: "bi-envelope-open" },
  { title: "Open Parking", icon: "bi-p-circle" },
  { title: "Community Events", icon: "bi-people" },
];

/* IntersectionObserver */
function useRevealOnScroll(selector, inClass = "in-view") {
  useEffect(() => {
    const nodes = document.querySelectorAll(selector);
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      nodes.forEach((n) => n.classList.add(inClass));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(inClass);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [selector, inClass]);
}

/* Carousel Component */
function Carousel({ images, name, setLightbox }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="ws-carousel">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${name} view ${i + 1}`}
          className={`ws-card__img ${i === index ? "is-active" : ""}`}
          onClick={() => setLightbox(img)}
        />
      ))}

      <div className="ws-carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Show ${name} image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function WorkSpaces() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [lightbox, setLightbox] = useState(null);
  const [selectedWorkspace, setSelectedWorkspace] = useState(null);

  const heroImages = [hero1, hero2, hero3, hero4, hero5];
  const [current, setCurrent] = useState(0);

  useRevealOnScroll(".ws-card");
  useRevealOnScroll(".ws-section");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const items = useMemo(() => WORKSPACE_TYPES, []);

  useEffect(() => {
    const openId = searchParams.get("workspace");
    if (!openId) return;
    const ws = WORKSPACE_TYPES.find((w) => w.id === openId);
    if (!ws) return;
    setSelectedWorkspace(ws);
    requestAnimationFrame(() => {
      document.getElementById(`workspace-${openId}`)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  }, [searchParams]);

  const closePlansModal = () => {
    setSelectedWorkspace(null);
    if (searchParams.get("workspace")) {
      setSearchParams({}, { replace: true });
    }
  };

  return (
    <main className="workspaces-page">
      {/* HERO */}
      <section
        className="ws-hero"
        style={{ backgroundImage: `url(${heroImages[current]})` }}
      >
        <div className="ws-hero__overlay" />
        <div className="ws-hero__inner container">
          <h1 className="ws-hero__title">
            Explore <span className="accent">WorkSpaces</span>
          </h1>

          <p className="ws-hero__tagline">
            <span className="ws-hero__tagline-kicker">Community First</span>
            <span className="ws-hero__tagline-main">
              Empowering entrepreneurs, startups, freelancers & teams ⟡
            </span>
            <span className="ws-hero__tagline-sub">
              Professional workspaces that scale with your ideas and growth.
            </span>
          </p>

          {/* ONLY BOOK A TOUR BUTTON */}
          <div className="ws-hero__actions">
            <a
              href="#plans"
              className="ws-btn ws-btn--ghost"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("plans");
                if (element)
                  element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book a Tour
            </a>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section id="plans" className="ws-grid container ws-section">
        <div className="row g-4">
          {items.map((x) => (
            <div
              key={x.id}
              id={`workspace-${x.id}`}
              className="col-md-6 col-lg-4"
            >
              <article className="ws-card">
                <figure className="ws-card__media">
                  <Carousel
                    images={x.imgs}
                    name={x.name}
                    setLightbox={setLightbox}
                  />
                  <button
                    className="ws-media-zoom"
                    onClick={() => setLightbox(x.imgs[0])}
                    aria-label={`Zoom ${x.name} image`}
                  >
                    <i className="bi bi-arrows-fullscreen"></i>
                  </button>
                </figure>

                <div className="ws-card__body">
                  <h3 className="ws-card__title">{x.name}</h3>
                  {x.id === "cabins" && (
                    <p className="ws-card__subtitle">Individual focused workspaces</p>
                  )}
                  {x.id === "shared" && (
                    <p className="ws-card__subtitle">Open collaboration area</p>
                  )}
                   {x.id === "private-office" && (
                    <p className="ws-card__subtitle">Private team office</p>
                  )}
                  {x.id === "conference" && (
                    <p className="ws-card__subtitle">Conference and training hall</p>
                  )}
                  {x.id === "executive" && (
                    <p className="ws-card__subtitle">Premium executive office space</p>
                  )}
                  
                  <div className="ws-card__cta">
                    <button
                      className="ws-btn ws-btn--outline"
                      onClick={() => setSelectedWorkspace(x)}
                    >
                      Get Plans
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>

      {/* AMENITIES */}
      <section className="ws-amenities container ws-section">
        <h2 className="ws-subheading">
        Your all-in-one workspace solution
        </h2>

        <ul className="ws-amenity-grid">
          {AMENITIES.map((a) => (
            <li key={a.title} className="ws-amenity-card">
              <div className="ws-amenity-icon" aria-hidden="true">
                <i className={`bi ${a.icon}`}></i>
              </div>
              <span className="ws-amenity-title">{a.title}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="ws-lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="" />
          <button
            className="ws-lightbox__close"
            onClick={() => setLightbox(null)}
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
      )}

      {/* GetPlans Modal */}
      <GetPlans
        show={!!selectedWorkspace}
        onClose={closePlansModal}
        workspace={selectedWorkspace}
      />
    </main>
  );
}
