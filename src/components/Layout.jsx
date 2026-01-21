import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="app-container">
            <aside className="sidebar">
                <div className="sidebar-header">
                    <div className="logo-icon"></div>
                    <span>ArtWiki</span>
                </div>

                <nav className="nav-group">
                    <h3>Getting Started</h3>
                    <a href="#" className="nav-link active">Home</a>
                    <a href="#" className="nav-link">About ArtWiki</a>
                </nav>

                <nav className="nav-group">
                    <h3>Fundamentals</h3>
                    <a href="#" className="nav-link">Perspective</a>
                    <a href="#" className="nav-link">Color Theory</a>
                    <a href="#" className="nav-link">Anatomy 101</a>
                    <a href="#" className="nav-link">Composition</a>
                </nav>

                <nav className="nav-group">
                    <h3>Mediums</h3>
                    <a href="#" className="nav-link">Digital Painting</a>
                    <a href="#" className="nav-link">Traditional Pencil</a>
                    <a href="#" className="nav-link">Oil & Acrylics</a>
                </nav>
            </aside>

            <main className="main-content">
                {children}
            </main>
        </div>
    );
};

export default Layout;
