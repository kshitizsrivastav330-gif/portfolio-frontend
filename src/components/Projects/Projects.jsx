import "./Projects.css";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "../../data/projects";

export default function Projects() {
    return (
        <section className="projects section" id="projects">
            <div className="container">

                {/* Section Heading */}
                <motion.div
                    className="section-heading"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span>MY WORK</span>

                    <h2>Featured Projects</h2>

                    <p className="projects-subtitle">
                        Here are some of the projects I've built using
                        Java, Spring Boot, React and modern web technologies.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="projects-grid">

                    {projects.map((project, index) => (

                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />

                    ))}

                </div>

            </div>
        </section>
    );
}