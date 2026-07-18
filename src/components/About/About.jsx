import "./About.css";
import { motion } from "framer-motion";

const techStack = [
    "Java",
    "Spring Boot",
    "React",
    "Spring Security",
    "JWT",
    "MySQL",
    "REST API",
    "Git",
    "GitHub",
    "Postman",
];

export default function About() {
    return (
        <section className="about section" id="about">
            <div className="container">

                {/* About Content */}
                <div className="about-grid">

                    {/* Left Side */}
                    <motion.div
                        className="about-card"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* THIS IS THE MISSING HEADING */}
                        <h3>👋 Hello!</h3>

                        <p className="intro-text">
                            I'm <strong>Kshitiz Srivastava</strong>, a passionate
                            <strong> Full Stack Java Developer</strong> with a strong interest
                            in building scalable web applications and AI-powered software.
                        </p>

                        <p className="intro-text">
                            I enjoy solving real-world problems using Java, Spring Boot,
                            React, MySQL and modern web technologies. My goal is to build
                            products that are fast, secure and provide an excellent user
                            experience.
                        </p>

                        <div className="about-details">
                            <div>
                                <strong>🎓 Education</strong>
                                <p>B.Tech (AI & ML)</p>
                            </div>

                            <div>
                                <strong>🏫 College</strong>
                                <p>JSS Academy of Technical Education</p>
                            </div>

                            <div>
                                <strong>📍 Location</strong>
                                <p>Bengaluru, Karnataka</p>
                            </div>

                            <div>
                                <strong>🎯 CGPA</strong>
                                <p>7.6</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        className="tech-card"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3>🚀 Tech Stack</h3>

                        <div className="tech-grid">
                            {techStack.map((tech) => (
                                <span key={tech}>{tech}</span>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}