import React, { useState } from 'react';
import { motion } from "motion/react";
import Tilt from 'react-parallax-tilt';

const Video = () => {

    return (
        <video autoPlay muted loop playsInline className='projectimage md:!h-[18em] md:!w-[22em] lg:!h-[22em] lg:!w-[28em]'>
            <source src="./ThreeJSScene.mp4" type="video/mp4"/>
            Sorry, your browser doesn't support mp4s!
        </video>
    );
}
 
export default Video;

/* 

Example of onMouseEnter function:

import React, { useState } from 'react';
import { motion } from "motion/react";

const Video = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleHoverEvent = () => {
        console.log("Hovering inside of video component");
    }

    return (
        <motion.div onMouseEnter={handleHoverEvent}>
            <video autoPlay muted loop playsInline className='projectimage'>
                <source src="./ThreeJSScene.mp4" type="video/mp4"/>
                Sorry, your browser doesn't support mp4s!
            </video>
        </motion.div>
    );
}
 
export default Video;

*/