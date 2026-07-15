import React from "react";
import "../styles/Services.css";
import { Link } from "react-router-dom";
import { FaDoorOpen, FaRegKeyboard, FaRegUser, FaRegHandshake } from "react-icons/fa6";
 
const SPACES = [
  {
    icon: <FaDoorOpen />,
    title: "Private Offices",
    desc: "Quiet, premium offices for teams who want privacy and focus.",
  },
  {
    icon: <FaRegKeyboard />,
    title: "Dedicated Desks",
    desc: "Your own desk setup with flexibility and a consistent routine.",
  },
  {
    icon: <FaRegUser />,
    title: "Hot Desks",
    desc: "Plug in and work anytime—ideal for hybrid and flexible schedules.",
  },
  {
    icon: <FaRegHandshake />,
    title: "Meeting Rooms",
    desc: "Modern rooms for client calls, team meetings, and collaboration.",
  },
];

const Servicess = () => (
  <section className="services-section" aria-label="Services and Spaces">
    <div className="icity-container">
      <header className="services-head">
        <h2 className="services-title">Services / Spaces</h2>
        <p className="services-subtitle">
          Minimal, corporate, and comfortable spaces built for modern professionals.
        </p>
      </header>

      <div className="services-grid" role="list">
        {SPACES.map((s) => (
          <article className="services-card" role="listitem" key={s.title}>
            <div className="services-icon" aria-hidden="true">
              {s.icon}
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>

      <div className="services-cta">
        <Link to="/workspaces" className="services-btn">
          Explore Workspaces
        </Link>
      </div>
    </div>
  </section>
);
 
export default Servicess;