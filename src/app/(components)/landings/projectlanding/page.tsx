"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image"; // Import the Image component from Next.js
import MOVINGTEXT from "../../../lib/movingtext/page";

gsap.registerPlugin(ScrollTrigger);

const ProjectLanding = () => {
    // Refs for the elements to animate
    const projectHighlightRef = useRef(null);
    const projectCard1Ref = useRef(null);
    const projectCard2Ref = useRef(null);
    const projectCard3Ref = useRef(null);
    const movingTextRef = useRef(null);

    // GSAP context for cleanup
    const ctx = useRef<gsap.Context | null>(null);

    useEffect(() => {
        ctx.current = gsap.context(() => {
            gsap.from(projectHighlightRef.current, {
                opacity: 0,
                y: 20,
                duration: 1,
                scrollTrigger: {
                    trigger: projectHighlightRef.current,
                    start: "top+=200px 90%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse", // Play animation when in view, reverse when out of view
                },
            });

            // Animation for the first project card (left)
            gsap.from(projectCard1Ref.current, {
                opacity: 0,
                x: -100,
                duration: 1,
                scrollTrigger: {
                    trigger: projectCard1Ref.current,
                    start: "top+=250px 90%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            });

            // Animation for the second project card (right)
            gsap.from(projectCard2Ref.current, {
                opacity: 0,
                x: 100,
                duration: 1,
                scrollTrigger: {
                    trigger: projectCard2Ref.current,
                    start: "top+=250px 90%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            });

            // Animation for the third project card (bottom)
            gsap.from(projectCard3Ref.current, {
                opacity: 0,
                y: 100,
                duration: 1,
                scrollTrigger: {
                    trigger: projectCard3Ref.current,
                    start: "top 90%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            });

            // Animation for the moving text
            gsap.from(movingTextRef.current, {
                opacity: 0,
                x: -100,
                duration: 1,
                scrollTrigger: {
                    trigger: movingTextRef.current,
                    start: "top 95%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            });
        });

        // Refresh ScrollTrigger on component mount
        ScrollTrigger.refresh();

        // Cleanup function to revert GSAP context
        return () => {
            if (ctx.current) {
                // Null check
                ctx.current.revert(); // Reverts all GSAP animations and ScrollTriggers
            }
        };
    }, []);

    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex flex-col w-full justify-center items-center mt-6 mb-6">
                <div className="flex w-full h-16 justify-center items-center" ref={projectHighlightRef}>
                    <span className="flex h-full w-full items-center justify-center text-4xl sm:text-5xl lg:text-6xl thernaly text-black">
                        Project Highlights
                    </span>
                </div>
                <div className="flex flex-col justify-center items-center gap-8 lg:gap-16 xl:gap-24 mt-8">
                    <div className="flex flex-col sm:flex-row gap-8 lg:gap-16 xl:gap-24">
                        <div
                            className="imagesize md:!h-[18em] md:!w-[22em] lg:!h-[22em] lg:!w-[28em] xl:!h-[24em] xl:!w-[34em]"
                            ref={projectCard1Ref}
                        >
                            <Image
                                src="/pngs/prodcon.png" // Path to your image
                                alt="Producer Consumer Simulation" // Meaningful alt text
                                width={500} // Set the width of the image
                                height={300} // Set the height of the image
                                className="projectimage md:!h-[18em] md:!w-[22em] lg:!h-[22em] lg:!w-[28em] xl:!h-[24em] xl:!w-[34em]"
                                priority // Use if the image is above the fold
                            />
                            <h1 className="worktitle sageworld !w-[18em] sm:!text-[1.2em] lg:!text-[1.4em] thernaly tracking-widest">
                                Producer/Consumer CPU Simulation
                            </h1>
                        </div>
                        <div
                            className="imagesize md:!h-[18em] md:!w-[22em] lg:!h-[22em] lg:!w-[28em] xl:!h-[21em] xl:!w-[34em]"
                            ref={projectCard2Ref}
                        >
                            <Image
                                src="/pngs/TortilleriaPhoto.png" // Path to your image
                                alt="Tortilleria Y Taqueria Mi Tierra" // Meaningful alt text
                                width={500} // Set the width of the image
                                height={300} // Set the height of the image
                                className="projectimage md:!h-[18em] md:!w-[22em] lg:!h-[22em] lg:!w-[28em] xl:!h-[21em] xl:!w-[34em]"
                            />
                            <h1 className="worktitle sageworld !w-[17em] sm:!text-[1.2em] lg:!text-[1.4em] thernaly tracking-widest">
                                Tortilleria Y Taqueria Mi Tierra
                            </h1>
                        </div>
                    </div>
                    <div
                        className="imagesize md:!h-[18em] md:!w-[22em] lg:!h-[22em] lg:!w-[28em] xl:!h-[24em] xl:!w-[34em]"
                        ref={projectCard3Ref}
                    >
                        <Image
                            src="/pngs/ThreeJS.png" // Path to your image
                            alt="ThreeJS 3D Scene" // Meaningful alt text
                            width={500} // Set the width of the image
                            height={300} // Set the height of the image
                            className="projectimage md:!h-[18em] md:!w-[22em] lg:!h-[22em] lg:!w-[28em] xl:!h-[24em] xl:!w-[34em]"
                        />
                        <h1 className="worktitle sageworld !w-[12.4em] sm:!text-[1.2em] lg:!text-[1.4em] thernaly tracking-widest">
                            ThreeJS & WebGL Scene
                        </h1>
                    </div>
                </div>
            </div>
            <div ref={movingTextRef}>
                <MOVINGTEXT href="/projects" text="CLICK TO SEE MORE PROJECTS" initialX="-100%" animateX="0%" />
            </div>
        </div>
    );
};

export default ProjectLanding;