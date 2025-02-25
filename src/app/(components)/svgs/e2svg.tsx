"use client"
import React, { useEffect, useRef } from 'react';
import { motion } from "motion/react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface E2SVGProps {
    yScrollValue?: number; // Optional prop with a default value
}

const E2SVG: React.FC<E2SVGProps> = ({ yScrollValue = 0 }) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const h1Ref = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        const svgElement = svgRef.current;
        const h1Element = h1Ref.current;
        if (!svgElement || !h1Element) return; // Check if svgElement is not null

        // Select the paths and polylines within the SVG
        const e2Paths = svgElement.querySelectorAll('.svg');

        gsap.set(e2Paths, {
            strokeDasharray: 1700,
            strokeDashoffset: 1700,
            fillOpacity: 0
        });

        gsap.set(h1Element, {
            opacity: 0,
            x: '-300%'
        });

        // Create the animation timeline
        const masterTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: svgElement,
                start: `top-=${200} center`,
                toggleActions: "play none none reverse"
            },
        });

        masterTimeline
            .to(e2Paths, {
                strokeDashoffset: 0,
                duration: 2,
                ease: 'none',
            }).to(e2Paths, {
                fill: '#282828',
                fillOpacity: 1,
                duration: 0.5,
                ease: 'power1.inOut',
            }).to(h1Element, {
                opacity: 1,
                x: 0,
                duration: 0.5,
                ease: 'power1.inOut'
            }, '-=0.5');
        return () => {
            masterTimeline.kill();
        };
    }, [yScrollValue]);

    return (
        <div className="flex flex-col w-full items-center">
            <svg 
                version="1.2" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1566 406"
                ref={svgRef}>
                <path
                    className='svg'
                    fill="none" 
                    stroke="#282828" 
                    strokeWidth="4" 
                    d="m237.8 254.1c-13.4 43.1-51.9 77-113.3 77-77 0-124.5-54.4-124.5-124.7 
                        0-70.3 47.5-124.8 122.3-124.8 59.1 0 97.6 31.8 112.4 78.9 5.3 17.3 7.5 37.2 7.5 57.2v11.3h-171.9c2.2 29.5 23.3 
                        52.2 54.2 52.2 22.4 0 36.7-13.7 39.8-27.2h73.5zm-167.5-72.6h101.6c-2.2-31.8-21-49.9-49.6-49.9-28.7 0-47.5 18.1-52 
                        49.9zm176.8-88.5c4.5-54.4 47-93 112-93 69.4 0 109.7 45.4 109.7 95.3 0 43.1-17.9 71.2-55 104.3l-70.8 63.6h132.5v61.2h-228.4c0-39.1 
                        16.1-76.4 44.4-102.8l74.3-69.6c23.3-21.8 31.3-36.2 31.3-54.4 0-20.4-8.9-40.8-38.1-40.8-20.1 0-37.2 11.3-39.4 36.2z"/>
                <path
                    className='svg'
                    fill="none" 
                    stroke="#282828" 
                    strokeWidth="4" 
                    d="m1545.9 130.7c-11.1 0-20-9-20-20.2 0-11.2 8.9-20.3 20-20.3 11.1 0 20.1 9.1 20.1
                        20.3 0 11.2-9 20.2-20.1 20.2zm16.5-20.2c0-9.4-7.3-17-16.5-17-9.1 0-16.4 7.6-16.4 17 0 9.3 7.3 16.9 16.4 16.9 9.2 0 16.5-7.6
                        16.5-16.9zm-23.3-10.3h6.9c4.6 0 7.6 1.9 7.6 6.1 0 3.1-1.7 4.7-4.1 5.4l5.2 8.5h-4.4l-4.9-7.8h-2v7.8h-4.3zm6.8 9.3c2.3 0 3.5-1
                        3.5-2.9v-0.1c0-2.1-1.3-2.8-3.5-2.8h-2.5v5.8h2.5zm-934.3 221.7c-77 0-124.5-54.4-124.5-124.7 0-70.3 47.5-124.8 124.5-124.8 77
                        0 124.4 54.5 124.4 124.8 0 70.3-47.4 124.7-124.4 124.7zm0-195c-41.7 0-56.5 38.5-56.5 70.3 0 31.7 14.8 70.3 56.5 70.3 41.6 0
                        56.4-38.6 56.4-70.3 0-31.8-14.8-70.3-56.4-70.3zm211.4-20.5c11.1-18.1 35.8-34 71.7-34 70.3 0 108.8 56.7 108.8 124.8 0 68-38.5
                        124.7-108.8 124.7-35.8 0-60.5-15.8-71.7-34v108.9h-68.1v-317.5h68.1zm55.1 161c31.3 0 57.3-20.4 57.3-70.3
                        0-49.9-25.9-70.3-57.3-70.3-27.3 0-57.3 20.4-57.3 70.3 0 49.9 30 70.3 57.3 70.3zm382-22.6c-13.4 43.1-51.9 77-113.3 77-76.9
                        0-124.4-54.4-124.4-124.7 0-70.3 47.5-124.8 122.3-124.8 59.1 0 97.6 31.8 112.3 78.9 5.4 17.3 7.6 37.2 7.6 57.2v11.3h-171.9c2.2
                        29.5 23.3 52.2 54.1 52.2 22.5 0 36.8-13.7 39.9-27.2h73.4zm-167.4-72.7h101.6c-2.2-31.7-21-49.9-49.6-49.9-28.8 0-47.6 18.2-52
                        49.9zm259-67.9c15.6-20.5 39.8-31.8 70.3-31.8 59.1 0 95.8 36.3 95.8 99.8v143h-68.1v-138.5c0-29.5-13-47.7-43.5-47.7-32.7 
                        0-54.6 22.7-54.6 61.2v124.8h-68.1v-235.8h68.1v25z"/>
            </svg>
            <motion.h1
                ref={h1Ref}
                className='worktitle sageworld !w-[12em] sm:!text-[1.3em] lg:!text-[1.4em] thernaly tracking-widest'>
                Logistics Coordinator
            </motion.h1>
        </div>
     );
}
 
export default E2SVG;
