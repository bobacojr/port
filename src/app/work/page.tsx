'use client'
import React, { useState } from 'react';
import { AnimatePresence, motion } from "motion/react";
import NAVBAR from "../(components)/navbar/page";
import * as variants from "../(components)/animations/animationvariants/page";
import GFSSVG from '../(components)/svgs/gfssvg/page';
import E2SVG from '../(components)/svgs/e2svg/page';
import TargetSVG from '../(components)/svgs/targetsvg/page';

const Work = () => {
    const [isComplete, setIsComplete] = useState(false);

    return ( 
        <AnimatePresence mode="wait">
            <motion.div
                key={"work-page"}
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
                <div className='flex flex-col w-full h-full justify-center items-center'>
                    <motion.div className='w-[18em] sm:w-[28em] xl:w-[40em] flex flex-col justify-center items-center mb-6' id='gfs-title'>
                        <GFSSVG/>
                        <motion.div className='work-border flex w-full mt-3'>
                            <span className='m-2'>
                                -Provided 1st and 2nd tier technical support to 180+ GFS stores involving hardware and software issues for a wide variety of devices and systems.<br/>
                                -Performed regular device and system maintenance to Verifone pin pads, multiple Zebra products (TC77/52, ET45/40, RS5100, ZQ series portable printers, VC8300 Vehicle Mount Computer, DS8178, CR8178, etc.)
                                Lexmark & Xerox printers, Toshiba POS systems, UPS devices, Zoom & Panasonic phone systems, SLT phones, Cisco network equipment (switches, routers, etc.), Avigilon security systems, Windows PCs, Weighing systems 
                                sourced from Rice Lake Weighing Systems, and more.<br/>
                                -Worked with different software tools such as Confluence, Jira, Upshop, Netbox, Corrigo, ServiceNow, Soti (MDM), SolarWinds, Nagios, VHQ, X20, and more.<br/>
                                -Managed the ticket queue resolving 260+ ServiceNow tickets and Corrigo work orders in my first 4 months.<br/>
                                -Managed the IT department depot by running audits, organizing the inventory, shipping replacement devices to stores, returning damaged devices to the main office, and working with
                                different vendors to have broken devices repaired.<br/>
                                -Played a key role integrating pin pad security labels into all GFS store locations by shipping the labels to each location while monitoring our pinpad audit form to ensure each store was participating.<br/>
                                -Utilized AppScript to link together UPS shipping updates, ServiceNow tickets, and Corrigo work orders, by parsing through my emails to grab specific data and place it into a spreadsheet.<br/>
                                -Developed troubleshooting guides and general documentation with Confluence, as well as updating outdated information in existing documents.<br/>
                                -Went on-site to install new equipment at multiple GFS store locations throughout michigcan such as pin pads, POS systems, switches, routers, scanners, etc.
                            </span>
                        </motion.div>
                    </motion.div>
                        <motion.div className='w-[18em] sm:w-[28em] xl:w-[40em] flex flex-col justify-center items-center mb-6' id='gfs-title'>
                            <E2SVG/>
                            <motion.div className='work-border flex w-full mt-3'>
                                <span className='flex m-2'>
                                    -Worked with a team managing the transportation and distribution services for Bob Evans and Michael Foods in the United States.<br/>
                                    -Provided logistics services for customer’s supply chain operations such as planning, routing, appointing, tracking, and payment.<br/>
                                    -Monitored the status of KPIs including on time performance, tender acceptance, and routing guide compliance.<br/>
                                    -Reviewed all lumper receipts submitted by drivers, approving or denying charges based on submitted documents, time stamps, and signatures.<br/>
                                    -Reviewed flagged shipments to either approve, deny, and/or reconcile costs.<br/>
                                    -Selected and routed tenders to carriers defined by routing guide(s).<br/>
                                    -Managed appointment scheduling requirements relative to a delivery plan to optimize the highest levels of service at the lowest cost.<br/>
                                    -Tracked execution of loads against relevant milestones to identify any risks to a successful delivery, offer solutions or recommendations to all known risks, 
                                    and to keep relevant stakeholders informed with status updates.<br/>
                                    -Acted as the first line of support for our stakeholders & carriers when any urgent issues arose.
                                </span>
                            </motion.div>
                        </motion.div>
                    <motion.div className='w-[18em] sm:w-[28em] xl:w-[40em] flex flex-col justify-center items-center mb-6' id='gfs-title'>
                        <TargetSVG/>
                        <motion.div className='work-border flex w-full mt-3 mb-24'>
                            <span className='flex m-2'>
                                -Worked as a Fulfillment Expert Opener/Closer, Guest Advocate, Specialty Sales Consultant, Stocking Associate, General Merchandise & Food Associate, and Fulfillment Trainer.<br/>
                                -Trained the entire Fulfillment staff at my store making us the most profitable online ordering location during my time there.
                                -Held the record for overall fastest fulfillment order completion time and items picked at my store location.<br/>
                                -Held the record for most items pulled from the backroom at my store location.<br/>
                                -Awarded team member of the month for outstanding performance.<br/>
                            </span>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
     );
}
 
export default Work;