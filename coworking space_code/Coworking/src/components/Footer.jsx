import React from "react";
import "../styles/Footer.css";

import img1 from "../assets/smartCardia.png";
import img2 from "../assets/Super.png";
import img3 from "../assets/saxeo.svg";
import img4 from "../assets/techno1.png";
import img5 from "../assets/Roots.png";
import img6 from "../assets/Zevan.png";
import img7 from "../assets/Anandrathi.png";
import img8 from "../assets/black_logo.png";

import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const PHONE_WHATSAPP = "917397779764";
const WHATSAPP_WELCOME_TEXT =
  "Hello! Welcome to iCity Co-Working Space — we're glad you reached out. How can we help you today?";

const Footer = () => {
  const whatsappHref = `https://wa.me/${PHONE_WHATSAPP}?text=${encodeURIComponent(
    WHATSAPP_WELCOME_TEXT
  )}`;
  return (
    <footer className="footer">
      <hr className="divider" />

      <div className="footer-content">
        <div className="footer-col footer-brand">
          <img src={img8} alt="iCity logo" loading="lazy" className="footer-logo" />
          <p className="muted">
            iCity Co-Working Space<br />
            09,Om Ganesh Nagar, Vadavalli<br />
            Coimbatore, India
          </p>
          <p className="highlight">Free Parking</p>

          {/* 🔗 Social Links */}
          <div className="footer-social">
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
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp iCity Co-Working Space"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="footer-col footer-links">
          <h4>Quick Links</h4>
          <ul className="plain-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/workspaces">Workspaces</Link></li>
            <li><Link to="/partnerships">Partnerships</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col footer-contact">
  <h4>Contact Us</h4>

  <p className="label">
    Phone :{" "}
    <a href={`tel:+${PHONE_WHATSAPP}`} className="muted">
      +91-73977 79764
    </a>
  </p>

  <p className="label">
    E-Mail :{" "}
    <a href="mailto:business@icityinc.in" className="muted">
      business@icityinc.in
    </a>
  </p>
</div>


        
      </div>

      <div className="footer-bottom">
        <p className="designed-by">
          Designed by <span className="brand">Icity CoWorking Space</span>.
        </p>
        <p className="copyright">
          ©icity CoWorking Space 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
