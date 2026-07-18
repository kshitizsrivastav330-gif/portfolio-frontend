import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
    return (
        <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.7,
                delay: index * 0.2,
            }}
        >
            {/* Image */}

            <div className="project-image">

                <img
                    src={project.image}
                    alt={project.title}
                />

                {/* Hover Overlay */}

                <div className="project-overlay">

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="overlay-btn"
                    >
                        <FaGithub />
                    </a>

                    {
                        project.live !== "#" && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                className="overlay-btn"
                            >
                                <FaExternalLinkAlt />
                            </a>
                        )
                    }

                </div>

            </div>

            {/* Content */}

            <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">

                    {
                        project.tech.map((tech) => (

                            <span key={tech}>
                {tech}
              </span>

                        ))
                    }

                </div>

                <div className="project-buttons">

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="github-btn"
                    >
                        <FaGithub />
                        GitHub
                    </a>

                    {
                        project.live !== "#" && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                className="live-btn"
                            >
                                <FaExternalLinkAlt />
                                Live Demo
                            </a>
                        )
                    }

                </div>

            </div>

        </motion.div>
    );
}