import React, { useEffect, useRef, useState } from "react";
import cover from "../assets/book/cover.png";
import page1 from "../assets/book/page1.jpg";
import page2 from "../assets/book/page2.jpg";

export default function TurnFlipbookMobile() {
  const bookRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const pages = [cover, page1, page2];

  // Preload images before initializing Turn.js
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

  // Initialize Turn.js after images are loaded
  useEffect(() => {
    if (!isLoaded) return;

    const container = bookRef.current;

    container.innerHTML = `
      <div style="background-image: url('${cover}'); background-size: cover; background-position: center;"></div>
      <div style="background-image: url('${page1}'); background-size: cover; background-position: center;"></div>
      <div style="background-image: url('${page2}'); background-size: cover; background-position: center;"></div>
    `;

    const $flipbook = window.$(container);

    $flipbook.turn({
      width: 300,
      height: 230,
      elevation: 20,
      gradients: false,
      duration: 600,
      acceleration: true,
      autoCenter: false, // Prevent layout shake
      display: "double",
      showCover: true,
      when: {
        turned: (e, page) => {
          setIsOpen(page !== 1);
        }
      }
    });

    return () => {
      if ($flipbook?.data("turn")) {
        $flipbook.turn("destroy");
      }
    };
  }, [isLoaded]);

  const toggleBook = () => {
    const $flipbook = window.$(bookRef.current);
    if ($flipbook?.turn) {
      $flipbook.turn("page", isOpen ? 1 : 2);
    }
  };

  return (
    <div className="flipbook-wrapper">
      {!isLoaded && <div className="loader">Loading book...</div>}
        <div
        ref={bookRef}
        onClick={toggleBook}
        className={`flipbook ${isLoaded ? "visible" : "invisible"}`}
      ></div>
    </div>
  );
}
