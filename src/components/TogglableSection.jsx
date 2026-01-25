import React, { useState } from 'react';
import './TogglableSection.css';

const TogglableSection = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`togglable-section ${isOpen ? 'expanded' : ''}`}>
            <div className="togglable-header" onClick={toggleOpen}>
                <h2>{title}</h2>
                <span className="togglable-icon">▼</span>
            </div>
            <div className="togglable-content">
                {children}
            </div>
        </div>
    );
};

export default TogglableSection;
