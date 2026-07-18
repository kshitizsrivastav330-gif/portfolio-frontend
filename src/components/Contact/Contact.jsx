import "./Contact.css";
import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
    return (
        <section className="contact section" id="contact">
            <div className="container">

                {/* Heading */}

                <motion.div
                    className="section-heading"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span>CONTACT</span>

                    <h2>Let's Build Something Amazing</h2>

                    <p className="contact-subtitle">
                        Interested in working together?
                        Feel free to contact me anytime.
                    </p>
                </motion.div>

                <div className="contact-grid">

                    {/* LEFT */}

                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >

                        {/* Email */}
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=kshitizsrivastav330@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-card"
                        >
                            <FaEnvelope />

                            <div>
                                <h4>Email</h4>
                                <p>kshitizsrivastava330@gmail.com</p>
                            </div>
                        </a>

                        {/* GitHub */}

                        <a
                            href="https://github.com/kshitizsrivastav330-gif"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-card"
                        >
                            <FaGithub />

                            <div>
                                <h4>GitHub</h4>
                                <p>github.com/kshitizsrivastav330-gif</p>
                            </div>
                        </a>
                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/kshitiz-srivastava-673223315"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-card"
                        >
                            <FaLinkedin />
                            <div>
                                <h4>LinkedIn</h4>
                                <p>linkedin.com/in/kshitiz-srivastava-673223315</p>
                            </div>
                        </a>

                        {/* Location */}

                        <a
                            href="https://maps.google.com/?q=Bengaluru,India"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-card"
                        >
                            <FaMapMarkerAlt />

                            <div>
                                <h4>Location</h4>
                                <p>Bengaluru, India</p>
                            </div>
                        </a>

                    </motion.div>

                    {/* RIGHT */}

                    <motion.form
                        className="contact-form"
                        initial={{ opacity: 0, x: 70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <input
                            type="text"
                            placeholder="Your Name"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                        />

                        <input
                            type="text"
                            placeholder="Subject"
                        />

                        <textarea
                            rows="6"
                            placeholder="Your Message"
                        ></textarea>

                        <button type="submit">
                            Send Message 🚀
                        </button>

                    </motion.form>

                </div>

            </div>
        </section>
    );
}