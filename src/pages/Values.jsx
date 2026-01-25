import React from 'react';
import TogglableSection from '../components/TogglableSection';
import './Values.css';

const Values = () => {
    return (
        <div className="values-page">
            <div className="values-container">
                <h1>Values in Art</h1>

                <TogglableSection title="Introduction" defaultOpen={false}>
                    <div className="values-content">
                        <p>
                            In art, "value" refers to the lightness or darkness of a color. It is one of the most important fundamentals because it defines form, creates the illusion of depth, and controls the viewer's focus.
                        </p>
                        <p>
                            Understanding value allows you to render three-dimensional objects on a two-dimensional surface. Even without color, a drawing with strong values can look realistic and compelling. Proper value relationships are often considered more important than color choice itself—as the saying goes, "Value does all the work, but color gets all the credit."
                        </p>
                    </div>
                </TogglableSection>

                <TogglableSection title="How to Learn Values" defaultOpen={false}>
                    <div className="video-section">
                        <h2>before you dive in into practice, watch this video to learn how to learn values</h2>
                        <div className="video-wrapper">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/5P6gaSJCgBo"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </TogglableSection>
            </div>
        </div>
    );
};

export default Values;
