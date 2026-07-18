import "./Hero.css";
import { useState } from "react";

export default function HeroImage() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => {
            setClicked(false);
        }, 500);
    };

    return (
        <div
            className={`hero-image-container ${clicked ? "clicked" : ""}`}
            onClick={handleClick}
        >
            <img
                src="/images/hero-ai.png"
                alt="AI Workspace"
                className="hero-ai-image"
            />
        </div>
    );
}