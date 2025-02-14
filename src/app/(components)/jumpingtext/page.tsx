"use client"
import React, { useState } from 'react';
import { easeInOut, motion } from 'motion/react';
import { spring } from 'motion';

interface Props {
    text: string,
}

const hoverVariants = {
    initial: {
        y: 0,
    },
    hover: (index: number) => ({
        y: [0, -20, 0],
        color: ['#5C5C5C', '#048A81', '#5C5C5C'],
        transition: {
            delay: index * 0.03,
            duration: 0.14,
            ease: 'easeInOut',
        }
    }),
};

const JumpingText: React.FC<Props> = ({ text }) => {

    const [isHovering, setIsHovering] = useState<boolean>(false);

    return ( 
        <motion.div className='flex justify-center items-center lg:mt-7' whileHover={'hover'}
            onHoverStart={() => setIsHovering(true)}
            >
            {text.split('').map((char, index) => (
                <motion.span 
                    key={index} 
                    custom={index}
                    variants={hoverVariants}
                    animate={isHovering ? 'hover' : 'initial'}
                    onAnimationComplete={() => {
                        if (index === text.length - 1) {
                            setIsHovering(false);
                        }
                    }}
                    >
                    {char}
                </motion.span>
            ))}
        </motion.div>
     );
}
 
export default JumpingText;