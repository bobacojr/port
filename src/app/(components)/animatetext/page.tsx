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
        transition: {
            delay: index * 0.03,
            duration: 0.1,
            ease: 'easeInOut'
        }
    }),
};

const AnimateText: React.FC<Props> = ({ text }) => {

    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    return ( 
        <motion.div className='flex' whileHover={'hover'}
            onHoverStart={() => setIsAnimating(true)}
            onAnimationComplete={() => setIsAnimating(false)}
            >
            {text.split('').map((char, index) => (
                <motion.span 
                    key={index} 
                    custom={index}
                    variants={hoverVariants}
                    >
                    {char}
                </motion.span>
            ))}
        </motion.div>
     );
}
 
export default AnimateText;