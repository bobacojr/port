'use client'
import React, { useState } from 'react';
import { AnimatePresence, motion } from "motion/react";
import NAVBAR from "../(components)/navbar/page";
import * as variants from "../(components)/animations/animationvariants/page";

const Work = () => {
    const [isComplete, setIsComplete] = useState(false);

    return ( 
        <AnimatePresence mode="wait">
            <motion.div
                key={"projects-page"}
                className="flex flex-col w-full h-full overflow-x-hidden"
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "-100%" }}
                transition={{ duration: 0.8 }}
                onAnimationComplete={() => {setIsComplete(true)}}
                >
                <motion.div className="flex w-full h-20 xl:h-24 items-center justify-center" id="navbar-container" variants={variants.navbarAnimationVariant} initial='initial' animate={isComplete ? 'animate' : 'initial'}>
                    <NAVBAR />
                </motion.div>
                <div>
                    Work
                </div>
            </motion.div>
        </AnimatePresence>
     );
}
 
export default Work;