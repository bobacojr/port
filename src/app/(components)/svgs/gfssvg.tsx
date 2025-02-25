"use client"
import React, { useEffect, useRef } from 'react';
import { motion } from "motion/react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GFSSVGProps {
    yScrollValue?: number; // Optional prop with a default value
}

const GFSSVG: React.FC<GFSSVGProps> = ({ yScrollValue = 0 }) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const h1Ref = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        const svgElement = svgRef.current;
        const h1Element = h1Ref.current;
        if (!svgElement || !h1Element) return;

        // Select paths by class
        const grayPaths = svgElement.querySelectorAll('.gfs-gray, .gfs-gray-word');
        const redWordPaths = svgElement.querySelectorAll('.gfs-red-word');
        const redPaths = svgElement.querySelectorAll('.gfs-red');

        gsap.set([...grayPaths, ...redWordPaths, ...redPaths], {
            strokeDasharray: 1000,
            strokeDashoffset: 1000,
            fillOpacity: 0
        });

        gsap.set(h1Element, {
            opacity: 0,
            x: '-300%',
        });

        // Create the animation timeline
        const masterTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: svgElement,
                start: `top-=${100} center`,
                toggleActions: "play none none reverse"
            },
        });

        // Animate paths
        masterTimeline
            .to([...grayPaths, ...redWordPaths, ...redPaths], {
                strokeDashoffset: 0,
                duration: 6,
                ease: 'none',
            })
            .to(grayPaths, {
                fill: '#505050',
                fillOpacity: 1,
                duration: 0.5,
                ease: 'power1.inOut',
            }, "-=4")
            .to(redWordPaths, {
                fill: '#C80000',
                fillOpacity: 1,
                duration: 0.5,
                ease: 'power1.inOut',
            }, "-=4")
            .to(h1Element, {
                opacity: 1,
                x: 0,
                duration: 0.5,
                ease: 'power1.inOut',
            }, '-=4');
        return () => {
            masterTimeline.kill();
        };
    }, [yScrollValue]);
     
    return (
        <div className='flex flex-col w-full items-center'>
            <svg 
                version="1.2" 
                xmlns="http://www.w3.org/2000/svg" 
                x="0px" 
                y="0px"
                viewBox="0 0 314.5 105.4"
                ref={svgRef}>
                <path
                    className='gfs-gray'
                    fill="none" 
                    stroke="#505050" 
                    strokeWidth="1" 
                    d="M301.4,18.7L301.4,18.7c0-2.6,2-4.7,4.5-4.7c2.5,0,4.5,2.1,4.5,4.6v0c0,2.5-2,4.7-4.5,4.7
                    C303.4,23.3,301.4,21.2,301.4,18.7z M309.9,18.7L309.9,18.7c0-2.3-1.7-4.2-4-4.2c-2.3,0-4,1.9-4,4.2v0c0,2.3,1.7,4.1,4,4.1
                    C308.2,22.8,309.9,20.9,309.9,18.7z M304,16.1h2.2c1.1,0,1.9,0.5,1.9,1.6c0,0.8-0.4,1.3-1,1.5l1.2,1.7h-1.4l-1-1.5h-0.7V21H304
                    V16.1z M306.2,18.5c0.5,0,0.8-0.3,0.8-0.7c0-0.4-0.3-0.7-0.8-0.7h-1v1.3H306.2z"/>
                <path
                    className='gfs-gray-word'
                    fill="none" 
                    stroke="#505050" 
                    strokeWidth="1" 
                    d="M82.8,79.4H98v3.3H86.4v5.5h10.2v3.3H86.4v8.3h-3.6V79.4z
                    M99.6,89.6L99.6,89.6c0-5.8,4.4-10.6,10.7-10.6c6.2,0,10.6,4.7,10.6,10.4v0.1c0,5.7-4.4,10.5-10.7,10.5
                    C104,100.1,99.6,95.4,99.6,89.6z M117.1,89.6L117.1,89.6c0-4-2.9-7.3-6.9-7.3c-4,0-6.8,3.2-6.8,7.2v0.1c0,3.9,2.9,7.2,6.9,7.2
                    C114.3,96.8,117.1,93.6,117.1,89.6z
                    M123.6,89.6L123.6,89.6c0-5.8,4.4-10.6,10.7-10.6c6.2,0,10.6,4.7,10.6,10.4v0.1c0,5.7-4.4,10.5-10.7,10.5
                    C127.9,100.1,123.6,95.4,123.6,89.6z M141.1,89.6L141.1,89.6c0-4-2.9-7.3-6.9-7.3c-4,0-6.8,3.2-6.8,7.2v0.1c0,3.9,2.9,7.2,6.9,7.2
                    C138.3,96.8,141.1,93.6,141.1,89.6z 
                    M148.1,79.4h7.6c6.4,0,10.8,4.4,10.8,10.1v0.1c0,5.7-4.4,10.2-10.8,10.2h-7.6V79.4z M151.6,82.7v13.8h4
                    c4.3,0,7.1-2.9,7.1-6.8v-0.1c0-4-2.8-6.9-7.1-6.9H151.6z 
                    M178.1,96.8l2.1-2.6c1.9,1.7,3.9,2.6,6.4,2.6c2.2,0,3.6-1,3.6-2.6v-0.1c0-1.5-0.8-2.2-4.6-3.1
                    c-4.3-1-6.8-2.3-6.8-6.1V85c0-3.5,2.9-5.9,6.9-5.9c3,0,5.3,0.9,7.4,2.6l-1.9,2.7c-1.8-1.4-3.7-2.1-5.5-2.1c-2.1,0-3.3,1.1-3.3,2.4
                    v0.1c0,1.6,0.9,2.3,4.8,3.2c4.3,1,6.5,2.6,6.5,6V94c0,3.8-3,6.1-7.3,6.1C183.5,100,180.5,99,178.1,96.8z
                    M197.4,79.4h15.1v3.2H201v5.3h10.2v3.2H201v5.5h11.6v3.2h-15.2V79.4z
                    M216.6,79.4h9.1c2.6,0,4.6,0.8,5.9,2c1.1,1.1,1.7,2.6,1.7,4.4v0.1c0,3.3-2,5.3-4.8,6.2l5.5,7.7h-4.2l-5-7.1
                    h-4.5v7.1h-3.6V79.4z M225.4,89.5c2.6,0,4.2-1.3,4.2-3.4v-0.1c0-2.2-1.6-3.4-4.2-3.4h-5.2v6.8H225.4z
                    M234.6,79.4h3.9l6.1,15.6l6.1-15.6h3.9l-8.4,20.5h-3.2L234.6,79.4z M257.7,79.4h3.6v20.3h-3.6V79.4z
                    M264.7,89.6L264.7,89.6c0-5.8,4.3-10.6,10.5-10.6c3.7,0,6,1.3,8,3.2l-2.3,2.6c-1.6-1.5-3.4-2.5-5.7-2.5
                    c-3.9,0-6.7,3.2-6.7,7.2v0.1c0,4,2.8,7.2,6.7,7.2c2.5,0,4.1-1,5.8-2.6l2.3,2.3c-2.1,2.2-4.4,3.6-8.2,3.6
                    C269.1,100.1,264.7,95.5,264.7,89.6z M287,79.4h15.1v3.2h-11.5v5.3h10.2v3.2h-10.2v5.5h11.6v3.2H287V79.4z"/>
                <path
                    className='gfs-red-word'
                    fill="none" 
                    stroke="#C80000" 
                    strokeWidth="1"  
                    d="M224.5,18.1c-13.3,0-24.1,10.8-24.1,24.1c0,13.3,10.8,24.1,24.1,24.1c13.3,0,24.1-10.8,24.1-24.1
                    C248.6,28.9,237.8,18.1,224.5,18.1z M224.5,53.1c-6,0-10.9-4.9-10.9-10.9c0-6,4.9-10.8,10.9-10.8c6,0,10.9,4.9,10.9,10.8
                    C235.3,48.2,230.5,53.1,224.5,53.1z
                    
                    M278.1,18.1c-13.3,0-24.1,10.8-24.1,24.1v23.1h13.3V42.2c0-6,4.9-10.8,10.9-10.8c6,0,10.9,4.9,10.9,10.8
                    v23.1h13.3V42.2C302.3,28.9,291.5,18.1,278.1,18.1z 
                    
                    M89.7,17.9c-13.3,0-24.1,10.8-24.1,24.1c0,13.3,10.8,24.1,24.1,24.1c13.3,0,24.1-10.8,24.1-24.1
                    C113.9,28.7,103.1,17.9,89.7,17.9z M89.7,52.9c-6,0-10.9-4.9-10.9-10.9c0-6,4.9-10.9,10.9-10.9c6,0,10.9,4.9,10.9,10.9
                    C100.6,48,95.7,52.9,89.7,52.9z

                    M143.1,18.1c-13.3,0-24.1,10.8-24.1,24.1v23.1h13.3V42.2c0-6,4.9-10.8,10.8-10.8c0.8,0,1.5,0,2.4,0.1V18.2
                    C144.7,18.2,143.9,18.1,143.1,18.1z 
                    
                    M182.2,4.6v15.9c-3.3-1.6-6.9-2.6-10.9-2.6c-13.3,0-24.1,10.8-24.1,24.1c0,13.3,10.8,24.1,24.1,24.1
                    c13.3,0,24-10.7,24.1-23.9l0,0V4.6H182.2z M171.4,52.9c-6,0-10.9-4.9-10.9-10.9c0-6,4.9-10.9,10.9-10.9c6,0,10.9,4.9,10.9,10.9
                    C182.2,48,177.4,52.9,171.4,52.9z

                    M59.1,42c0-4.1,0.8-8,2.4-11.6H34.1v13.3H47v6.4c-3,2-6.8,3-11.1,3c-10,0-17.8-7.6-17.8-17.5
                    c0-9.2,7.9-17.2,16.9-17.2c6,0,10.2,1.5,14.8,5.4l0.7,0.6l9-10.9l-0.7-0.6C52,7.1,45.2,4.8,35.4,4.8C17.8,4.8,4.1,18.4,4.1,35.9
                    c0,17.8,13.2,30.8,31.5,30.8c9.3,0,20.1-4.4,26.9-10.9l0.1-0.1C60.4,51.6,59.1,47,59.1,42z"/>
                <path
                    className='gfs-red'
                    fill='none'
                    stroke='#C80000'
                    strokeWidth='1'
                    d='M89.7,31.1c-6,0-10.9,4.9-10.9,10.9c0,6,4.9,10.9,10.9,10.9c6,0,10.9-4.9,10.9-10.9
                    C100.6,36,95.7,31.1,89.7,31.1z'
                />
            </svg>
            <motion.h1
                ref={h1Ref}
                className='worktitle sageworld sm:!text-[1.2em] lg:!text-[1.4em] thernaly tracking-widest'>
                IT Administrator
            </motion.h1>
        </div>
    );
}

export default GFSSVG;