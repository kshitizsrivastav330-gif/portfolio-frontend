import "./Hero.css";
import { motion } from "framer-motion";
import personalData from "../../data/personalData";
import HeroButtons from "./HeroButtons";
import Stats from "./Stats";


export default function HeroInfo() {
    return (
        <motion.div
            className="hero-info"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        >
      <span className="hero-badge">
        👋 Welcome to my Portfolio
      </span>

            <h1 className="hero-title">
                Hi, I'm
                <br />
                <span>{personalData.name}</span>
            </h1>

            <h2 className="hero-role">
                {personalData.role}
            </h2>

            <p className="hero-desc">
                {personalData.tagline}
            </p>

            <HeroButtons />

            <Stats />
        </motion.div>
    );
}