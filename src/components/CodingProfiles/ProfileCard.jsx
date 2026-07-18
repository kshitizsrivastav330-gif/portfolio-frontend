import React from "react";
import { motion } from "framer-motion";
import {
    FaExternalLinkAlt,
    FaCode,
    FaJava,
} from "react-icons/fa";
import {
    SiLeetcode,
    SiGeeksforgeeks,
    SiHackerrank,
} from "react-icons/si";

const ProfileCard = ({ profile, index }) => {
    const getIcon = () => {
        switch (profile.icon) {
            case "leetcode":
                return (
                    <SiLeetcode
                        size={42}
                        color={profile.color}
                    />
                );

            case "gfg":
                return (
                    <SiGeeksforgeeks
                        size={42}
                        color={profile.color}
                    />
                );

            case "hackerrank":
                return (
                    <SiHackerrank
                        size={42}
                        color={profile.color}
                    />
                );

            default:
                return (
                    <FaCode
                        size={42}
                        color={profile.color}
                    />
                );
        }
    };

    return (
        <motion.div
            className="profile-card"
            initial={{
                opacity: 0,
                y: 60,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.6,
                delay: index * 0.2,
            }}
            viewport={{ once: true }}
            whileHover={{
                y: -10,
            }}
        >
            {/* Header */}

            <div className="profile-header">
                <div className="profile-icon">
                    {getIcon()}
                </div>

                <div>
                    <h3>{profile.platform}</h3>

                    <span
                        className="profile-badge"
                        style={{
                            background: profile.color,
                        }}
                    >
            {profile.badge}
          </span>
                </div>
            </div>

            {/* Description */}

            <p className="profile-description">
                {profile.description}
            </p>

            {/* Solved */}

            <div className="profile-solved">
                <FaJava />

                <span>{profile.solved}</span>
            </div>

            {/* Skills */}

            <div className="profile-skills">
                {profile.skills.map((skill) => (
                    <span
                        key={skill}
                        className="skill-chip"
                    >
            {skill}
          </span>
                ))}
            </div>

            {/* Button */}

            <a
                href={profile.profile}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-btn"
            >
                Visit Profile

                <FaExternalLinkAlt />
            </a>
        </motion.div>
    );
};

export default ProfileCard;