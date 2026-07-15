import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./styles/Contact.css";

export default function Contact() {
    const formRef = useRef();
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_563r6ai",   // replace with your EmailJS Service ID
                "template_m6gczjl", // replace with your EmailJS Template ID
                formRef.current,
                "pWjqu3sICwUYUp95M" // replace with your EmailJS Public Key
            )
            .then(
                () => {
                    setStatus("success");
                    formRef.current.reset();
                },
                (error) => {
                    console.error("EmailJS error:", error.text);
                    setStatus("Something went wrong. Please try again later.");
                }
            );
    };

    return (
<section className="contact-page">
  <div className="contact-banner"></div>

  <div className="contact-info-form">{/* responsive flex container */}
    {/* Left column: Info + Map */}
    <div className="ci-col">
      <div className="contact-info">
        <h2>Icity Co-Working Spaces</h2>

        <div className="ci-row">
          <i className="bi bi-geo-alt-fill ci-icon" aria-hidden="true"></i>
          <p className="ci-text">
            No. 09, Om Ganesh Nagar, 3rd Cross East,<br />
            Vadavalli, Coimbatore – 641041, India
          </p>
        </div>

        <div className="ci-row">
          <i className="bi bi-telephone-fill ci-icon" aria-hidden="true"></i>
          <p className="ci-text">
            <strong>Phone:</strong> <a href="tel:+917397779764">+91 73977 79764</a>
          </p>
        </div>

        <div className="ci-row">
          <i className="bi bi-envelope-fill ci-icon" aria-hidden="true"></i>
          <p className="ci-text">
            <strong>Email:</strong> <a href="mailto:business@icityinc.in">business@icityinc.in</a>
          </p>
        </div>
      </div>

      <div className="contact-map">
        <a
          className="map-overlay"
          href="https://maps.app.goo.gl/xLhj5U7i1LkEj4dm9"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open iCity Co-Working Spaces in Google Maps"
        />
        <iframe
          title="iCity Co-Working Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2021164451608!2d76.9049462740908!3d11.023457054590514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85f1d25389f75%3A0x9d93fcc49fcc15c6!2sIcity%20Inc%20-%20Best%20Shared%20Office%20Space%7C%20Co-working%20Space%20%7C%20Training%20Room%20%7C%20Meeting%20Room%20%7C%20Individual%20Cabins!5e0!3m2!1sen!2sin!4v1757354569202!5m2!1sen!2sin"
          width="100%"
          height="320"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>

    {/* Right column: Form */}
    <div className="cf-col">
      <div className="contact-form-wrapper">
        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input type="text" name="name" placeholder="Enter your full name..." required />
          </label>

          <label>
            Email Address
            <input type="email" name="email" placeholder="Enter your email address..." required />
          </label>

          <label>
            Phone Number
            <input type="tel" name="phone" placeholder="+91 00000 00000" required />
          </label>

          <label>
            Message
            <textarea name="message" placeholder="Enter your message..." rows="5" required />
          </label>

          <button type="submit" className="submit-btn">Submit Form →</button>

          {status === "success" && (
            <div className="success-popup">
              <div className="popup-content">
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. We’ll get back soon.</p>
                <button onClick={() => setStatus("")}>Close</button>
              </div>
            </div>
          )}

          {status && status !== "success" && <p className="form-status">{status}</p>}
        </form>
      </div>
    </div>
  </div>
</section>

    );
}
