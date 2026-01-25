import React from 'react';
import TogglableSection from '../components/TogglableSection';
import './UnderDevelopment.css';

const OilAcrylics = () => {
    return (
        <div className="under-development-page">
            <div className="under-development-container">
                <h1>Oil & Acrylics</h1>
                <TogglableSection title="Status" defaultOpen={true}>
                    <p className="under-development-message">This part of the website is still in development</p>
                </TogglableSection>
            </div>
        </div>
    );
};

export default OilAcrylics;
