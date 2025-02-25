"use client"
import React, { useEffect, useRef } from 'react';
import { motion } from "motion/react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger) 

interface TargetProps {
    yScrollValue?: number;
}

const TargetSVG: React.FC<TargetProps> = ({ yScrollValue = 0 }) => {

    const svgRef = useRef<SVGSVGElement | null>(null);
    const h1Ref = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        const svgElement = svgRef.current;
        const h1Element = h1Ref.current;
        if (!svgElement || !h1Element) return;

        // Select the paths and polylines within the SVG
        const paths = svgElement.querySelectorAll('path, polyline');

        // Set initial styles
        gsap.set(paths, {
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
            .to(paths, {
                strokeDashoffset: 0,
                duration: 2,
                ease: 'none'
            }).to(paths, {
                fill: '#CC0000',
                fillOpacity: 1,
                duration: 0.5,
                ease: 'power1.inOut'
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
        <div className='flex flex-col w-full items-center'>
            <svg version="1.2" 
                baseProfile="tiny" 
                id="Layer_1" 
                xmlns="http://www.w3.org/2000/svg" 
                x="0px" y="0px" 
                viewBox="0 0 1911.1 386.9" 
                ref={svgRef}>
                <g>
                    <g>
                        <path 
                            fill="none" 
                            stroke="#CC0000" 
                            strokeWidth="4" 
                            d="M193.4,322.5c-71.2,0-129.1-57.7-129.1-129c0-71.4,57.8-129.1,129.1-129.1c71.3,0,129,57.7,129,129.1
                            C322.4,264.8,264.7,322.5,193.4,322.5 M193.4,0C86.6,0,0,86.6,0,193.5c0,106.8,86.6,193.4,193.4,193.4
                            c106.8,0,193.6-86.6,193.6-193.4C387,86.6,300.2,0,193.4,0z"/>
                        <path 
                            fill="none" 
                            stroke="#CC0000" 
                            strokeWidth="4" 
                            d="M193.4,127.2c-36.6,0-66.3,29.6-66.3,66.3c0,36.6,29.7,66.3,66.3,66.3c36.6,0,66.4-29.7,66.4-66.3
                            C259.8,156.8,230,127.2,193.4,127.2"/>
                        <polyline 
                            fill="none" 
                            stroke="#CC0000" 
                            strokeWidth="4" 
                            points="487.2,106.9 404.9,106.9 404.9,56.1 629.9,56.1 629.9,106.9 547.6,106.9 547.6,330.8 
                            487.2,330.8 487.2,106.9"/>
                        <path 
                            fill="none" 
                            stroke="#CC0000" 
                            strokeWidth="4" 
                            d="M603.7,330.8h61.1l21.6-61.2h102.7l20.8,61.2h62.7L769.9,56.1H708L603.7,330.8 M738,123.8h0.8l34.6,100.8
                            h-71.1L738,123.8z"/>
                        <path 
                            fill="none" 
                            stroke="#CC0000" 
                            strokeWidth="4" 
                            d="M896.4,330.8h60.4V223.5h60.4c30.4,0,41.6,12.7,45.8,41.5c3.1,21.9,2.3,48.5,9.6,65.8h60.4
                            c-10.8-15.4-10.4-47.7-11.5-65c-1.9-27.7-10.4-56.6-40-64.2v-0.8c30.4-12.3,43.5-36.5,43.5-68.9c0-41.5-31.2-75.8-80.4-75.8H896.4
                            L896.4,330.8 M956.8,103h66.2c26.9,0,41.5,11.5,41.5,38.1c0,27.7-14.6,39.2-41.5,39.2h-66.2V103z"/>
                        <path 
                            fill="none" 
                            stroke="#CC0000" 
                            strokeWidth="4" 
                            d="M1364.9,299.6c-21.2,27.4-48.8,37.8-75.4,37.8c-85,0-135-63.6-135-142.8c0-81.5,50-144.9,135-144.9
                            c56.1,0,109.2,34.6,115.8,96.9h-57.7c-6.9-30.4-29.6-46.1-58.1-46.1c-54.2,0-74.7,46.1-74.7,94.2c0,45.8,20.4,91.9,74.7,91.9
                            c39.2,0,61.9-21.1,65.4-59.2h-60.7v-45h115.4v148.5H1371L1364.9,299.6"/>
                        <polyline 
                            fill="none" 
                            stroke="#CC0000" 
                            strokeWidth="4" 
                            points="1450.7,56.1 1656,56.1 1656,106.9 1511.1,106.9 1511.1,165.7 1644.2,165.7 1644.2,212.7 
                            1511.1,212.7 1511.1,280 1659.2,280 1659.2,330.8 1450.7,330.8 1450.7,56.1"/>
                        <polyline 
                            fill="none" 
                            stroke="#CC0000" 
                            strokeWidth="4" 
                            points="1768.4,106.9 1686.1,106.9 1686.1,56.1 1911.1,56.1 1911.1,106.9 1828.8,106.9 1828.8,330.8 
                            1768.4,330.8 1768.4,106.9"/>
                    </g>
                </g>
            </svg>
            <motion.h1
                ref={h1Ref} 
                className='worktitle thernaly !w-[12.7em] sm:!text-[1.3em] lg:!text-[1.4em] tracking-widest '>
                Fulfillment Specialist
            </motion.h1>
        </div>
     );
}
 
export default TargetSVG;