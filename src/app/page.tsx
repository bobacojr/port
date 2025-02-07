"use client"
import { useAnimate, motion, useTransform, useScroll, useMotionValueEvent } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import PROJECTCARD from "./(components)/projectcard/page";
import NAVBAR from "./(components)/navbar/page";
import Link from "next/link";
import tortilla from "./public/TortilleriaPhoto.png";
import VIDEO from "./(components)/video/page";
import MOVINGTEXT from "./(components)/movingtext/page";
import SCROLLYTRACKER from "./(components)/yscrolltracker/page";

export default function Home() {
  const [scope, animate] = useAnimate();
  const cube = useRef(null);
  const { scrollX, scrollY } = useScroll();
  const controls = useAnimate();
  const [hasAnimated, setHasAnimated] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500 && !hasAnimated)  {
      setHasAnimated(true);
    }
  });

  const xPosition = useTransform(scrollY, [0, 1000], ["-100%", "0%"]);

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

  const projects = [
    { title: "Project 1", description: "Description 1", image: "image1" },
    { title: "Project 2", description: "Description 2", image: "image2" },
    { title: "Project 3", description: "Description 3", image: "image3" },
    { title: "Project 4", description: "Description 4", image: "image4" },
    { title: "Project 1", description: "Description 1", image: "image1" },
    { title: "Project 2", description: "Description 2", image: "image2" },
  ];

  return (
    <div className="flex flex-col max-w-screen min-h-screen overflow-x-hidden" id="main-container">
      <SCROLLYTRACKER />
      <div className="flex w-full h-20 xl:h-24 items-center justify-center" id="navbar-container">
        <NAVBAR />
      </div>
      <div className="flex flex-col w-full h-full overflow-x-hidden">
        <div className="flex flex-row">
          <div className="ml-2 flex w-3/4 flex-col xl:ml-20">
            <motion.span className="sageworld text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl text-myteal" variants={bigWordVariant1} initial='initial' animate='animate' custom={0.5}>CREATOR</motion.span>
            <motion.span className="thernaly text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8.5xl" variants={bigWordVariant1} initial='initial' animate='animate' custom={1}>COMPUTER SCIENTIST</motion.span>
            <motion.span className="thernaly text-7xl sm:text-8xl md:text-9xl lg:text-10xl xl:text-13xl text-myteal 2xl:text-15xl" variants={bigWordVariant1} initial='initial' animate='animate' custom={1.5}>INNOVATOR</motion.span>
          </div>
        </div>

        <div className="flex flex-col items-end mr-2 pt-3 xl:mr-20">
          <motion.span className="sageworld text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-10xl 2xl:text-12xl text-myteal" variants={bigWordVariant2} initial='initial' animate='animate' custom={2}>MUSICIAN</motion.span>
          <motion.span className="thernaly text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl 2xl:text-12xl" variants={bigWordVariant2} initial='initial' animate='animate' custom={2.5}>DIGITAL ARTIST</motion.span>
          <motion.span className="thernaly text-6xl sm:text-8xl md:text-9xl lg:text-11xl xl:text-13xl text-myteal 2xl:text-15xl" variants={bigWordVariant2} initial='initial' animate='animate' custom={3}>PROGRAMMER</motion.span>
        </div>
        <motion.div variants={textSlideVariant1} initial="initial" animate="animate">
          <MOVINGTEXT/>
        </motion.div>
        
      </div>
      <div className="flex flex-col w-full h-screen">
        <div className="flex w-full h-16 pt-4 justify-center items-center">
          Projects (1-3 max on this page)
        </div>
        <motion.div className="flex flex-col w-full justify-center items-center gap-10">
          <div className="imagesize">
            <img src={"./TortilleriaPhoto.png"} className="w-full h-full projectimage"/>
            <h1 className="flex">Tortilleria Y Taqueria Mi Tierra</h1>
          </div>
          <div className="imagesize">
            <VIDEO />
            <h1 className="flex">ThreeJS & WebGL Scene</h1>
          </div>
        </motion.div>
        <motion.div variants={textSlideVariant2} initial="initial" animate="animate">
          <MOVINGTEXT href="/projects" text="CLICK TO LEARN MORE - PROJECTS - CLICK TO LEARN MORE" initialX="-100%" animateX="0%" />
        </motion.div>
      </div>
        <div className="flex flex-col w-full h-screen ml-3">
          Work (Target, E2open, Gordon Food Service, Self Employed (websites))
        </div>
      <div className="flex flex-col w-full h-screen ml-3">
        Contact
      </div>
    </div>
  );
}
