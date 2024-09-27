"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };

    const scrollTo = async (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        } else {
            try {
                window.location.href = `#${sectionId}`;
            } catch (error) {
                console.error("Error scrolling to section:", error);
            }
        }
    };

    return(
        <div className="d-flex justify-content-between fixed-top">
            <div className="logo">
                <h1>
                <Link href="/">
                    <Image 
                        src="/images/logo.png"
                        width={995}
                        height={153} 
                        alt="uranus" 
                        className="u-logo" 
                    />
                </Link>
                </h1>
            </div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                    aria-expanded={isExpanded}
                    aria-controls="navbarNav"
                    aria-label="Toggle navigation"
                >
                    {!isExpanded ? <span className="navbar-toggler-icon"></span> : <span className="close-icon">&times;</span>}
                </button>
                <div className={`collapse navbar-collapse ${isExpanded ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#home" className="nav-link" onClick={() => scrollTo("home")}>
                        Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#experience" className="nav-link" onClick={() => scrollTo("experience")}>
                        Experience
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#project" className="nav-link" onClick={() => scrollTo("project")}>
                        Project
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link" onClick={() => scrollTo("contact")}>
                        Contact
                        </a>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;