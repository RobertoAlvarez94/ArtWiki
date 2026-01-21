import React, { useState, useEffect } from 'react';
import './Modal.css';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the modal?
    // User request implies it should appear on landing page.
    // We can add session storage check if needed, but for now show it on mount once per session.
    const hasSeen = sessionStorage.getItem('artwiki_modal_seen');
    if (!hasSeen) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('artwiki_modal_seen', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Welcome to ArtWiki</h2>
        <p>
          This is a website created with AI tools for giving back to the art community. From beginner to expert. All topics, data and art are human made. The only usage of AI was on the coding part. So grab a pencil and let's draw!
        </p>
        <p className="modal-warning">
          !!THIS WEBSITE WILL NOT RUN ANY ART THROUGH ANY LLM!!
        </p>
        <button className="modal-button" onClick={handleClose}>
          I Understand
        </button>
      </div>
    </div>
  );
};

export default Modal;
