import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image'; // Import the Image component from Next.js

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image }) => {
    return (
        <motion.div 
            className='projectcard'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {/* Replace the img tag with the Image component */}
            <div className="projectcard-image">
                <Image
                    src={image}
                    alt={title}
                    width={500} // Set the width of the image
                    height={300} // Set the height of the image
                    layout="responsive" // Adjust the layout as needed
                    objectFit="cover" // Ensure the image covers the container
                />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </motion.div>
    );
}

export default ProjectCard;