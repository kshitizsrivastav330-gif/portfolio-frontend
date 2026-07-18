import React from "react";
import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import codingProfiles from "../../data/codingProfiles";
import "./CodingProfiles.css";

const CodingProfiles = () => {
    return (
        <section className="coding-profiles" id="coding-profiles">
            <div className="container">

                {/* Section Heading */}
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
          <span className="section-subtitle">
            Competitive Programming
          </span>

                    <h2 className="section-title">
                        Coding <span>Profiles</span>
                    </h2>

                    <p className="section-description">
                        I continuously improve my problem-solving skills by practicing
                        Data Structures & Algorithms on leading coding platforms.
                        These profiles showcase my consistency, learning journey,
                        and passion for writing efficient code.
                    </p>
                </motion.div>

                {/* Cards */}

                <div className="profiles-grid">
                    {codingProfiles.map((profile, index) => (
                        <ProfileCard
                            key={profile.id}
                            profile={profile}
                            index={index}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CodingProfiles;