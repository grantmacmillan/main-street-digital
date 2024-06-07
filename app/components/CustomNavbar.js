"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Navbar, Nav, Container } from 'react-bootstrap';


const CustomNavbar = () => {
    const [expanded, setExpanded] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar
            expand="md"
            className={`navbar-container ${scrolled ? 'scrolled' : ''} ${expanded ? 'navbar-expanded' : ''}`}
            expanded={expanded}
            onToggle={() => setExpanded(!expanded)}
        >
            <Container>
                <Navbar.Brand as={Link} href="/" passHref>
                    <span className="navbar-brand">Lamplight</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="me-auto justify-content-center flex-grow-1">
                        <Nav.Link as={Link} href="/" passHref>
                            <span className={`nav-link ${pathname === '/' ? 'active' : ''}`} onClick={() => setExpanded(false)}>Home</span>
                        </Nav.Link>
                        <Nav.Link as={Link} href="/portfolio" passHref>
                            <span className={`nav-link ${pathname === '/portfolio' ? 'active' : ''}`} onClick={() => setExpanded(false)}>Portfolio</span>
                        </Nav.Link>
                        <Nav.Link as={Link} href="/pricing" passHref>
                            <span className={`nav-link ${pathname === '/pricing' ? 'active' : ''}`} onClick={() => setExpanded(false)}>Pricing</span>
                        </Nav.Link>
                        <Nav.Link as={Link} href="/blog" passHref>
                            <span className={`nav-link ${pathname === '/blog' ? 'active' : ''}`} onClick={() => setExpanded(false)}>Blog</span>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} href="/contact" passHref>
                            <span className="btn-flip" data-back="Contact Us" data-front="Contact Us"></span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;