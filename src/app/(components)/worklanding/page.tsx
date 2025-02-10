import React from 'react';
import { motion } from "motion/react";
import TargetSVG from '../targetsvg/page';
import E2SVG from '../e2svg/page';
import GFSSVG from '../gfssvg/page';

const WorkLanding = () => {
    return ( 
        <div className='flex flex-col w-full h-full justify-center items-center'>
            <div className="flex w-full h-16 justify-center items-center mt-6">
                <motion.span className='flex thernaly justify-center items-center text-5xl '>
                    Work Experience
                </motion.span>
            </div>
            <motion.div className='flex flex-col w-[90%] justify-center items-center'>
                <TargetSVG/>
                <h1>Fulfillment Specialist, Opener, Closer</h1>
            </motion.div>
            <motion.div className='flex flex-col w-[90%] justify-center items-center'>
                <E2SVG/>
                <h1>Logistics Coordinator</h1>
            </motion.div>
            <motion.div className='flex flex-col w-[90%] justify-center items-center'>
                <GFSSVG/>
                <h1>Information Technology Administrator</h1>
            </motion.div>
        </div>
    );
}
 
export default WorkLanding;
