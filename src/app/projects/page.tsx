"use client"
import React from 'react';
import { motion } from "motion/react";
import NAVBAR from "../(components)/navbar/page";
import * as variants from "../(components)/animationvariants/page";

const Projects = () => {
    return ( 
        <div className="flex flex-col w-full h-full overflow-x-hidden">
            <motion.div className="flex w-full h-20 xl:h-24 items-center justify-center" id="navbar-container" variants={variants.navbarAnimationVariant} initial='initial' animate='animate'>
                <NAVBAR />
            </motion.div>
            <div className="flex flex-col w-full h-full ml-3">
                <motion.div className="flex flex-col w-full">
                    <div className='flex flex-row'>
                        <img src={"./prodcon.png"} className="w-[18em]"/>
                        <h1 className='flex justify-center items-center w-full border-2 border-blue-600'>
                            PROJECT NAME
                        </h1>
                    </div>
                </motion.div>
                <p className='w-[80%] mb-10 mt-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolore obcaecati, harum esse repudiandae omnis optio, quos similique nemo provident, natus quia voluptate doloribus labore adipisci maxime porro quis quam!
                </p>
                <motion.div className="flex flex-col w-full">
                    <div className='flex flex-row'>
                        <img src={"./TortilleriaPhoto.png"} className="w-[18em]"/>
                        <h1 className='flex justify-center items-center w-full border-2 border-blue-600'>
                            PROJECT NAME
                        </h1>
                    </div>
                </motion.div>
                <p className='w-[80%] mb-10 mt-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolore obcaecati, harum esse repudiandae omnis optio, quos similique nemo provident, natus quia voluptate doloribus labore adipisci maxime porro quis quam!
                </p>
                <motion.div className="flex flex-col w-full" >
                    <div className='flex flex-row'>
                        <img src={"./ThreeJS.png"} className="w-[18em]"/>
                        <h1 className='flex justify-center items-center w-full border-2 border-blue-600'>
                            PROJECT NAME
                        </h1>
                    </div>
                </motion.div>
                <p className='w-[80%] mb-10 mt-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolore obcaecati, harum esse repudiandae omnis optio, quos similique nemo provident, natus quia voluptate doloribus labore adipisci maxime porro quis quam!
                </p>
                <motion.div className="flex flex-col w-full" >
                    <div className='flex flex-row'>
                        <img src={"./ThreeJS.png"} className="w-[18em]"/>
                        <h1 className='flex justify-center items-center w-full border-2 border-blue-600'>
                            PROJECT NAME
                        </h1>
                    </div>
                </motion.div>
                <p className='w-[80%] mb-10 mt-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolore obcaecati, harum esse repudiandae omnis optio, quos similique nemo provident, natus quia voluptate doloribus labore adipisci maxime porro quis quam!
                </p>
                <motion.div className="flex flex-col w-full" >
                    <div className='flex flex-row'>
                        <img src={"./ThreeJS.png"} className="w-[18em]"/>
                        <h1 className='flex justify-center items-center w-full border-2 border-blue-600'>
                            PROJECT NAME
                        </h1>
                    </div>
                </motion.div>
                <p className='w-[80%] mb-10 mt-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolore obcaecati, harum esse repudiandae omnis optio, quos similique nemo provident, natus quia voluptate doloribus labore adipisci maxime porro quis quam!
                </p>
            </div>
        </div>
     );
}
 
export default Projects;