"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion } from "motion/react";
import NAVBAR from "../(components)/navbar/page";
import * as variants from "../(components)/animations/animationvariants/page";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const [isComplete, setIsComplete] = useState(false);

    const prodconRef = useRef<HTMLDivElement>(null);
    const tortRef = useRef<HTMLDivElement>(null);
    const threeRef = useRef<HTMLDivElement>(null);
    const chessRef = useRef<HTMLDivElement>(null);
    const doomRef = useRef<HTMLDivElement>(null);
    const knightRef = useRef<HTMLDivElement>(null);
    const chrisRef = useRef<HTMLDivElement>(null);

    const ctx = useRef<gsap.Context | null>(null);

    useEffect(() => {
        window.scrollTo(0,0);

        ctx.current = gsap.context(() => {
            gsap.from(prodconRef.current, {
                opacity: 0,
                x: "-200%",
                duration: 0.8,
                scrollTrigger: {
                trigger: prodconRef.current,
                start: 'top 60%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
                },
            });
            gsap.from(tortRef.current, {
                opacity: 0,
                x: "200%",
                duration: 0.8,
                scrollTrigger: {
                trigger: tortRef.current,
                start: 'top 60%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
                },
            });
            gsap.from(threeRef.current, {
                opacity: 0,
                x: "-200%",
                duration: 0.8,
                scrollTrigger: {
                trigger: threeRef.current,
                start: 'top 60%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
                },
            });
            gsap.from(chessRef.current, {
                opacity: 0,
                x: "200%",
                duration: 0.8,
                scrollTrigger: {
                trigger: chessRef.current,
                start: 'top 60%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
                },
            });
            gsap.from(doomRef.current, {
                opacity: 0,
                x: "-200%",
                duration: 0.8,
                scrollTrigger: {
                trigger: doomRef.current,
                start: 'top 60%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
                },
            });
            gsap.from(knightRef.current, {
                opacity: 0,
                x: "200%",
                duration: 0.8,
                scrollTrigger: {
                trigger: knightRef.current,
                start: 'top 60%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
                },
            });
            gsap.from(chrisRef.current, {
                opacity: 0,
                x: "-200%",
                duration: 0.8,
                scrollTrigger: {
                trigger: chrisRef.current,
                start: 'top 65%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
                },
            });
        });
        ScrollTrigger.refresh();
        return () => {
            if (ctx.current) {
                ctx.current.revert();
            }
        };
    }, []);

    return (
        <motion.div
                key={"projects-page"}
                className="flex flex-col w-full h-full overflow-x-hidden"
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "-100%" }}
                transition={{ duration: 0.8 }}
                onAnimationComplete={() => {setIsComplete(true)}}
                >
                <motion.div className="flex w-full h-20 xl:h-24 items-center justify-center" id="navbar-container" variants={variants.navbarAnimationVariant} initial='initial' animate={isComplete ? 'animate' : 'initial'}>
                    <NAVBAR />
                </motion.div>
            <div className="flex flex-col w-full h-full items-center justify-center">

                <motion.div className='flex flex-col lg:flex-row justify-center items-center ml-3 mr-3 lg:mb-6 xl:ml-16 xl:mr-16' ref={prodconRef}>
                    <motion.div className="flex flex-col w-full sm:w-[28em] xl:w-[40em]">
                        <h1 className='flex justify-center items-center thernaly tracking-widest text-sm sm:text-xl xl:text-3xl'>
                            Producer/Consumer CPU Simulation
                        </h1>
                        <div className='flex flex-row'>
                            <Image src="/pngs/prodcon.png" width={640} height={360} className="sm:w-[28em] xl:w-[40em] border-2 border-mygray rounded-[30px]" alt='Producer Consumer Simulation'/>
                        </div>
                    </motion.div>
                    <p className='w-[90%] lg:w-[40%] mb-10 mt-3 lg:ml-3 lg:mt-10 text-sm xl:text-lg'>
                        This was my first Django Python project ever, and I had a ton of fun with it! The original project came from my colleges Operating Systems Concepts class, and I wanted
                        to make my own frontend addition to it. The main goal of this project was to simulate the producer-consumer problem and how one can utilize semaphores and mutexes to solve
                        the problem. I used Celery with Redis as a message broker & task queue for this project, and set up a MySQL server on my local machine for storing all of my data.
                    </p>
                </motion.div>

                <motion.div className='flex flex-col lg:flex-row justify-center items-center mr-3 ml-3 lg:mb-6 xl:ml-16 xl:mr-16' ref={tortRef}>
                    <motion.div className="flex flex-col w-full sm:w-[28em] xl:w-[40em]">
                        <h1 className='flex justify-center items-center thernaly tracking-widest text-sm sm:text-xl xl:text-3xl'>
                            Tortilleria Y Taqueria Mi Tierra
                        </h1>
                        <div className='flex flex-row'>
                            <Image src="/pngs/TortilleriaPhoto.png" width={640} height={360} className="sm:w-[28em] xl:w-[40em] border-2 border-mygray rounded-[30px]" alt='Tortilleria Y Taqueria Mi Tierra'/>
                        </div>
                    </motion.div>
                    <p className='w-[90%] lg:w-[40%] mb-10 mt-3 lg:ml-3 lg:mt-10 text-sm xl:text-lg'>
                        This was my first freelance job I have ever done, and I had the honor of doing it for one of my best friends. Him and his family own a mexican restaurant named
                        Tortilleria Y Taqueria Mi Tierra, and they make some of the BEST food you will ever have. For this project I had to teach myself how to use Gimp to edit photos/images,
                        how to use colors & color palettes correctly, the ins-and-outs of font selection, how to setup the OSM API, proper responsive design, and much more! I am very proud of what I created,
                        and I am even happier to help connect others all around the world to this amazing family and their delicious food.
                    </p>
                </motion.div>

                <div className='flex flex-col lg:flex-row justify-center items-center ml-3 mr-3 lg:mb-6 xl:ml-16 xl:mr-16' ref={threeRef}>
                    <motion.div className="flex flex-col w-full sm:w-[28em] xl:w-[40em]">
                        <h1 className='flex justify-center items-center thernaly tracking-widest text-sm sm:text-xl xl:text-3xl'>
                            ThreeJS & WebGL Scene
                        </h1>
                        <div className='flex flex-row'>
                            <Image src="/pngs/ThreeJS.png" width={640} height={360} className="sm:w-[28em] xl:w-[40em] border-2 border-mygray rounded-[30px]" alt='ThreeJS 3D Scene'/>
                        </div>
                    </motion.div>
                    <p className='w-[90%] lg:w-[40%] mb-2 mt-3 lg:ml-3 lg:mt-10 text-sm xl:text-lg'>
                        Originally, this was going to be my new portfolio website before I decided to make my current one. I wanted to experiment with graphic design and 3D modeling, so
                        I decided to start to research WebGL, ThreeJS, and Blender. Over the course of 2 months I was able to teach myself the basics of all 3 of these topics, creating different models in Blender. I then learned the basics of WebGL and ThreeJS so that I could import these models into my project to see them on my webpage. At this point in the project
                        my webpage was taking up about 90MB of resources. This was caused by the mass amount of polygons & vertices I had in one of my scenes (the scene in question is just a bunch clouds I made out
                        of geometry nodes).
                    </p>
                </div>

                <div className='flex flex-col lg:flex-row justify-center items-center mr-3 ml-3 lg:mb-6 xl:ml-16 xl:mr-16' ref={chessRef}>
                    <motion.div className="flex flex-col w-full sm:w-[28em] xl:w-[40em]">
                        <h1 className='flex justify-center items-center thernaly tracking-widest text-sm sm:text-xl xl:text-3xl'>
                            Python/Pygame Chess
                        </h1>
                        <div className='flex flex-row'>
                            <Image src="/pngs/chess.png" width={640} height={360} className="sm:w-[28em] xl:w-[40em] border-2 border-mygray rounded-[30px]" alt='Chess'/>
                        </div>
                    </motion.div>
                    <p className='w-[90%] lg:w-[40%] mb-10 mt-3 lg:ml-3 lg:mt-10 text-sm xl:text-lg'>
                        This was my final project in my last core computer science class. Not much to say here except that it was a great experience, and I always come back to this project and play it before my classes. Me and my partner
                        were the only students in the class to completely finish the project, and we were also able to add En passant & Castling capabilities as well. You can either play with a friend, or fight against a basic chess AI!
                    </p>
                </div>

                <div className='flex flex-col lg:flex-row justify-center items-center ml-3 mr-3 lg:mb-6 xl:ml-16 xl:mr-16' ref={doomRef}>
                    <motion.div className="flex flex-col w-full sm:w-[28em] xl:w-[40em]">
                        <h1 className='flex justify-center items-center thernaly tracking-widest text-sm sm:text-xl xl:text-3xl'>
                            Doom Inspired Python Game
                        </h1>
                        <div className='flex flex-row'>
                            <Image src="/pngs/Doom.png" width={640} height={360} className="sm:w-[28em] xl:w-[40em] border-2 border-mygray rounded-[30px]" alt='Doom'/>
                        </div>
                    </motion.div>
                    <p className='w-[90%] lg:w-[40%] mb-10 mt-3 lg:ml-3 lg:mt-10 text-sm xl:text-lg'>
                        This was a group project that me and my team completed in our Introduction to Software Engineering course. For our semester long project we decided to create a clone of a Doom/Wolfenstein mashup in python. To create the 
                        game we had utilize raycasting techniques and 3D projection. I had a lot of fun with this project and learned a lot about textures, object rendering, raycasting, and pixel sprite creation.
                    </p>
                </div>

                <div className='flex flex-col lg:flex-row justify-center items-center ml-3 mr-3 lg:mb-6 xl:ml-16 xl:mr-16' ref={knightRef}>
                    <motion.div className="flex flex-col w-full sm:w-[28em] xl:w-[40em]">
                        <h1 className='flex justify-center items-center thernaly tracking-wider text-sm sm:text-xl xl:text-3xl'>
                            Python/Pygame Jumping Knight Game
                        </h1>
                        <div className='flex flex-row'>
                            <Image src="/pngs/dungeon.png" width={640} height={360} className="sm:w-[28em] xl:w-[40em] border-2 border-mygray rounded-[30px]" alt='Dungeon Jumper'/>
                        </div>
                    </motion.div>
                    <p className='w-[90%] lg:w-[40%] mb-10 mt-3 lg:ml-3 lg:mt-10 text-sm xl:text-lg'>
                        This project is super simple, and I made it because I was bored and wanted something to do. So, I decided to get back into python and try to make a simple game using my new skills gained from the Doom project mentioned previously.
                        The goal of the game is to jump over the guys on the ground and not accidentally jump into a flying bat, or else you lose!
                    </p>
                </div>

                <div className='flex flex-col lg:flex-row justify-center items-center ml-3 mr-3 lg:mb-6 xl:ml-16 xl:mr-16' ref={chrisRef}>
                    <motion.div className="flex flex-col w-full sm:w-[28em] xl:w-[40em]">
                        <h1 className='flex justify-center items-center thernaly tracking-wider text-sm sm:text-xl xl:text-3xl'>
                            Saving Christmas - Amazon Web Scraper
                        </h1>
                        <div className='flex flex-row'>
                            <Image src="/pngs/savingchristmas.png" width={640} height={360} className="sm:w-[28em] xl:w-[40em] border-2 border-mygray rounded-[30px]" alt='Saving Christmas'/>
                        </div>
                    </motion.div>
                    <p className='w-[90%] lg:w-[40%] mb-10 mt-3 lg:ml-3 lg:mt-10 text-sm xl:text-lg'>
                        I created this project in 2023 around christmas time with the goal of giving this application to my family so they could find and track Amazon items quickly and efficiently. I used Axios (promise-based HTTP client, handles 
                        HTTP/API requests) and Cheerio (parse/manipulate HTML and XML using a syntax similar to JQuery) for scraping and HTTP requests. After creating an account you can save and track any Amazon item by copying the target items webpage 
                        URL and pasting it into the searchbar located on the application. If any value that was parsed from the item is changed, the user tracking that item will recieve an email (used EmailJS) containing the updated changes. 
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default Projects;
