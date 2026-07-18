import "./Footer.css";
import { motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="footer" id="footer">
            <div className="container">

                <motion.div
                    className="footer-content"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >

                    {/* Brand */}
                    <div className="footer-brand">
                        <h2>
                            Kshitiz<span>.</span>
                        </h2>

                        <p>
                            Java Full Stack Developer passionate about
                            building scalable, AI-powered web applications
                            using Java, Spring Boot, React, MySQL and modern
                            web technologies.
                        </p>

                        <div className="footer-social">

                            <a
                                href="https://github.com/kshitizsrivastav330-gif"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/kshitiz-srivastava-673223315/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedin />
                            </a>

                            <a href="mailto:kshitizsrivastav330@gmail.com">
                                <FaEnvelope />
                            </a>

                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">

                        <h3>Quick Links</h3>

                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>

                    </div>

                    {/* Contact */}
                    <div className="footer-contact">

                        <h3>Contact</h3>

                        <p>Bengaluru, Karnataka</p>

                        <p>
                            kshitizsrivastav330@gmail.com
                        </p>

                        <p>
                            Open to Full Stack Java Developer opportunities
                        </p>

                    </div>

                </motion.div>

                <div className="footer-bottom">

                    <p>
                        © 2026 Kshitiz Srivastava. All Rights Reserved.
                    </p>

                    <button
                        className="back-to-top"
                        onClick={scrollToTop}
                        aria-label="Back to Top"
                    >
                        <FaArrowUp />
                    </button>

                </div>

            </div>
        </footer>
    );
}