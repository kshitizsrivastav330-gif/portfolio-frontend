import "./Navbar.css";
import { useState } from "react";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaBars,
    FaTimes,
} from "react-icons/fa";

import Logo from "./Logo";
import navLinks from "./NavLinks";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    return (
        <header className="navbar">
            <div className="container navbar-container">
                {/* Logo */}
                <Logo />

                {/* Navigation */}
                <nav className={`nav-menu ${open ? "active" : ""}`}>
                    {navLinks.map((item) => (
                        <a
                            key={item.title}
                            href={item.href}
                            onClick={closeMenu}
                        >
                            {item.title}
                        </a>
                    ))}

                    {/* Mobile Social Links */}
                    <div className="mobile-social">
                        <a
                            href="https://github.com/kshitizsrivastav330-gif"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                        >
                            <FaGithub />
                            <span>GitHub</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/kshitiz-srivastava-673223315/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                        >
                            <FaLinkedin />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=kshitizsrivastav330@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Email"
                            title="Email"
                            onClick={closeMenu}
                        >
                            <FaEnvelope />
                            <span>Email</span>
                        </a>
                    </div>
                </nav>

                {/* Desktop Social Icons */}
                <div className="nav-social">
                    <a
                        href="https://github.com/kshitizsrivastav330-gif"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        title="GitHub"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/kshitiz-srivastava-673223315/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        title="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=kshitizsrivastav330@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Email"
                        title="Email"
                    >
                        <FaEnvelope />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="menu-btn"
                    onClick={() => setOpen(!open)}
                    aria-label={open ? "Close Menu" : "Open Menu"}
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </header>
    );
}