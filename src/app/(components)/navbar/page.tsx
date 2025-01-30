import React, { useEffect, useRef, useState } from 'react';
import { easeInOut, motion } from 'motion/react';
import AnimateText from '../animatetext/page';
import Link from 'next/link';

const Navbar = () => {

    const ref = useRef(null);

    useEffect(() => {
        const text = ref.current;
        console.log("Text ref: ", text);

    })

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return ( 
        <div className='flex w-full h-full'>
            <ol className='flex h-full w-full items-center justify-between border-2 border-green-600'>
                <li className='ml-3 text-3xl test' ref={ref}>
                    <AnimateText text='Kaleb Maulding'/>
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
            <motion.div className='flex flex-col gap-3 absolute left-0 top-20 w-full justify-center overflow-hidden items-center border-2 border-red-600 md:hidden'
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
     );
}
 
export default Navbar;