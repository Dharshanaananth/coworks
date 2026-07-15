import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../styles/ScrollToTop.css";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  

  return (
    <div className={`scroll-to-top ${visible ? "show" : ""}`} onClick={scrollToTop}>
      <FaArrowUp />
    </div>
  );
};

export default ScrollToTop;
