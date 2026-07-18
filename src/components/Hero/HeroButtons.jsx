import "./Hero.css";
import { FaArrowRight, FaDownload } from "react-icons/fa";

export default function HeroButtons() {
    return (
        <div className="hero-buttons">
            <a
                href="#projects"
                className="btn-primary"
            >
                View Projects
                <FaArrowRight />
            </a>
            <a
                href="/resume/Kshitiz_Srivastava_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
            >
                <FaDownload />
                <span>Resume</span>
            </a>
        </div>
    );
}