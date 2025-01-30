"use client"
import { useAnimate } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

import NAVBAR from "./(components)/navbar/page";

export default function Home() {
  const [scope, animate] = useAnimate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex w-screen h-screen border-2 border-red-600" id="main-container">
      <div className="flex w-screen h-20 items-center justify-center" id="navbar-container">
        <NAVBAR />
      </div>
    </div>
  );
}
