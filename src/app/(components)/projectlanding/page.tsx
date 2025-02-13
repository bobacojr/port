"use client"
import React, { useState } from 'react';
import * as variants from "../animationvariants/page";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import MOVINGTEXT from "../movingtext/page";
import VIDEO from "../video/page";

const ProjectLanding = () => {
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
        <div className="flex flex-col w-full h-full">
            <motion.div className="flex flex-col w-full justify-center items-center mb-6">
                <div className="flex w-full h-16 justify-center items-center mt-6">
                    <motion.span className="flex h-full w-full items-center justify-center text-4xl sm:text-5xl lg:text-6xl thernaly text-black" variants={variants.projectHighlightVariant} initial="initial" animate={hasProjectHighlightAnimated ? 'animate' : 'initial'}>
                        Project Highlights
                    </motion.span>
                </div>
                <div className="flex flex-col justify-center items-center gap-8 lg:gap-16 mt-3">
                    <div className="flex flex-col sm:flex-row gap-8 lg:gap-16">
                        <motion.div className="imagesize md:!h-[18em] md:!w-[22em] lg:!h-[22em] lg:!w-[28em]" 
                            variants={variants.projectCardVariant} 
                            initial='initial' 
                            animate={hasProjectCardAnimated ? 'animate' : 'initial'}
                            >
                            <img src={"./prodcon.png"} className="projectimage md:!h-[18em] md:!w-[22em] lg:!h-[22em] lg:!w-[28em]"/>
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
                        <img src={"./ThreeJS.png"} className="projectimage md:!h-[18em] md:!w-[22em] lg:!h-[22em] lg:!w-[28em]"/>
                        <h1 className="projecttitle">ThreeJS & WebGL Scene</h1>
                    </motion.div>
                </div>
            </motion.div>
            <motion.div variants={variants.textSlideVariant2} initial="initial" animate={hasMovingTextAnimated ? "animate" : "initial"}>
                <MOVINGTEXT href="/projects" text="CLICK TO SEE MORE PROJECTS" initialX="-100%" animateX="0%" />
            </motion.div>
        </div>
     );
}
 
export default ProjectLanding;