"use client"
import React from 'react';
import { motion } from "motion/react";
import NAVBAR from "../(components)/navbar/page";
import * as variants from "../(components)/animationvariants/page";

const Contact = () => {
    return ( 
        <div>
            <motion.div className="flex w-full h-20 xl:h-24 items-center justify-center" id="navbar-container" variants={variants.navbarAnimationVariant} initial='initial' animate='animate'>
                <NAVBAR />
            </motion.div>
            <div>
                Contact
            </div>
        </div>
     );
}
 
export default Contact;