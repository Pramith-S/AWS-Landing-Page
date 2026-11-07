import React, { useEffect } from 'react';
import './AwsPopupTowerSection.css';

/**
 * AWS SBG 3D Interactive Pop-Up Book World
 * Embedded directly from the downloads pop-up 3D WebGL engine.
 * Plays continuously in a live loop, edge-to-edge full screen on laptop
 * and scaled responsively on mobile, with native sound toggle built in.
 */
export default function AwsPopupTowerSection({ onOpenJoinModal }) {
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data === 'aws-sbg-open-join' && onOpenJoinModal) {
        onOpenJoinModal();
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onOpenJoinModal]);

  return (
    <section id="popup-tower" className="aws-popup-fullscreen-section">
      <iframe
        src="/popup/index.html"
        title="AWS SBG 3D Interactive Pop-Up Book"
        className="aws-popup-fullscreen-iframe"
        allow="autoplay; fullscreen"
      />
    </section>
  );
}
