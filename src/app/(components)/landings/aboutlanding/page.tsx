"use client"
import React, { useEffect, useMemo, useState } from 'react';
import * as variants from "../../../lib/animationvariants/page";
import { motion, AnimatePresence } from "motion/react";
import MOVINGTEXT from '../../animations/movingtext/page';

const AboutLanding = () => {
    const words1 = useMemo(() => ["INNOVATOR", "ADAPTABLE", "PROACTIVE"], []);
    const [currentWord1, setCurrentWord1] = useState(words1[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord1((prevWord) => {
                const currentIndex = words1.indexOf(prevWord); // Grab the index of our current word
                const nextIndex = (currentIndex + 1) % words1.length; // Caclulate the next index (by +1), wraps back to 0
                return words1[nextIndex]; // Return the next index
            });
        }, 8000); // This value represents the interval timer
        return () => clearInterval(interval); // Always clear the interval to stop memory leaks
    }, [words1]); // Dependency array

    const words2 = useMemo(() => ["DIGITAL ARTIST", "COMMUNICATOR", "GOAL-ORIENTED"], []);
    const [currentWord2, setCurrentWord2] = useState(words2[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord2((prevWord) => {
                const currentIndex = words2.indexOf(prevWord);
                const nextIndex = (currentIndex + 1) % words2.length;
                return words2[nextIndex];
            });
        }, 8000);
        return () => clearInterval(interval);
    }, [words2]);

    return ( 
        <div className="flex flex-col w-full h-full overflow-x-hidden">
            <div className="flex flex-row">
                <div className="ml-2 flex w-full h-full flex-col xl:ml-14 3xl:ml-20">
                    <motion.span className="sageworld text-5xl sm:text-6xl md:text-7xl lg:text-7.5xl 3xl:text-8.5xl text-myteal" 
                        variants={variants.bigWordVariant1} 
                        initial='initial' 
                        animate='animate' 
                        custom={0.5}
                        >
                        CREATOR
                    </motion.span>
                    <motion.span className="thernaly text-4xl sm:text-5xl md:text-6xl lg:text-6.5xl 3xl:text-7.5xl" 
                        variants={variants.bigWordVariant1} 
                        initial='initial' 
                        animate='animate' 
                        custom={1}
                        >
                        COMPUTER SCIENTIST
                    </motion.span>
                    <AnimatePresence mode='wait'>
                        <motion.span className="thernaly text-7xl sm:text-8xl md:text-9xl lg:text-10xl 3xl:text-11xl text-myteal"
                            key={currentWord1}
                            variants={variants.bigWordVariant1} 
                            initial='initial' 
                            animate='animate' 
                            custom={1.5}
                            exit={{ x: '300%' }}
                            transition={{ duration: 1 }}
                            >
                            {currentWord1}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </div>
            <div className="flex flex-col items-end mt-3 mb-3 mr-2 xl:mr-14 lg:mt-0 3xl:mr-20">
                <motion.span className="sageworld text-5xl sm:text-7xl md:text-7.8xl 3xl:text-9xl text-myteal" 
                    variants={variants.bigWordVariant2} 
                    initial='initial' 
                    animate='animate' 
                    custom={2}
                    >
                    MUSICIAN
                </motion.span>
                <AnimatePresence mode='wait'>
                    <motion.span className="thernaly text-5xl sm:text-7xl md:text-8xl 3xl:text-9xl"
                        key={currentWord2}
                        variants={variants.bigWordVariant2} 
                        initial='initial' 
                        animate='animate' 
                        custom={2.5}
                        exit={{ x: '-400%' }}
                        transition={{ duration: 1 }}
                        >
                        {currentWord2}
                    </motion.span>
                </AnimatePresence>
                <motion.span className="thernaly text-6xl sm:text-8xl md:text-9xl 3xl:text-11.25xl text-myteal" 
                    variants={variants.bigWordVariant2} 
                    initial='initial' 
                    animate='animate' 
                    custom={3}
                    >
                    PROGRAMMER
                </motion.span>
            </div>
            <motion.div variants={variants.textSlideVariant1} initial="initial" animate="animate" className="">
                <MOVINGTEXT/>
            </motion.div>
        </div>
    );
}
 
export default AboutLanding;