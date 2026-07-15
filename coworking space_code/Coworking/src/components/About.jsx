import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/About.css";

import { FaWifi } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { MdOutlineChair } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { TbClock24, TbBriefcase2, TbUsersGroup } from "react-icons/tb";


const About = () => {
  const highlights = [
    {
      icon: <FaRegCalendarCheck />,
      title: "Flexible Plans",
      desc: "Choose daily, monthly, or custom plans that match your workflow.",
    },
    {
      icon: <FaWifi />,
      title: "High-Speed Internet",
      desc: "Reliable connectivity designed for uninterrupted productivity.",
    },
    {
      icon: <MdOutlineChair />,
      title: "Modern Interiors",
      desc: "A premium, ergonomic setup that keeps your team comfortable.",
    },
    {
      icon: <HiOutlineUsers />,
      title: "Community Events",
      desc: "Meet, collaborate, and grow through curated networking sessions.",
    },
    {
      icon: <TbClock24 />,
      title: "24/7 Access",
      desc: "Work anytime with secure round-the-clock access.",
    },
    {
      icon: <TbUsersGroup />,
      title: "Meeting Rooms",
      desc: "Fully equipped spaces for productive discussions.",
    },
    {
      icon: <TbBriefcase2 />,
      title: "Dedicated Desks",
      desc: "Your own workspace in a collaborative environment.",
    },
  ];

  const runningHighlights = [...highlights, ...highlights];


  return (
    <section className="about-section">
      <Container>
        <div className="about-head">
          <h2 className="about-title">About Icity Co-Working</h2>
          <p className="about-desc">
            "Icity Co-Working"is a premium coworking space designed for flexibility,
            focus, and community—helping modern professionals and teams do their best work.
          </p>
        </div>

        <div className="about-carousel-wrap">
          <div
            className="about-grid"
            role="list"
            aria-label="About highlights"
          >
            {runningHighlights.map((h, i) => (
              <article
                className="about-card"
                role="listitem"
                key={`${h.title}-${i}`}
                aria-hidden={i >= highlights.length}
              >
                <div className="about-card__icon" aria-hidden="true">
                  {h.icon}
                </div>
                <h3 className="about-card__title">{h.title}</h3>
                <p className="about-card__desc">{h.desc}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="about-home-cta text-center">
          <Button as={Link} to="/about" className="read-more-btn">
            READ MORE
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default About;
