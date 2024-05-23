"use client";

import Link from 'next/link';
import { useState } from 'react';

const CustomNavbar = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">Lamp Light Web Solutions</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarNav"
                    aria-expanded={expanded ? "true" : "false"}
                    aria-label="Toggle navigation"
                    onClick={() => setExpanded(!expanded)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link href="/" className="nav-link" onClick={() => setExpanded(false)}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/portfolio" className="nav-link" onClick={() => setExpanded(false)}>Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/our-services" className="nav-link" onClick={() => setExpanded(false)}>Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/blog" className="nav-link" onClick={() => setExpanded(false)}>Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact" className="nav-link" onClick={() => setExpanded(false)}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default CustomNavbar;