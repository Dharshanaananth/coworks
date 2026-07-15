import React from "react";
import "../styles/Bottom.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Bottom = () => {
  const managerNumber = "918098431431"; // Replace with your manager's number
  const message = "Hi, I would like to know more about Icity Co-Works";

  return (
    <section className="bottom-page">
      {/* Banner */}
      <div className="bottom-banner">

      </div>

      {/* Content */}
      <div className="bottom-content">
        <h2>Say Hello</h2>
        <p>
         A Phone call away to start your dream office! <br />
          We strongly believe in{" "}
          <span className="bottom-king-emphasis">"CUSTOMER IS THE KING"</span>.
        </p>
      </div>

      {/* Actions */}
      <div className="bottom-actions">
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${managerNumber}?text=${encodeURIComponent(
            message
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bottom-chat-btn"
        >
          Let's Chat
        </a>

        {/* Phone Button */}
        <div className="bottom-phone-btn">
          <a href="tel:+917397779764" className="phone-link">
            <span className="bottom-phone-icon" aria-hidden="true">
              <i className="bi bi-telephone-fill"></i>
            </span>
            <span>73977 79764</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Bottom;
