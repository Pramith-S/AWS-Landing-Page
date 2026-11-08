import React, { useEffect, useRef } from 'react';
import './AwsPopupTowerSection.css';

/**
 * AWS SBG 3D Interactive Pop-Up Book World
 * Embedded directly from the downloads pop-up 3D WebGL engine.
 * Only plays when the user approaches this section in the viewport,
 * pausing when scrolled away to conserve CPU/GPU and preserve cinematic sync.
 */
export default function AwsPopupTowerSection({ onOpenJoinModal }) {
  const iframeRef = useRef(null);
  const isApproachingRef = useRef(false);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data === 'aws-sbg-open-join' && onOpenJoinModal) {
        onOpenJoinModal();
      } else if (event.data === 'aws-sbg-popup-ready') {
        // Iframe initialized: if user is already approaching or viewing this section, play immediately!
        if (isApproachingRef.current) {
          try {
            iframeRef.current?.contentWindow?.postMessage('aws-sbg-play', '*');
          } catch (e) {}
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onOpenJoinModal]);

  useEffect(() => {
    const sectionEl = document.getElementById('popup-tower');
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isApproaching = entry.isIntersecting;
          isApproachingRef.current = isApproaching;
          try {
            iframeRef.current?.contentWindow?.postMessage(
              isApproaching ? 'aws-sbg-play' : 'aws-sbg-pause',
              '*'
            );
          } catch (e) {}
        });
      },
      {
        // 160px buffer: Begins playing smoothly right as user scrolls toward/approaches the section
        rootMargin: '160px 0px',
        threshold: 0.05
      }
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, []);

  const handleIframeLoad = () => {
    if (isApproachingRef.current) {
      try {
        iframeRef.current?.contentWindow?.postMessage('aws-sbg-play', '*');
      } catch (e) {}
    }
  };

  return (
    <section id="popup-tower" className="aws-popup-fullscreen-section">
      <iframe
        ref={iframeRef}
        src="/popup/index.html"
        title="AWS SBG 3D Interactive Pop-Up Book"
        className="aws-popup-fullscreen-iframe"
        allow="autoplay; fullscreen"
        onLoad={handleIframeLoad}
      />
    </section>
  );
}
