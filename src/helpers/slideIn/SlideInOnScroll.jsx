import React, { useEffect, useRef, useState } from "react";
import "./slideIn.css";

const SlideInOnScroll = ({ fromLeft, children }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`slide-in-section ${fromLeft ? "left" : ""} ${
        isVisible ? "visible" : ""
      } `}
    >
      {children}
    </div>
  );
};

export default SlideInOnScroll;
