"use client"
import { useAnimate, motion, useTransform, useScroll, useMotionValueEvent } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import NAVBAR from "./(components)/navbar/page";
import Link from "next/link";
import SCROLLYTRACKER from "./(components)/yscrolltracker/page";
import ABOUTLANDING from "./(components)/aboutlanding/page";
import PROJECTLANDING from "./(components)/projectlanding/page";
import WORKLANDING from "./(components)/worklanding/page";
import * as variants from "./(components)/animationvariants/page";

export default function Home() {

  return (
    <div className="flex flex-col max-w-screen min-h-screen overflow-x-hidden" id="main-container">
      <SCROLLYTRACKER/>
      <motion.div className="flex w-full h-20 xl:h-24 items-center justify-center" id="navbar-container" variants={variants.navbarAnimationVariant} initial='initial' animate='animate'>
        <NAVBAR/>
      </motion.div>
      <ABOUTLANDING/>
      <PROJECTLANDING/>
      <WORKLANDING/>
      <div className="flex flex-col w-full h-screen ml-3">
        Contact
      </div>

    </div>
  );
}
