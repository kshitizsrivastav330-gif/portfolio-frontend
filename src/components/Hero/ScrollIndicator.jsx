import "./Hero.css";

export default function ScrollIndicator() {
    return (
        <a
            href="#about"
            className="scroll-indicator"
        >
            <div className="mouse">
                <span></span>
            </div>

            <p>Scroll Down</p>
        </a>
    );
}