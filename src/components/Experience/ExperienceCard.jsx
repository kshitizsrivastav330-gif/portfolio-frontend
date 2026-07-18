import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ExperienceCard({ item, index }) {
    return (
        <motion.div
            className={`experience-card ${index % 2 === 0 ? "left" : "right"}`}
            initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <span className="experience-type">{item.type}</span>

            <h3>{item.title}</h3>

            <h4>{item.company}</h4>

            <div className="experience-meta">
                <span>{item.duration}</span>
                <span>{item.location}</span>
            </div>

            <p>{item.description}</p>

            <div className="experience-tech">
                {item.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                ))}
            </div>

            <div className="experience-buttons">
                {item.github && (
                    <a
                        href={item.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub />
                        GitHub
                    </a>
                )}

                {item.demo && (
                    <a
                        href={item.demo}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaExternalLinkAlt />
                        Live Demo
                    </a>
                )}
            </div>
        </motion.div>
    );
}