"use client"
import { useAnimate, motion, useTransform, useScroll, useMotionValueEvent } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import NAVBAR from "./(components)/navbar/page";
import Link from "next/link";
import VIDEO from "./(components)/video/page";
import MOVINGTEXT from "./(components)/movingtext/page";
import SCROLLYTRACKER from "./(components)/yscrolltracker/page";
import * as variants from "./animationvariants/page";

export default function Home() {
  const hasProjectHighlightAnimated = useScrollAnimation(50);
  const hasProjectCardAnimated = useScrollAnimation(100);
  const hasMovingTextAnimated = useScrollAnimation(260);

  function useScrollAnimation(threshold = 50) {
    const { scrollY } = useScroll();
    const [hasAnimated, setHasAnimated] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
      if (latest > threshold && !hasAnimated)  {
        setHasAnimated(true);
      }
    });
    return hasAnimated;
  }

  return (
    <div className="flex flex-col max-w-screen min-h-screen overflow-x-hidden" id="main-container">

      <SCROLLYTRACKER />

      <motion.div className="flex w-full h-20 xl:h-24 items-center justify-center" id="navbar-container" variants={variants.navbarAnimationVariant} initial='initial' animate='animate'>
        <NAVBAR />
      </motion.div>

      <div className="flex flex-col w-full overflow-x-hidden">
        <div className="flex flex-row">
          <div className="ml-2 flex w-full h-full flex-col xl:ml-14 3xl:ml-20">
            <motion.span className="sageworld text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8.5xl text-myteal" variants={variants.bigWordVariant1} initial='initial' animate='animate' custom={0.5}>CREATOR</motion.span>
            <motion.span className="thernaly text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7.5xl" variants={variants.bigWordVariant1} initial='initial' animate='animate' custom={1}>COMPUTER SCIENTIST</motion.span>
            <motion.span className="thernaly text-7xl sm:text-8xl md:text-9xl lg:text-10xl xl:text-11xl text-myteal" variants={variants.bigWordVariant1} initial='initial' animate='animate' custom={1.5}>INNOVATOR</motion.span>
          </div>
        </div>
        <div className="flex flex-col items-end mt-3 mb-3 mr-2 xl:mr-14 3xl:mr-20">
          <motion.span className="sageworld text-5xl sm:text-7xl md:text-8xl lg:text-8.5xl xl:text-9xl text-myteal" variants={variants.bigWordVariant2} initial='initial' animate='animate' custom={2}>MUSICIAN</motion.span>
          <motion.span className="thernaly text-5xl sm:text-7xl md:text-8xl lg:text-8.5xl xl:text-9xl" variants={variants.bigWordVariant2} initial='initial' animate='animate' custom={2.5}>DIGITAL ARTIST</motion.span>
          <motion.span className="thernaly text-6xl sm:text-8xl md:text-9xl lg:text-10xl xl:text-11.25xl text-myteal" variants={variants.bigWordVariant2} initial='initial' animate='animate' custom={3}>PROGRAMMER</motion.span>
        </div>
        <motion.div variants={variants.textSlideVariant1} initial="initial" animate="animate" className="">
          <MOVINGTEXT/>
        </motion.div>
      </div>

      <div className="flex flex-col w-full h-full">
        <motion.div className="flex flex-col w-full justify-center items-center mb-3">
          <div className="flex w-full h-16 justify-center items-center">
            <motion.span className="flex h-full w-full items-center justify-center text-4xl thernaly text-black" variants={variants.projectHighlightVariant} initial="initial" animate={hasProjectHighlightAnimated ? 'animate' : 'initial'}>
              Project Highlights
            </motion.span>
          </div>

          <div className="flex flex-col justify-center items-center gap-8 2xl:flex-row lg:gap-16 mb-3 ">
            <div className="flex flex-col sm:flex-row gap-8 lg:gap-16">
              <motion.div className="imagesize md:!h-[18em] md:!w-[22em] lg:!h-[22em] lg:!w-[28em] xl:!h-[24] xl:!w-[32em]" 
                variants={variants.projectCardVariant} 
                initial='initial' 
                animate={hasProjectCardAnimated ? 'animate' : 'initial'}
                >
                <img src={"./prodcon.png"} className="projectimage md:!h-[18em] md:!w-[22em] lg:!h-[22em] lg:!w-[28em] xl:!h-[24] xl:!w-[32em]"/>
                <h1 className="projecttitle !w-[17em]">Producer/Consumer CPU Simulation</h1>
              </motion.div>
              <motion.div className="imagesize md:!h-[18em] md:!w-[22em] lg:!h-[22em] lg:!w-[28em]" 
                variants={variants.projectCardVariant} 
                initial='initial' 
                animate={hasProjectCardAnimated ? 'animate' : 'initial'}
                >
                <img src={"./TortilleriaPhoto.png"} className="projectimage md:!h-[18em] md:!w-[22em] lg:!h-[22em] lg:!w-[28em]"/>
                <h1 className="projecttitle !w-[15em]">Tortilleria Y Taqueria Mi Tierra</h1>
              </motion.div>
            </div>
            <motion.div className="imagesize md:!h-[18em] md:!w-[22em] lg:!h-[22em] lg:!w-[28em]" 
              variants={variants.projectCardVariant} 
              initial='initial' 
              animate={hasProjectCardAnimated ? 'animate' : 'initial'}
              >
              <VIDEO />
              <h1 className="projecttitle">ThreeJS & WebGL Scene</h1>
            </motion.div>
          </div>

        </motion.div>
        <motion.div variants={variants.textSlideVariant2} initial="initial" animate={hasMovingTextAnimated ? "animate" : "initial"}>
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
