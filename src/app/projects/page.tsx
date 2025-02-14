"use client"
import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import NAVBAR from "../(components)/navbar/page";
import * as variants from "../(components)/animationvariants/page";

const Projects = () => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key="projects-page"
                className="flex flex-col w-full h-full overflow-x-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div className="flex w-full h-20 xl:h-24 items-center justify-center" id="navbar-container" variants={variants.navbarAnimationVariant} initial='initial' animate='animate'>
                    <NAVBAR />
                </motion.div>
                <div className="flex flex-col w-full h-full items-center justify-center">
                    <motion.div className="flex flex-col w-full">
                        <h1 className='flex justify-center items-center thernaly tracking-widest text-sm'>
                            Producer/Consumer CPU Simulation
                        </h1>
                        <div className='flex flex-row justify-center'>
                            <img src={"./prodcon.png"} className="w-[90%] border-2 border-mygray rounded-[30px]"/>
                        </div>
                    </motion.div>
                    <p className='w-[90%] mb-10 mt-3'>
                        This was my first Django Python project ever, and I had a ton of fun with it! The original project came from my college's Operating Systems Concepts class, and I wanted
                        to make my own frontend addition to it. The main goal of this project was to simulate the producer-consumer problem and how one can utilize semaphores and mutexes to solve
                        the problem. I used Celery with Redis as a message broker & task queue for this project, and set up a MySQL server on my local machine for storing all of my data.
                    </p>

                    <motion.div className="flex flex-col w-full">
                        <h1 className='flex justify-center items-center thernaly tracking-widest text-sm'>
                            Tortilleria Y Taqueria Mi Tierra
                        </h1>
                        <div className='flex flex-row justify-center'>
                            <img src={"./TortilleriaPhoto.png"} className="w-[90%] border-2 border-mygray rounded-[30px]"/>
                        </div>
                    </motion.div>
                    <p className='w-[90%] mb-10 mt-3'>
                        This was my first freelance job I have ever done, and I had the honor of doing it for one of my best friends. Him and his family own a mexican restaurant named
                        Tortilleria Y Taqueria Mi Tierra, and they make some of the BEST food you will ever have. For this project I had to teach myself how to use Gimp to edit photos/images,
                        how to use colors & color palettes correctly, the ins-and-outs of font selection, how to setup the OSM API, proper responsive design, and much more! I am very proud of what I created,
                        and I am even happier to help connect others all around the world to this amazing family and their delicious food.
                    </p>

                    <motion.div className="flex flex-col w-full">
                        <h1 className='flex justify-center items-center thernaly tracking-widest text-sm'>
                            ThreeJS & WebGL Scene
                        </h1>
                        <div className='flex flex-row justify-center'>
                            <img src={"./ThreeJS.png"} className="w-[90%] border-2 border-mygray rounded-[30px]"/>
                        </div>
                    </motion.div>
                    <p className='w-[90%] mb-10 mt-3'>
                        Funny story for this project! Originally, this was going to be my new portfolio website before I decided to make my current one. I wanted to experiment with graphic design and 3D modeling, so
                        I decided to start to research WebGL, ThreeJS, and Blender! Over the course of 2 months I was able to teach myself the basics of all 3 of these topics, creating different models in Blender such as a 3D airplane,
                        3D polygonal clouds, and many different objects! I then learned the basics of WebGL and ThreeJS so that I could import these models into my project to see them on my webpage. At this point in the project
                        my webpage was taking up about 90MB of resources which is not good!!! This was caused by the mass amount of polygons & vertices I had in one of my scenes (the scene in question is just a bunch clouds I made out
                        of geometry nodes). I am very happy with the final product, and this was one of the most important learning experiences I have ever had.
                    </p>

                    <motion.div className="flex flex-col w-full">
                        <h1 className='flex justify-center items-center thernaly tracking-widest text-sm'>
                            Python/Pygame Chess
                        </h1>
                        <div className='flex flex-row justify-center'>
                            <img src={"./chess.png"} className="w-[90%] border-2 border-mygray rounded-[30px]"/>
                        </div>
                    </motion.div>
                    <p className='w-[90%] mb-10 mt-3'>
                        This was my final project in my last core computer science class. Not much to say here except that it was a great experience, and I always come back to this project and play it before my classes. Me and my partner
                        were the only students in the class to completely finish the project, and we were also able to add En passant & Castling capabilities as well. You can either play with a friend, or fight against a basic chess AI!
                    </p>

                    <motion.div className="flex flex-col w-full">
                        <h1 className='flex justify-center items-center thernaly tracking-widest text-sm'>
                            Doom Inspired Python Game
                        </h1>
                        <div className='flex flex-row justify-center'>
                            <img src={"./Doom.png"} className="w-[90%] border-2 border-mygray rounded-[30px]"/>
                        </div>
                    </motion.div>
                    <p className='w-[90%] mb-10 mt-3'>
                        This was a group project that me and my team completed in our Introduction to Software Engineering course. For our semester long project we decided to create a clone of a Doom/Wolfenstein mashup in python. To create the 
                        game we had utilize raycasting techniques and 3D projection. I had a lot of fun with this project and learned a lot about textures, object rendering, raycasting, and pixel sprite creation.
                    </p>

                    <motion.div className="flex flex-col w-full">
                        <h1 className='flex justify-center items-center thernaly tracking-widest text-sm'>
                            Python/Pygame Jumping Knight Game
                        </h1>
                        <div className='flex flex-row justify-center'>
                            <img src={"./dungeon.png"} className="w-[90%] border-2 border-mygray rounded-[30px]"/>
                        </div>
                    </motion.div>
                    <p className='w-[90%] mb-10 mt-3'>
                        This project is super simple, and I made it because I was bored and wanted something to do. So, I decided to get back into python and try to make a simple game using my new skills gained from the Doom project mentioned previously.
                        The goal of the game is to jump over the guys on the ground and not accidentally jump into a flying bat, or else you lose!
                    </p>

                    <motion.div className="flex flex-col w-full">
                        <h1 className='flex justify-center items-center thernaly tracking-widest text-sm'>
                            Saving Christmas - Amazon Web Scraper
                        </h1>
                        <div className='flex flex-row justify-center'>
                            <img src={"./savingchristmas.png"} className="w-[90%] border-2 border-mygray rounded-[30px]"/>
                        </div>
                    </motion.div>
                    <p className='w-[90%] mb-10 mt-3'>
                        I created this project in 2023 around christmas time with the goal of giving this application to my family so they could find and track Amazon items quickly and efficiently. I used Axios (promise-based HTTP client, handles 
                        HTTP/API requests) and Cheerio (parse/manipulate HTML and XML using a syntax similar to JQuery) for scraping and HTTP requests. After creating an account you can save and track any Amazon item by copying the target items webpage 
                        URL and pasting it into the searchbar located on the application. If any value that was parsed from the item is changed, the user tracking that item will recieve an email (used EmailJS) containing the updated changes. 
                    </p>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default Projects;
