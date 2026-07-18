import "./Experience.css";
import { motion } from "framer-motion";
import experienceData from "../../data/experienceData";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
    return (
        <section className="experience" id="experience">
            <div className="container">

                {/* Section Header */}
                <motion.div
                    className="experience-header"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
          <span className="experience-subtitle">
            My Experience
          </span>

                    <h2 className="experience-title">
                        Professional <span>Experience</span>
                    </h2>

                    <p className="experience-description">
                        I gained hands-on experience building scalable Java Spring Boot
                        applications, REST APIs, React frontends, and modern full-stack
                        web solutions through internship and personal projects.
                    </p>
                </motion.div>

                {/* Timeline */}

                <div className="timeline">

                    <div className="timeline-line"></div>

                    {experienceData.map((item, index) => (
                        <div
                            className="timeline-item"
                            key={item.id}
                        >
                            <div className="timeline-dot"></div>

                            <ExperienceCard
                                item={item}
                                index={index}
                            />
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}