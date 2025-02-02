"use client"
import { useAnimate, motion, useTransform, useScroll } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import NAVBAR from "./(components)/navbar/page";

export default function Home() {
  const [scope, animate] = useAnimate();
  const cube = useRef(null);
  const { scrollX, scrollY } = useScroll();

  const bigWordVariant1 = {
    initial: {
      x: '-100%',
    },
    animate: (i: number) =>  ({
      x: 0,
      transition: {
        duration: 0.6 * i,
        ease: "easeOut",
      },
    }),
  };

  const bigWordVariant2 = {
    initial: {
      x: '300%',
    },
    animate: (i: number) =>  ({
      x: 0,
      transition: {
        duration: 0.6 * i,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="flex flex-col max-w-screen min-h-screen overflow-x-hidden" id="main-container">
      <div className="flex w-full h-20 items-center justify-center" id="navbar-container">
        <NAVBAR />
      </div>
      <div className="flex flex-col w-full h-screen">
        <div className="flex flex-row">
          <div className="ml-2 flex w-3/4 flex-col">
            <motion.span className="sageworld text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-myteal" variants={bigWordVariant1} initial='initial' animate='animate' custom={0.5}>CREATOR</motion.span>
            <motion.span className="thernaly text-4xl sm:text-5xl md:text-6xl lg:text-7xl" variants={bigWordVariant1} initial='initial' animate='animate' custom={1}>COMPUTER SCIENTIST</motion.span>
            <motion.span className="thernaly text-7xl sm:text-8xl md:text-9xl lg:text-10xl text-myteal" variants={bigWordVariant1} initial='initial' animate='animate' custom={1.5}>INNOVATOR</motion.span>
          </div>
          <div className="mr-2 hidden sm:flex w-1/4 flex-col items-end ">
              

          </div>
        </div>

        <div className="flex flex-col items-end mr-2 pt-3">
          <motion.span className="sageworld text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-myteal" variants={bigWordVariant2} initial='initial' animate='animate' custom={2}>MUSICIAN</motion.span>
          <motion.span className="thernaly text-5xl sm:text-7xl md:text-8xl lg:text-9xl" variants={bigWordVariant2} initial='initial' animate='animate' custom={2.5}>DIGITAL ARTIST</motion.span>
          <motion.span className="thernaly text-6xl sm:text-8xl md:text-9xl lg:text-11xl text-myteal" variants={bigWordVariant2} initial='initial' animate='animate' custom={3}>PROGRAMMER</motion.span>
        </div>
      </div>
      <div className="flex flex-col w-full h-screen pl-3">
        HELLO
      </div>
      <div className="flex flex-col w-full h-screen pl-3">
        Hello
      </div>
    </div>
  );
}
