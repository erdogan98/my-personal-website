import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
    const projects = [
        {
            name: "Project One",
            description:
                "Exploring advanced deep learning for natural language processing.",
            link: "https://github.com/username/project-one",
        },
        {
            name: "Project Two",
            description:
                "Data-driven system that applies predictive analytics in supply chain optimization.",
            link: "https://github.com/username/project-two",
        },
        {
            name: "Project Three",
            description:
                "A web application leveraging AI-based recommendation systems for personalized user experiences.",
            link: "https://github.com/username/project-three",
        },
    ];

    return (
        <section className="projects-section">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project, idx) => (
                    <motion.div
                        className="project-card glass"
                        key={idx}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="project-link"
                        >
                            View on GitHub
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
