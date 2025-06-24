import React, { useEffect, useState } from "react";
import "./PhotoCarousel.css";

// Add your image paths here (local or URL-based)
const photos = [
  "/college1.webp",
  "/college2.webp",
  "/college3.webp",
  "/college4.webp",
  "/college5.webp",
  "/college6.webp",
  "/college7.webp",
];

const PhotoCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // 5000ms = 5s
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {photos.map((photo, index) => (
            <div className="carousel-slide" key={index}>
              <img loading="lazy" src={photo} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
        <button className="carousel-btn prev" onClick={prevSlide}>
          ‹
        </button>
        <button className="carousel-btn next" onClick={nextSlide}>
          ›
        </button>
      </div>
      <div className="carousel-dots">
        {photos.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active-dot" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
