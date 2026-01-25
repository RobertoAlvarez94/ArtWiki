import React from 'react';
import TogglableSection from '../components/TogglableSection';
import './UnderDevelopment.css';

const Anatomy = () => {
    return (
        <div className="under-development-page">
            <div className="under-development-container">
                <h1>Anatomy 101</h1>
                <TogglableSection title="Status" defaultOpen={true}>
                    <p className="under-development-message">This part of the website is still in development</p>
                </TogglableSection>
            </div>
        </div>
    );
};

export default Anatomy;
