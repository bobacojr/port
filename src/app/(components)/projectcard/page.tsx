import React from 'react';
import { motion } from 'motion/react';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
}

/*
<div className="flex flex-col w-full h-screen mt-1">
    <motion.div className="project-grid">
    {projects.map((project, index) => (
        <PROJECTCARD key={index} title={project.image} description={project.description} image={project.image}/>
        ))}
    </motion.div>
</div> 
*/

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image }) => {
    return (
        <motion.div 
            className='projectcard'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            <img src={image} alt={title} className="projectcard-image" />
            <h3>{title}</h3>
            <p>{description}</p>
        </motion.div>
    );
}

export default ProjectCard;