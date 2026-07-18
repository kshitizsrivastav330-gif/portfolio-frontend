import "./Hero.css";

import { FaJava, FaReact, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";

export default function FloatingIcons() {
    return (
        <>
            <div className="floating-icon java">
                <FaJava />
            </div>

            <div className="floating-icon react">
                <FaReact />
            </div>

            <div className="floating-icon spring">
                <SiSpringboot />
            </div>

            <div className="floating-icon mysql">
                <SiMysql />
            </div>

            <div className="floating-icon git">
                <FaGitAlt />
            </div>
        </>
    );
}