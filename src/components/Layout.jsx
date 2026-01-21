import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="app-container">
            {/* Mobile Toggle Button */}
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Open Menu">
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
            </button>

            {/* Overlay for mobile to close menu when clicking outside */}
            <div
                className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`}
                onClick={closeMobileMenu}
            ></div>

            <aside className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <div className="header-brand" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div className="logo-icon"></div>
                        <span>ArtWiki</span>
                    </div>
                    <button className="close-sidebar-btn" onClick={closeMobileMenu} aria-label="Close Menu">&times;</button>
                </div>

                <nav className="nav-group">
                    <h3>Getting Started</h3>
                    <NavLink
                        to="/"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        onClick={closeMobileMenu}
                        end
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        onClick={closeMobileMenu}
                    >
                        About ArtWiki
                    </NavLink>
                    <NavLink
                        to="/roadmap"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        onClick={closeMobileMenu}
                    >
                        Art Roadmap
                    </NavLink>
                </nav>

                <nav className="nav-group">
                    <h3>Fundamentals</h3>
                    <a href="#" className="nav-link" onClick={closeMobileMenu}>Perspective</a>
                    <a href="#" className="nav-link" onClick={closeMobileMenu}>Color Theory</a>
                    <a href="#" className="nav-link" onClick={closeMobileMenu}>Anatomy 101</a>
                    <a href="#" className="nav-link" onClick={closeMobileMenu}>Composition</a>
                </nav>

                <nav className="nav-group">
                    <h3>Mediums</h3>
                    <a href="#" className="nav-link" onClick={closeMobileMenu}>Digital Painting</a>
                    <a href="#" className="nav-link" onClick={closeMobileMenu}>Traditional Pencil</a>
                    <a href="#" className="nav-link" onClick={closeMobileMenu}>Oil & Acrylics</a>
                </nav>
            </aside>

            <main className="main-content">
                {children}
            </main>
        </div>
    );
};

export default Layout;
