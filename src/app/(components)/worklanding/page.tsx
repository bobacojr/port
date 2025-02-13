import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from "motion/react";
import TargetSVG from '../targetsvg/page';
import E2SVG from '../e2svg/page';
import GFSSVG from '../gfssvg/page';
import * as variants from "../animationvariants/page";
import MOVINGTEXT from '../movingtext/page';

const WorkLanding = () => {

    const [isMounted, setIsMounted] = useState(false);
    const targetMounted = useRef(false);
    const e2Mounted = useRef(false);
    const gfsMounted = useRef(false);

    const targetControls = useAnimation();
    const e2Controls = useAnimation();
    const gfsControls = useAnimation();

    const handleTargetAnimation = async () => {
        if (!targetMounted.current) return;
        await targetControls.start({
            opacity: 1,
            transition: {
                duration: 1,
                easing: 'easeInOut'
            },
        });
    };

    const handleE2Animation = async () => {
        if (!e2Mounted.current) return;
        await e2Controls.start({
            opacity: 1,
            transition: {
                duration: 1,
                easing: 'easeInOut'
            },
        });
    };

    const handleGFSAnimation = async () => {
        if (!gfsMounted.current) return;
        await gfsControls.start({
            opacity: 1,
            transition: {
                duration: 1,
                easing: 'easeInOut'
            },
        });
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return ( 
        <div className='flex flex-col w-full h-full justify-center items-center'>
            <div className="flex w-full h-16 justify-center items-center mt-6">
                <motion.span className='flex thernaly justify-center items-center text-4xl sm:text-5xl lg:text-6xl mb-6'>
                    Work Experience
                </motion.span>
            </div>
            <motion.div className='w-[17em] sm:w-[26em]  flex flex-col justify-center items-center mb-6' id='gfs-title'>
                <GFSSVG onComplete={() => { gfsMounted.current = true; handleGFSAnimation(); }}/>
                <motion.h1 
                    initial={{ opacity: 0 }} 
                    animate={gfsControls} 
                    className='worktitle sm:!text-[1.2em] lg:!text-[1.4em]'>
                    IT Administrator
                </motion.h1>
            </motion.div>
            <div className="flex flex-col lg:flex-row lg:gap-16 lg:mb-6">
                <motion.div className='w-[17em] sm:w-[26em]  flex flex-col justify-center items-center mb-6' id='gfs-title'>
                    <E2SVG onComplete={() => { e2Mounted.current = true; handleE2Animation(); }}/>
                    <motion.h1 
                        initial={{ opacity: 0 }} 
                        animate={e2Controls} 
                        className='worktitle !w-[10em] sm:!text-[1.3em] lg:!text-[1.4em]'>
                        Logistics Coordinator
                    </motion.h1>
                </motion.div>
                <motion.div className='w-[17em] sm:w-[26em]  flex flex-col justify-center items-center mb-6' id='gfs-title'>
                    <TargetSVG onComplete={() => { targetMounted.current = true; handleTargetAnimation(); }}/>
                    <motion.h1 
                        initial={{ opacity: 0 }} 
                        animate={targetControls} 
                        className='worktitle !w-[10em] sm:!text-[1.3em] lg:!text-[1.4em]'>
                        Fulfillment Specialist
                    </motion.h1>
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
