import { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "../styles/Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      text: `We hereby place on record our formal appreciation of iCity Co-Working Space for providing a highly professional, well-governed, and operationally efficient working environment.

The facility demonstrates a high standard of infrastructure readiness, reliability, and workplace management, which significantly contributes to sustained operational continuity. The administrative and support personnel exhibit consistent professionalism, responsiveness, and service orientation, thereby ensuring seamless execution of day-to-day business functions.

In our assessment, the facility meets and supports the operational requirements of healthcare and technology-driven organizations.`,
      author: "MD, SmartCardia",
    },
    {
      text: `We’ve had a great experience with iCity Coworking Space.
       The environment is professional, well-maintained, and very comfortable for daily operations.
       
       The team is supportive, and the overall setup has helped us stay productive and focused. 
       
       It’s a reliable and convenient workspace, and we’re happy with the services provided.`,
      author: "Joint MD, SAXEO",
    },
    {
      text: `Perfect ambience and friendly staffs. When I was searching for office space to setup my startup, I discovered icity inc. Their exceptional support during the registration process impressed me greatly. I recommend iCity to entrepreneurs, startups, and freelancers alike. With them, you will experience the professionalism and amenities of a corporate company while enjoying the flexibility and colorful atmosphere :-)`,
      author: "Founder, SAXEO",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">VOICE OF CUSTOMERS</h2>

      <div className="testimonial-slider">
        <div
          className="testimonial-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <span className="quote-badge">
                <FaQuoteLeft className="quote-icon" />
              </span>
              <p className="testimonial-text">"{t.text}"</p>
              <p className="author">- {t.author}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={i === currentIndex ? "active" : ""}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
