"use client"
import React from 'react';
import { motion } from "motion/react";
import NAVBAR from "../(components)/navbar/page";
import * as variants from "../(components)/animationvariants/page";

const About = () => {
    return (
        <motion.div
                initial={{ opacity: 0 }} // Initial state (hidden)
                animate={{ opacity: 1 }} // Animate to fully visible
                exit={{ opacity: 0 }} // Exit state (hidden)
                transition={{ duration: 0.5 }} // Animation duration
                >
            <div>
                <motion.div className="flex w-full h-20 xl:h-24 items-center justify-center" id="navbar-container" variants={variants.navbarAnimationVariant} initial='initial' animate='animate'>
                    <NAVBAR />
                </motion.div>
                <h1>About Page</h1>
                <p>This is the About page.</p>
            </div>
        </motion.div>
     );
}
 
export default About;