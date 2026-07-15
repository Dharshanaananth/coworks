import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll on route change
    });
  }, [pathname]);

  return null;
};

export default ScrollToTopOnRouteChange;
