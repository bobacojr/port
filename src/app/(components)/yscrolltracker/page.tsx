"use client"
import { useState, useEffect } from "react";

function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollY;
}

function TrackScrollY() {
  const scrollY = useScrollPosition();

  return (
    <div className="left-0 top-0 fixed border-2 border-red-600 z-50 bg-cyan-300">
      <p>Current scroll position: {scrollY}px</p>
    </div>
  );
}
 
export default TrackScrollY;