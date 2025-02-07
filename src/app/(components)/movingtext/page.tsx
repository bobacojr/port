import React from 'react';
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";

const MovingText = ({
        href = '/about',
        text = 'CLICK TO LEARN MORE - ABOUT - CLICK TO LEARN MORE',
        initialX = '0%',
        animateX = '-100%',
    }) => {

    return ( 
        <Link href={href}>
          <motion.div className="relative w-full overflow-hidden z-0">
            <div className="flex whitespace-nowrap">
              <motion.span 
                className="flex min-w-full h-20 border-y-2 border-x-0 border-black justify-center items-center" initial={{ x: initialX }} animate={{ x: animateX }}
                transition={{ duration: 10, repeat: Infinity, repeatType: 'loop', ease: 'linear'}}>
                  {text}
              </motion.span>
              <motion.span 
                className="flex min-w-full h-20 border-y-2 border-x-0 border-black justify-center items-center" initial={{ x: initialX }} animate={{ x: animateX }}
                transition={{ duration: 10, repeat: Infinity, repeatType: 'loop', ease: 'linear'}}>
                  {text}
              </motion.span>
            </div>
          </motion.div>
        </Link>
    );
}
 
export default MovingText;