import React from 'react';
import './JoinButton.css';

const JoinButton = () => {
  return (
    <div className="join-button-wrapper">
      <a 
        href="https://www.meetup.com/aws-sbg-at-jss-academy-of-technical-education-bengaluru/" 
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
