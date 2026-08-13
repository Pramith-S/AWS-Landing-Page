import React from 'react';
import './JoinButton.css';

const JoinButton = () => {
  return (
    <div className="join-button-wrapper">
      <a
        href="https://bit.ly/45162HC"
        target="_blank"
        rel="noreferrer"
        className="chip-glow-button"
        style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
      >
        Join Group
      </a>
    </div>
  );
};

export default JoinButton;
