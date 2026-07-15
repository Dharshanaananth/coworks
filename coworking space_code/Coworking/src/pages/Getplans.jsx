import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Getplans.css";

const PLANS = {
  "Private Cabins": { day: "1,000+ GST", week: "3,500+ GST", month: "12,000+ GST" },
  "Kalam space": { day: "500+ GST", week: "2,000+ GST", month: "5,000+ GST" },
  "Steve Jobs Office": { day: "5,000+ GST", week: "20,000+ GST", month: "70,000+ GST" },
  "Ratan Tata Conference Hall": { day: "5,000+ GST", week: "20,000+ GST", month: "60,000+ GST" },
  "Elon musk Office": { day: "6,000+ GST", week: "25,000+ GST", month: "70,000+ GST" },
};


export default function GetPlans({ show, onClose, workspace }) {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate(); 

  // Close on Escape
  useEffect(() => {
    if (!show) return;
    const onEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [show, onClose]);

  // Auto carousel
  useEffect(() => {
    if (!show || !workspace?.imgs?.length) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % workspace.imgs.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [show, workspace?.imgs?.length]);

  if (!show || !workspace) return null;

  const plans = PLANS[workspace.name] || {};

  const handleBookNow = () => {
    navigate("/contact");  // ✅ Smooth client-side navigation
  };
  return (
    <div
      className="plans-overlay"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="plans-title"
    >
      <div
        className="plans-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="plans-close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ×
        </button>

        {/* Header carousel */}
        <div className="plans-carousel">
          {workspace.imgs.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${workspace.name} ${i + 1}`}
              className={i === index ? "active" : ""}
            />
          ))}
          <div className="carousel-dots">
            {workspace.imgs.map((_, i) => (
              <button
                key={i}
                className={i === index ? "active" : ""}
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Scrollable body */}
        <div className="plans-scroll" role="region" aria-label="Booking details">
          <div className="plans-content">
            <h2 id="plans-title">{workspace.name}</h2>
            <ul>
              <li><strong>Per Day:</strong> ₹{plans.day}</li>
              <li><strong>Per Week:</strong> ₹{plans.week}</li>
              <li><strong>Per Month:</strong> ₹{plans.month}</li>
            </ul>
            <button className="book-btn" onClick={handleBookNow}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
