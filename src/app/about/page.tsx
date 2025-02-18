"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import NAVBAR from "../(components)/navbar/page";
import * as variants from "../(components)/animations/animationvariants/page";
import CHICAGOSVG from "../(components)/svgs/chicagosvg/page";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const chiTitleRef = useRef(null);

  const [isNavbarComplete, setIsNavbarComplete] = useState(false);
  const [isTextComplete, setIsTextComplete] = useState(false);
  const chiMounted = useRef(false);
  const chiControls = useAnimation();

  const handleChiAnimation = async () => {
    if (!chiMounted.current) return;
    await chiControls.start({
      opacity: 1,
      transition: {
        duration: 1,
        easing: "easeInOut",
      },
    });
  };

  // Start SVG animation when both navbar and text animations are complete
  useEffect(() => {
    if (isNavbarComplete && isTextComplete) {
      chiMounted.current = true;
      handleChiAnimation();
    }
  }, [isNavbarComplete, isTextComplete, handleChiAnimation]);

  return (
    <AnimatePresence mode="wait">
        <motion.div
            key={"about-page"}
            className="flex flex-col w-full h-full overflow-x-hidden"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.8 }}
            >
            <motion.div
                className="flex w-full h-20 xl:h-24 items-center justify-center"
                id="navbar-container"
                variants={variants.navbarAnimationVariant}
                initial="initial"
                animate="animate"
                onAnimationComplete={() => setIsNavbarComplete(true)}
                >
                <NAVBAR />
            </motion.div>

            <motion.div
                ref={chiTitleRef}
                className="flex flex-col sm:items-center ml-3"
                initial={{ opacity: 0, x: '-100%' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                onAnimationComplete={() => setIsTextComplete(true)}
                >
                <motion.span className="sageworld ml-1 text-md md:text-xl lg:text-2xl xl:text-3xl font-semibold">
                    Born and raised in...
                </motion.span>
                <motion.span id="chi-title" className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-myteal">
                    Chicago
                </motion.span>
            </motion.div>

            <motion.div variants={variants.aboutVariant} animate={isNavbarComplete && isTextComplete? "animate" : "initial"} initial='initial' className="">
                <CHICAGOSVG beginAnimation={isNavbarComplete && isTextComplete} />
            </motion.div>
            <motion.div 
                variants={variants.aboutVariant1} 
                animate={isNavbarComplete && isTextComplete? "animate" : "initial"} 
                initial='initial' 
                className="flex w-full h-screen text-sm md:text-[1em] lg:text-lg xl:text-xl items-center flex-col bg-chiblack text-white pl-3 pb-24 pr-3">
                    <div className="flex flex-col xl:w-[1260px] justify-center items-center">
                        <motion.span>
                            Chicago is where I call home, and Michigan is where I studied for my bachelors in computer science at
                            Grand Valley State University. Throughout my education and free time I have worked with many different programming
                            languages such as Python, Java, JavaScript, TypeScript, C/C++/C#, HTML/CSS, SQL, and more.
                        </motion.span>
                        <br/>
                        <motion.span>
                            Growing up I was heavily involved with music where I played percussion instruments
                            in my schools jazz band, marching band, and concert band. I was also involved in Cubscouts and Boyscouts
                            where I achieved the rank of Eagle Scout.
                        </motion.span>
                        <br/>
                        <motion.span>
                            I enjoy working on different programming projects during my free time, and am also involved with many
                            different technical projects as well. These include configuring my Dell PowerConnect, working on my soldering projects,
                            messing around with my Raspberry Pi (I just bought a new touch display to setup), creating new scripts for my Stream Deck,
                            and more.
                        </motion.span>
                        <br/>
                        <motion.span>
                            My favorite part about this field of work is that I have the chance to make a positive impact on other peoples lives.
                            I had the honor of creating a website for my friends restaurant, and seeing the increased customer traffic and
                            5-star reviews always makes my day.
                        </motion.span>
                        <br/>
                        <motion.span>
                            Thank you for taking a look at my porfolio, and if there are any questions or feedback please refer to the
                            "Work" section where you will find my email address.
                        </motion.span>
                        <br/>
                        <motion.span>
                            - Kaleb Maulding
                        </motion.span>
                    </div>
            </motion.div>
        </motion.div>
    </AnimatePresence>
  );
};

export default About;