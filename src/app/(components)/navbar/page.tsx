"use client"
import React, { useEffect, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import JumpingText from '../animations/jumpingtext';
import Link from 'next/link';

const Navbar = () => {

    const { scrollY } = useScroll();
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
    }, [scrollDirection]);

    const handleContactClick = (e: React.MouseEvent<HTMLLIElement>) => {
        e.preventDefault(); // Prevent default link behavior
        if (window.location.pathname !== '/') {
            window.location.href = '/'; // Navigate to landing page
            sessionStorage.setItem('scrollToContact', 'true'); // Store the intent to scroll to contact section
        } else {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' }) // Scroll to contact section
            }
        }
    };

    const [isHome, setIsHome] = useState(false);
    useEffect(() => {
        setIsHome(window.location.pathname === '/');
      }, []);

    const handleHomeClick = () => {
        const homeSection = document.getElementById('home');
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.div className='flex fixed w-full justify-center items-center bg-white opacity-95 h-16 xl:h-24 z-10'
            initial={{ y: -9 }}
            animate={{ y: scrollDirection === "down" ? '-110%' : -9 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            >
            <div className='flex w-full h-full'>
                <ol className='flex h-full w-full items-center justify-between pr-3 xl:pr-14'>
                    <motion.li className='ml-3 text-3xl flex sm:text-4xl paradose xl:ml-14 xl:text-5xl items-center justify-center mb-1 lg:mb-8 cursor-pointer' onClick={handleHomeClick}>
                        {isHome ? (
                            <JumpingText text='Kaleb Maulding' />
                        ) : (
                            <Link href={'/'}>
                                <JumpingText text='Kaleb Maulding' />
                            </Link>
                        )}
                    </motion.li>
                    <motion.li className="md:hidden cursor-pointer mb-2" id='hamburger-menu' onClick={handleClick}>
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
                    <div className='hidden md:flex gap-10 xl:gap-16 justify-center items-center'>
                        <Link href={'/about'}>
                            <motion.li className='smallbutton xl:!w-[5em] xl:!h-[2.3em]' 
                                whileHover={{ scale: 1.11, color: '#048A81', borderColor: '#048A81', transition: { duration: 0.1, ease: 'easeInOut'  } }}
                                whileTap={{ scale: 0.9,  borderColor: '#048A81', transition: { duration: 0.1, ease: 'easeInOut' } }}
                                animate={{ color: '#5C5C5C', transition: { duration: 0.01, ease: 'easeInOut' } }}
                                >
                                About
                            </motion.li>
                        </Link>
                        <Link href={'/projects'}>
                            <motion.li className='bigbutton xl:!w-[5.4em] xl:!h-[2.3em]' 
                                whileHover={{ scale: 1.11, color: '#048A81', borderColor: '#048A81', transition: { duration: 0.1, ease: 'easeInOut'  } }}
                                whileTap={{ scale: 0.9,  borderColor: '#048A81', transition: { duration: 0.1, ease: 'easeInOut' } }}
                                animate={{ color: '#5C5C5C', transition: { duration: 0.01, ease: 'easeInOut' } }}
                                >
                                Projects
                            </motion.li>
                        </Link>
                        <Link href={'/work'}>
                            <motion.li className='smallbutton xl:!w-[5em] xl:!h-[2.3em]' 
                                whileHover={{ scale: 1.11, color: '#048A81', borderColor: '#048A81', transition: { duration: 0.1, ease: 'easeInOut'  } }}
                                whileTap={{ scale: 0.9,  borderColor: '#048A81', transition: { duration: 0.1, ease: 'easeInOut' } }}
                                animate={{ color: '#5C5C5C', transition: { duration: 0.01, ease: 'easeInOut' } }}
                                >
                                Work
                            </motion.li>
                        </Link>
                        <Link href={'/'}>
                            <motion.li className='bigbutton xl:!w-[5.4em] xl:!h-[2.3em]' 
                                whileHover={{ scale: 1.11, color: '#048A81', borderColor: '#048A81', transition: { duration: 0.1, ease: 'easeInOut'  } }}
                                whileTap={{ scale: 0.9,  borderColor: '#048A81', transition: { duration: 0.1, ease: 'easeInOut' } }}
                                animate={{ color: '#5C5C5C', transition: { duration: 0.01, ease: 'easeInOut' } }}
                                onClick={handleContactClick}
                                >
                                Contact
                            </motion.li>
                        </Link>
                    </div>
                </ol>
                <motion.div className='flex fixed flex-col bg-white gap-12 left-0 top-14 w-full justify-center overflow-hidden items-center md:hidden'
                    initial={{ height: 0, opacity: 1 }}
                    animate={isOpen ? { height: '100vh', opacity: 1 } : { height: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                    <Link href={'/about'}>
                        <motion.li className='hiddenmenu' 
                            whileHover={{ scale: 1.11, color: '#048A81', transition: { duration: 0.1, ease: 'easeInOut'  } }}
                            whileTap={{ scale: 0.9,  borderColor: '#048A81', transition: { duration: 0.1, ease: 'easeInOut' } }}
                            animate={{ color: '#5C5C5C', transition: { duration: 0.01, ease: 'easeInOut' } }}
                            >
                            About
                        </motion.li>
                    </Link>
                    <Link href={'/projects'}>
                        <motion.li className='hiddenmenu' 
                            whileHover={{ scale: 1.11, color: '#048A81', transition: { duration: 0.1, ease: 'easeInOut'  } }}
                            whileTap={{ scale: 0.9,  borderColor: '#048A81', transition: { duration: 0.1, ease: 'easeInOut' } }}
                            animate={{ color: '#5C5C5C', transition: { duration: 0.01, ease: 'easeInOut' } }}
                            >
                            Projects
                        </motion.li>
                    </Link>
                    <Link href={'/work'}>
                        <motion.li className='hiddenmenu' 
                            whileHover={{ scale: 1.11, color: '#048A81', transition: { duration: 0.1, ease: 'easeInOut'  } }}
                            whileTap={{ scale: 0.9,  borderColor: '#048A81', transition: { duration: 0.1, ease: 'easeInOut' } }}
                            animate={{ color: '#5C5C5C', transition: { duration: 0.01, ease: 'easeInOut' } }}
                            >
                            Work
                        </motion.li>
                    </Link>
                    <Link href={'/'}>
                        <motion.li className='hiddenmenu mb-36' 
                            whileHover={{ scale: 1.11, color: '#048A81', transition: { duration: 0.1, ease: 'easeInOut'  } }}
                            whileTap={{ scale: 0.9,  borderColor: '#048A81', transition: { duration: 0.1, ease: 'easeInOut' } }}
                            animate={{ color: '#5C5C5C', transition: { duration: 0.01, ease: 'easeInOut' } }}
                            onClick={handleContactClick}
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