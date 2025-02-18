"use client"
import { motion, AnimatePresence } from "motion/react";
import NAVBAR from "./(components)/navbar/page";
import ABOUTLANDING from "./(components)/landings/aboutlanding/page";
import PROJECTLANDING from "./(components)/landings/projectlanding/page";
import WORKLANDING from "./(components)/landings/worklanding/page";
import EMAIL from "./(components)/email/page";
import * as variants from "./(components)/animations/animationvariants";

export default function Home() {

  return (
    <AnimatePresence mode="wait">
      <motion.div
        id='home'
        key="projects-page" // Unique key for the page
        className="flex flex-col w-full h-full overflow-x-hidden"
        initial={{ opacity: 0, y: 50 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Animate to this state
        exit={{ opacity: 0, y: -50 }} // Exit animation state
        transition={{ duration: 0.5 }} // Transition duration
        >
        <div className="flex flex-col max-w-screen min-h-screen overflow-x-hidden" id="main-container">
          <motion.div className="flex w-full h-20 xl:h-24 items-center justify-center" id="navbar-container" variants={variants.navbarAnimationVariant} initial='initial' animate='animate'>
            <NAVBAR/>
          </motion.div>
          <ABOUTLANDING/>
          <PROJECTLANDING/>
          <WORKLANDING/>
          <EMAIL />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
