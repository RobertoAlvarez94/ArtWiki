import React from 'react';
import SkillTree from '../components/SkillTree';

const Roadmap = () => {
    return (
        <div className="roadmap-page">
            <div style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Art Learning Roadmap</h1>
                <p style={{ color: 'var(--text-secondary)' }}>
                    A step-by-step path to mastering the fundamentals. Start at the top and work your way down.
                </p>
            </div>

            <SkillTree />
        </div>
    );
};

export default Roadmap;
