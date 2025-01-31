"use client"
import { useAnimate, motion, useTransform, useScroll } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import NAVBAR from "./(components)/navbar/page";

export default function Home() {
  const [scope, animate] = useAnimate();
  const cube = useRef(null);
  const { scrollX, scrollY } = useScroll();  

  return (
    <div className="flex flex-col max-w-screen min-h-screen" id="main-container">
      <div className="flex w-full h-20 items-center justify-center" id="navbar-container">
        <NAVBAR />
      </div>
      <div className="flex flex-col w-full h-screen pl-3">
        Hello
      </div>
      <div className="flex flex-col w-full h-screen pl-3">
        Hello
      </div>
      <div className="flex flex-col w-full h-screen pl-3">
        Hello
      </div>
    </div>
  );
}
