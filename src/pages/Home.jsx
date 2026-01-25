import React from 'react';
import TogglableSection from '../components/TogglableSection';
import './Home.css';
import Modal from '../components/Modal';

const Home = () => {
    return (
        <div className="home-page">
            <Modal />

            <div className="hero-section">
                <h1>Welcome to ArtWiki Documentations</h1>
                <p className="subtitle">Complete resources for learning Art from the ground up.</p>
            </div>

            <TogglableSection title="Start Here" defaultOpen={true}>
                <div className="section-header">
                    <p>If you don't know where to start, start here.</p>
                </div>

                <div className="video-container">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/6gAnatlxcPs"
                        title="Where to Start Art Guide"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </TogglableSection>

            <div style={{ marginTop: '2rem' }}>
                <TogglableSection title="Explore Topics" defaultOpen={false}>
                    <div className="topics-grid">
                        <div className="topic-card">
                            <h3>What's New</h3>
                            <p>Latest updates on techniques and community contributions.</p>
                        </div>
                        <div className="topic-card">
                            <h3>Understanding Basics</h3>
                            <p>Essential skills and concepts to help you get started.</p>
                        </div>
                        <div className="topic-card">
                            <h3>Working with Color</h3>
                            <p>Deep dive into color theory and palettes.</p>
                        </div>
                    </div>
                </TogglableSection>
            </div>
        </div>
    );
};

export default Home;
