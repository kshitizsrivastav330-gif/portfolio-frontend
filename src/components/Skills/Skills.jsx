import "./Skills.css";
import { motion } from "framer-motion";
import skills from "../../data/skills";

export default function Skills() {
    return (
        <section className="skills section" id="skills">

            <div className="container">

                {/* Heading */}

                <motion.div
                    className="section-heading"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >

                    <span>TECH STACK</span>

                    <h2>Technologies I Use Every Day</h2>

                    <p className="skills-subtitle">
                        Passionate about building scalable Full Stack Java
                        applications using modern technologies and best
                        development practices.
                    </p>

                </motion.div>

                {/* Categories */}

                {skills.map((section, sectionIndex) => (

                    <motion.div
                        key={section.category}
                        className="skill-category"

                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}

                        transition={{
                            duration: 0.6,
                            delay: sectionIndex * 0.2
                        }}
                    >

                        <h3 className="category-title">
                            {section.category}
                        </h3>

                        <div className="tech-grid">

                            {section.items.map((skill, index) => {

                                const Icon = skill.icon;

                                return (

                                    <motion.div
                                        key={skill.name}
                                        className="tech-card"

                                        initial={{
                                            opacity: 0,
                                            scale: .8
                                        }}

                                        whileInView={{
                                            opacity: 1,
                                            scale: 1
                                        }}

                                        viewport={{ once: true }}

                                        transition={{
                                            duration: .5,
                                            delay: index * .08
                                        }}
                                    >

                                        <Icon
                                            className={`tech-icon ${skill.color}`}
                                        />

                                        <h4>
                                            {skill.name}
                                        </h4>

                                    </motion.div>

                                );

                            })}

                        </div>

                    </motion.div>

                ))}

            </div>

        </section>
    );
}