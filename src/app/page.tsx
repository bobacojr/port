"use client"
import { useAnimate, motion, useTransform, useScroll, useMotionValueEvent } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import NAVBAR from "./(components)/navbar/page";
import Link from "next/link";
import VIDEO from "./(components)/video/page";
import MOVINGTEXT from "./(components)/movingtext/page";
import SCROLLYTRACKER from "./(components)/yscrolltracker/page";

export default function Home() {
  const [scope, animate] = useAnimate();
  const { scrollX, scrollY } = useScroll();
  const [hasAnimated, setHasAnimated] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500 && !hasAnimated)  {
      setHasAnimated(true);
    }
  });

  const textSlideVariant1 = {
    initial: {
      x: "300%",
    },
    animate: {
      x: '0%',
      transition: {
        duration: 2,
        ease: 'easeInOut',
      }
    }
  }

  const textSlideVariant2 = {
    initial: {
      x: "-100%",
    },
    animate: {
      x: '0%',
      transition: {
        duration: 2,
        ease: 'easeInOut',
      }
    }
  }

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
      <SCROLLYTRACKER />
      <div className="flex w-full h-20 xl:h-24 items-center justify-center" id="navbar-container">
        <NAVBAR />
      </div>
      <div className="flex flex-col w-full h-full overflow-x-hidden">
        <div className="flex flex-row">
          <div className="ml-2 flex w-full flex-col xl:ml-11">
            <motion.span className="sageworld text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-myteal" variants={bigWordVariant1} initial='initial' animate='animate' custom={0.5}>CREATOR</motion.span>
            <motion.span className="thernaly text-4xl sm:text-5xl md:text-6xl lg:text-7xl" variants={bigWordVariant1} initial='initial' animate='animate' custom={1}>COMPUTER SCIENTIST</motion.span>
            <motion.span className="thernaly text-7xl sm:text-8xl md:text-9xl lg:text-10xl text-myteal" variants={bigWordVariant1} initial='initial' animate='animate' custom={1.5}>INNOVATOR</motion.span>
          </div>
        </div>
        <div className="flex flex-col items-end mr-2 xl:mr-11">
          <motion.span className="sageworld text-5xl sm:text-6xl md:text-8xl lg:text-8.5xl text-myteal" variants={bigWordVariant2} initial='initial' animate='animate' custom={2}>MUSICIAN</motion.span>
          <motion.span className="thernaly text-5xl sm:text-7xl md:text-8xl lg:text-8.5xl" variants={bigWordVariant2} initial='initial' animate='animate' custom={2.5}>DIGITAL ARTIST</motion.span>
          <motion.span className="thernaly text-6xl sm:text-8xl md:text-9xl lg:text-10xl text-myteal" variants={bigWordVariant2} initial='initial' animate='animate' custom={3}>PROGRAMMER</motion.span>
        </div>
        <motion.div variants={textSlideVariant1} initial="initial" animate="animate">
          <MOVINGTEXT/>
        </motion.div>
      </div>
      <div className="flex flex-col w-full h-full">
        <motion.div className="flex flex-col w-full justify-center items-center gap-6">
          <div className="flex w-full h-16 pt-4 justify-center items-center">
            <motion.span className="text-4xl thernaly text-black">
              Project Highlights
            </motion.span>
          </div>

          <div className="flex flex-col justify-center items-center gap-6 lg:flex-row">
            <div className="imagesize sm:!w-[30em] sm:!h-[28em] border-2 border-red-600">
              <img src={"./TortilleriaPhoto.png"} className="projectimage"/>
              <h1 className="projecttitle !w-[14em]">Tortilleria Y Taqueria Mi Tierra</h1>
            </div>
            <div className="imagesize sm:!w-[36em] sm:h-[28em] border-2 border-red-600">
              <VIDEO />
              <h1 className="projecttitle">ThreeJS & WebGL Scene</h1>
            </div>
          </div>
          
        </motion.div>
        <motion.div variants={textSlideVariant1} initial="initial" animate="animate" className="mt-10">
          <MOVINGTEXT href="/projects" text="CLICK TO SEE MORE PROJECTS" initialX="-100%" animateX="0%" />
        </motion.div>
      </div>
        <div className="flex flex-col w-full h-screen">
          Work (Target, E2open, Gordon Food Service, Self Employed (websites))
        </div>
      <div className="flex flex-col w-full h-screen ml-3">
        Contact
      </div>
    </div>
  );
}
