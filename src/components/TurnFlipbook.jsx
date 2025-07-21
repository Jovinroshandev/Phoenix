import React, { useEffect, useRef, useState } from "react";
import cover from "../assets/book/cover.png";
import page1 from "../assets/book/page1.jpg";
import page2 from "../assets/book/page2.jpg";
import page3 from "../assets/book/page3.png";
import page4 from "../assets/book/page3.png";

export default function TurnFlipbook() {
  const bookRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const pages = [cover, page1, page2, page3, page4];

  // Preload all images
  useEffect(() => {
    const preloadImages = pages.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
        })
    );

    Promise.all(preloadImages).then(() => setIsLoaded(true));
  }, []);

  // Initialize Turn.js
  useEffect(() => {
    if (!isLoaded) return;

    const container = bookRef.current;

    container.innerHTML = pages
      .map(
        (src) =>
          `<div style="background-image: url('${src}'); background-size: cover; background-position: center;"></div>`
      )
      .join("");

    const $flipbook = window.$(container);

    $flipbook.turn({
      width: 500,
      height: 350,
      elevation: 20,
      gradients: true,
      duration: 600,
      acceleration: true,
      autoCenter: true,
      display: "double",
      showCover: true,
    });

    return () => {
      if ($flipbook?.data("turn")) {
        $flipbook.turn("destroy");
      }
    };
  }, [isLoaded]);

  // Flip left or right based on click position
  const handleClick = (e) => {
    const rect = bookRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const midpoint = rect.width / 2;

    const $flipbook = window.$(bookRef.current);
    if (!$flipbook?.turn) return;

    if (clickX < midpoint) {
      $flipbook.turn("previous");
    } else {
      $flipbook.turn("next");
    }
  };

  return (
    <div className="flipbook-wrapper" style={{ textAlign: "center" }}>
      {!isLoaded && <div className="loader">Loading book...</div>}
      <div
        ref={bookRef}
        onClick={handleClick}
        className={`flipbook ${isLoaded ? "visible" : "invisible"}`}
        style={{ cursor: "pointer" }}
      ></div>
    </div>
  );
}
