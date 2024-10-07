import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Add a small delay to ensure everything is rendered before scrolling
    const timer = setTimeout(() => {
      window.scrollTo(0, 0); 
    }, 1); 

    return () => clearTimeout(timer); 
  }, [location]);

  return null;
};

export default ScrollToTop;
