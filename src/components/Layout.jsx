import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
    const [expandedSection, setExpandedSection] = useState('Getting Started');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleSection = (sectionName) => {
        setExpandedSection(prev => prev === sectionName ? null : sectionName);
    };

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

                <div className="nav-group">
                    <h3 onClick={() => toggleSection('Getting Started')} className={`accordion-header ${expandedSection === 'Getting Started' ? 'expanded' : ''}`}>
                        Getting Started
                        <span className="accordion-icon">v</span>
                    </h3>
                    <div className={`nav-group-content ${expandedSection === 'Getting Started' ? 'expanded' : ''}`}>
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
                    </div>
                </div>

                <div className="nav-group">
                    <h3 onClick={() => toggleSection('Fundamentals')} className={`accordion-header ${expandedSection === 'Fundamentals' ? 'expanded' : ''}`}>
                        Fundamentals
                        <span className="accordion-icon">v</span>
                    </h3>
                    <div className={`nav-group-content ${expandedSection === 'Fundamentals' ? 'expanded' : ''}`}>
                        <NavLink
                            to="/gesture"
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            onClick={closeMobileMenu}
                        >
                            Gesture
                        </NavLink>
                        <NavLink
                            to="/values"
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            onClick={closeMobileMenu}
                        >
                            Values
                        </NavLink>
                        <NavLink
                            to="/perspective"
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            onClick={closeMobileMenu}
                        >
                            Perspective
                        </NavLink>
                        <NavLink
                            to="/color-theory"
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            onClick={closeMobileMenu}
                        >
                            Color Theory
                        </NavLink>
                        <NavLink
                            to="/anatomy"
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            onClick={closeMobileMenu}
                        >
                            Anatomy 101
                        </NavLink>
                        <NavLink
                            to="/composition"
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            onClick={closeMobileMenu}
                        >
                            Composition
                        </NavLink>
                    </div>
                </div>

                <div className="nav-group">
                    <h3 onClick={() => toggleSection('Mediums')} className={`accordion-header ${expandedSection === 'Mediums' ? 'expanded' : ''}`}>
                        Mediums
                        <span className="accordion-icon">v</span>
                    </h3>
                    <div className={`nav-group-content ${expandedSection === 'Mediums' ? 'expanded' : ''}`}>
                        <NavLink
                            to="/digital-painting"
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            onClick={closeMobileMenu}
                        >
                            Digital Painting
                        </NavLink>
                        <NavLink
                            to="/traditional-pencil"
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            onClick={closeMobileMenu}
                        >
                            Traditional Pencil
                        </NavLink>
                        <NavLink
                            to="/oil-acrylics"
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            onClick={closeMobileMenu}
                        >
                            Oil & Acrylics
                        </NavLink>
                    </div>
                </div>
            </aside>

            <main className="main-content">
                {children}
            </main>
        </div>
    );
};

export default Layout;
