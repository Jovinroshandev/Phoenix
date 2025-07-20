import { useEffect, useState } from "react";

const useScrollZone = () => {
  const [zone, setZone] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;
      const maxScroll = docHeight - windowHeight;

      const scrollRatio = scrollY / maxScroll;

      let newZone = "";

      if (scrollRatio <= 0.25) {
        newZone = "top";
      } else if (scrollRatio > 0.25 && scrollRatio <= 0.40) {
        newZone = "top-mid";
      } else {
        newZone = "top-bottom";
      }

      if (zone !== newZone) {
        setZone(newZone);
        // console.log("Scroll Zone:", newZone);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [zone]);

  return zone;
};

export default useScrollZone;
