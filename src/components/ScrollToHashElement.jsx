import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHashOnLoad() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return null;
}

export default ScrollToHashOnLoad;
