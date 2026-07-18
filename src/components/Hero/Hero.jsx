import "./Hero.css";
import { motion } from "framer-motion";

import HeroInfo from "./HeroInfo";
import HeroImage from "./HeroImage";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
    return (
        <motion.section
            id="home"
            className="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Animated Background */}
            <div className="hero-background">
                <div className="gradient-circle purple"></div>
                <div className="gradient-circle blue"></div>
                <div className="grid-overlay"></div>
            </div>

            {/* Hero Content */}
            <div className="container hero-container">
                <HeroInfo />
                <HeroImage />
            </div>

            {/* Scroll Indicator */}
            <ScrollIndicator />
        </motion.section>
    );
}