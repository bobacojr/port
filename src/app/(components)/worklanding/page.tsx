import React from 'react';
import { motion, useAnimation } from "motion/react";
import TargetSVG from '../targetsvg/page';
import E2SVG from '../e2svg/page';
import GFSSVG from '../gfssvg/page';
import * as variants from "../animationvariants/page";

const WorkLanding = () => {
    const targetControls = useAnimation();
    const e2Controls = useAnimation();
    const gfsControls = useAnimation();

    const handleTargetAnimation = () => {
        targetControls.start({
            opacity: 1,
            transition: {
                duration: 1,
                ease: 'easeInOut'
            },
        });
    };
    const handleE2Animation = () => {
        e2Controls.start({
            opacity: 1,
            transition: {
                duration: 1,
                ease: 'easeInOut'
            },
        });
    };
    const handleGFSAnimation = () => {
        gfsControls.start({
            opacity: 1,
            transition: {
                duration: 1,
                ease: 'easeInOut'
            },
        });
    };

    return ( 
        <div className='flex flex-col w-full h-full justify-center items-center'>
            <div className="flex w-full h-16 justify-center items-center mt-6">
                <motion.span className='flex thernaly justify-center items-center text-5xl mb-6'>
                    Work Experience
                </motion.span>
            </div>
            <motion.div className='flex flex-col w-[70%] justify-center items-center mb-6'>
                <GFSSVG onComplete={handleGFSAnimation}/>
                <motion.h1 initial={{ opacity: 0 }} animate={gfsControls} className='worktitle'>
                    IT Administrator
                </motion.h1>
            </motion.div>
            <motion.div className='flex flex-col w-[70%] justify-center items-center mb-6'>
                <E2SVG onComplete={handleE2Animation}/>
                <motion.h1 initial={{ opacity: 0 }} animate={e2Controls} className='worktitle'>
                    Logistics Coordinator
                </motion.h1>
            </motion.div>
            <motion.div className='flex flex-col w-[70%] justify-center items-center mb-6'>
                <TargetSVG onComplete={handleTargetAnimation}/>
                <motion.h1 initial={{ opacity: 0 }} animate={targetControls} className='worktitle'>
                    Fulfillment Specialist
                </motion.h1>
            </motion.div>
        </div>
    );
}
 
export default WorkLanding;
