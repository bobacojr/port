import React, { useEffect, useRef, useState } from 'react';
import { easeInOut, motion, useMotionValueEvent, useScroll } from 'motion/react';
import JumpingText from '../jumpingtext/page';
import Link from 'next/link';

const Navbar = () => {

    const { scrollX, scrollY } = useScroll();
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    // Tracks whether the user is scrolling up or down along the y axis
    useMotionValueEvent(scrollY, "change", (current)=> {
        const previous = scrollY.getPrevious();
        if (previous !== undefined) {
            const diff = current - previous;
            setScrollDirection(diff > 0 ? "down" : "up");
        }
    })

    useEffect(() => {
        if (scrollDirection === "down"){
            setIsOpen(false);
        }
    })

    return (
        <motion.div className='flex fixed w-full h-20 bg-white'
            initial={{ y: 0 }}
            animate={{ y: scrollDirection === "down" ? '-100%' : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            >
            <div className='flex w-full h-full'>
                <ol className='flex h-full w-full items-center justify-between'>
                    <li className='ml-3 text-3xl paradose'>
                        <Link href={'/'}>
                            <JumpingText text='Kaleb Maulding'/>
                        </Link>
                    </li>
                    <motion.li className="md:hidden cursor-pointer mr-3" id='hamburger-menu' onClick={handleClick}>
                        <motion.span className="line line-1" animate={isOpen ? {
                            rotateZ: 45,
                            translateX: 3,
                            translateY: 4,
                        } : {
                            opacity: 1,
                        }}/>
                        <motion.span className="line" animate={isOpen ? {
                            rotateZ: -45,
                        } : {
                            opacity: 1,
                        }}/>
                        <motion.span className="line line-3" animate={isOpen ? {
                            width: '58%',
                            rotateZ: 45,
                            translateX: 12,
                            translateY: -4,
                        } : {
                            opacity: 1,
                        }}/>
                    </motion.li>
                    <div className='hidden md:flex gap-16'>
                        <Link href={'/about'}>
                            <motion.li className='button' 
                                whileHover={{ scale: 1.11, color: '#048A81', transition: { duration: 0.1, ease: 'easeInOut'  } }}
                                whileTap={{ scale: 0.9,  borderColor: '#048A81', transition: { duration: 0.1, ease: 'easeInOut' } }}
                                animate={{ color: '#5C5C5C', transition: { duration: 0.01, ease: 'easeInOut' } }}
                                >
                                About
                            </motion.li>
                        </Link>
                        <Link href={'/projects'}>
                            <motion.li className='button' 
                                whileHover={{ scale: 1.11, color: '#048A81', transition: { duration: 0.1, ease: 'easeInOut'  } }}
                                whileTap={{ scale: 0.9,  borderColor: '#048A81', transition: { duration: 0.1, ease: 'easeInOut' } }}
                                animate={{ color: '#5C5C5C', transition: { duration: 0.01, ease: 'easeInOut' } }}
                                >
                                Projects
                            </motion.li>
                        </Link>
                        <Link href={'/work'}>
                            <motion.li className='button' 
                                whileHover={{ scale: 1.11, color: '#048A81', transition: { duration: 0.1, ease: 'easeInOut'  } }}
                                whileTap={{ scale: 0.9,  borderColor: '#048A81', transition: { duration: 0.1, ease: 'easeInOut' } }}
                                animate={{ color: '#5C5C5C', transition: { duration: 0.01, ease: 'easeInOut' } }}
                                >
                                Work
                            </motion.li>
                        </Link>
                        <Link href={'/contact'}>
                            <motion.li className='button mr-3 md:mr' 
                                whileHover={{ scale: 1.11, color: '#048A81', transition: { duration: 0.1, ease: 'easeInOut'  } }}
                                whileTap={{ scale: 0.9,  borderColor: '#048A81', transition: { duration: 0.1, ease: 'easeInOut' } }}
                                animate={{ color: '#5C5C5C', transition: { duration: 0.01, ease: 'easeInOut' } }}
                                >
                                Contact
                            </motion.li>
                        </Link>
                    </div>
                </ol>
                <motion.div className='flex fixed flex-col bg-white gap-3 left-0 top-20 w-full justify-center overflow-hidden items-center md:hidden'
                    initial={{ height: 0, opacity: 0 }}
                    animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                    <Link href={'/about'}>
                        <motion.li className='button mt-3' 
                            whileHover={{ scale: 1.11, color: '#048A81', transition: { duration: 0.1, ease: 'easeInOut'  } }}
                            whileTap={{ scale: 0.9,  borderColor: '#048A81', transition: { duration: 0.1, ease: 'easeInOut' } }}
                            animate={{ color: '#5C5C5C', transition: { duration: 0.01, ease: 'easeInOut' } }}
                            >
                            About
                        </motion.li>
                    </Link>
                    <Link href={'/projects'}>
                        <motion.li className='button' 
                            whileHover={{ scale: 1.11, color: '#048A81', transition: { duration: 0.1, ease: 'easeInOut'  } }}
                            whileTap={{ scale: 0.9,  borderColor: '#048A81', transition: { duration: 0.1, ease: 'easeInOut' } }}
                            animate={{ color: '#5C5C5C', transition: { duration: 0.01, ease: 'easeInOut' } }}
                            >
                            Projects
                        </motion.li>
                    </Link>
                    <Link href={'/work'}>
                        <motion.li className='button' 
                            whileHover={{ scale: 1.11, color: '#048A81', transition: { duration: 0.1, ease: 'easeInOut'  } }}
                            whileTap={{ scale: 0.9,  borderColor: '#048A81', transition: { duration: 0.1, ease: 'easeInOut' } }}
                            animate={{ color: '#5C5C5C', transition: { duration: 0.01, ease: 'easeInOut' } }}
                            >
                            Work
                        </motion.li>
                    </Link>
                    <Link href={'/contact'}>
                        <motion.li className='button mb-3' 
                            whileHover={{ scale: 1.11, color: '#048A81', transition: { duration: 0.1, ease: 'easeInOut'  } }}
                            whileTap={{ scale: 0.9,  borderColor: '#048A81', transition: { duration: 0.1, ease: 'easeInOut' } }}
                            animate={{ color: '#5C5C5C', transition: { duration: 0.01, ease: 'easeInOut' } }}
                            >
                            Contact
                        </motion.li>
                    </Link>
                </motion.div>
            </div>
        </motion.div>
     );
}
 
export default Navbar;