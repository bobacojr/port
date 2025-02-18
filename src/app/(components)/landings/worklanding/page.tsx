"use client"
import React from 'react';
import { motion } from "motion/react";
import TargetSVG from '../../svgs/targetsvg/page';
import E2SVG from '../../svgs/e2svg/page';
import GFSSVG from '../../svgs/gfssvg/page';
import * as variants from "../../../lib/animationvariants/page";
import MOVINGTEXT from '../../animations/movingtext/page';

const WorkLanding = () => {

    return ( 
        <div className='flex flex-col w-full h-full justify-center items-center'>
            <div className="flex w-full h-16 justify-center items-center mt-8">
                <motion.span className='flex thernaly justify-center items-center text-4xl sm:text-5xl lg:text-6xl mb-6'>
                    Work Experience
                </motion.span>
            </div>
            <motion.div className='w-[17em] sm:w-[26em] xl:w-[30em] flex flex-col justify-center items-center mb-6' id='gfs-title'>
                <GFSSVG/>
            </motion.div>
            <div className="flex flex-col lg:flex-row lg:mt-8 lg:gap-16 lg:mb-6 xl:gap-24 2xl:gap-36">
                <motion.div className='w-[17em] sm:w-[26em] xl:w-[30em] flex flex-col justify-center items-center mb-6' id='gfs-title'>
                    <E2SVG/>
                </motion.div>
                <motion.div className='w-[17em] sm:w-[26em] xl:w-[30em] flex flex-col justify-center items-center mb-6' id='gfs-title'>
                    <TargetSVG/>
                </motion.div>
            </div>
            <div className="flex flex-col w-full overflow-x-hidden">
                <motion.div variants={variants.textSlideVariant1} initial="initial" animate="animate">
                    <MOVINGTEXT href="/work" text="CLICK TO SEE MORE WORK HISTORY" initialX="0%" animateX="-100%" />
                </motion.div>
            </div>
        </div>
    );
}

export default WorkLanding;