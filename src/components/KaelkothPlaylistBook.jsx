import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX, 
  Music, 
  Disc3, 
  Sparkles, 
  Radio, 
  Flame,
  Bookmark
} from 'lucide-react';
import './KaelkothPlaylistBook.css';

// Crisp vector AWS Logo with official orange smile arrow
const AwsBookLogo = ({ className = '' }) => (
  <svg
    viewBox="0 0 640 512"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fill="#FFFFFF"
      d="M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42z"
    />
    <path
      fill="#FF9900"
      d="M578.81 375.59c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02zM538.61 408.88c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38z"
    />
  </svg>
);

// The exact 6 tracks specified by user
export const KAELKOTH_TRACKS = [
  {
    num: 'I.',
    title: 'Song Title',
    artist: 'Artist Name',
    duration: '03:42',
    durationSec: 222,
    tag: 'Station 01 · Genesis'
  },
  {
    num: 'II.',
    title: 'Song Title',
    artist: 'Artist Name',
    duration: '04:12',
    durationSec: 252,
    tag: 'Station 02 · Practitioner'
  },
  {
    num: 'III.',
    title: 'Song Title',
    artist: 'Artist Name',
    duration: '02:58',
    durationSec: 178,
    tag: 'Station 03 · Cloud Quest'
  },
  {
    num: 'IV.',
    title: 'Song Title',
    artist: 'Artist Name',
    duration: '05:01',
    durationSec: 301,
    tag: 'Station 04 · Hackathon'
  },
  {
    num: 'V.',
    title: 'Song Title',
    artist: 'Artist Name',
    duration: '03:36',
    durationSec: 216,
    tag: 'Station 05 · Community'
  },
  {
    num: 'VI.',
    title: 'Song Title',
    artist: 'Artist Name',
    duration: '04:15',
    durationSec: 255,
    tag: 'Grand Summit · Anthem'
  }
];

const KaelkothPlaylistBook = ({ compact = false, activeStationNum = '01' }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTimeSec, setCurrentTimeSec] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [bookOpen, setBookOpen] = useState(true);

  const audioCtxRef = useRef(null);
  const oscRef = useRef(null);
  const gainRef = useRef(null);

  const currentTrack = KAELKOTH_TRACKS[currentTrackIndex];

  // Web Audio Synth for ambient futuristic soundtrack
  const startAudioSynth = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioContext();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      if (oscRef.current) {
        try { oscRef.current.stop(); } catch (e) {}
      }

      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Atmospheric chord frequencies based on track
      const chordPitches = [220, 261.63, 293.66, 329.63, 392.00, 440.00];
      const pitch = chordPitches[currentTrackIndex % chordPitches.length];

      osc.type = 'sine';
      osc.frequency.setValueAtTime(pitch, ctx.currentTime);

      gain.gain.setValueAtTime(isMuted ? 0 : 0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(isMuted ? 0 : 0.08, ctx.currentTime + 1.5);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();

      oscRef.current = osc;
      gainRef.current = gain;
    } catch (e) {
      // Gracefully silent if Web Audio is blocked
    }
  };

  const stopAudioSynth = () => {
    try {
      if (oscRef.current) {
        oscRef.current.stop();
        oscRef.current = null;
      }
    } catch (e) {}
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopAudioSynth();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      startAudioSynth();
    }
  };

  const selectTrack = (index) => {
    setCurrentTrackIndex(index);
    setCurrentTimeSec(0);
    if (!isPlaying) {
      setIsPlaying(true);
    }
    // Update synth pitch
    setTimeout(() => {
      startAudioSynth();
    }, 50);
  };

  const handleNext = () => {
    const nextIdx = (currentTrackIndex + 1) % KAELKOTH_TRACKS.length;
    selectTrack(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (currentTrackIndex - 1 + KAELKOTH_TRACKS.length) % KAELKOTH_TRACKS.length;
    selectTrack(prevIdx);
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (gainRef.current && audioCtxRef.current) {
      gainRef.current.gain.setValueAtTime(nextMuted ? 0 : 0.07, audioCtxRef.current.currentTime);
    }
  };

  // Timer loop when playing
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTimeSec((prev) => {
          if (prev >= currentTrack.durationSec) {
            handleNext();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTrackIndex]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      stopAudioSynth();
      if (audioCtxRef.current) {
        try { audioCtxRef.current.close(); } catch (e) {}
      }
    };
  }, []);

  const formatSec = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`kaelkoth-regalo-wrapper ${compact ? 'compact-mode' : ''}`}>
      {/* Volumetric Magical Spotlight Light (Kaelkoth .storyluz styled with AWS Orange) */}
      <div className="kaelkoth-storyluz" aria-hidden="true" />

      {/* Floating Sparkle Particles (Kaelkoth .espuma-particula) */}
      <div className="kaelkoth-sparkles-container" aria-hidden="true">
        <div className="kaelkoth-particula kp-1" />
        <div className="kaelkoth-particula kp-2" />
        <div className="kaelkoth-particula kp-3" />
        <div className="kaelkoth-particula kp-4" />
        <div className="kaelkoth-particula kp-5" />
      </div>

      {/* Main 3D AWS Codex Folio / Book Shell */}
      <div className={`kaelkoth-book-container ${bookOpen ? 'book-open' : 'book-closed'}`}>
        
        {/* =================================================================
            LEFT FOLIO: AWS BOOK COVER & EMBOSSED BADGE & PLAYER CONTROLS
            ================================================================= */}
        <div className="kaelkoth-book-cover-folio">
          <div className="book-leather-texture" />
          <div className="book-filigree-corners" />

          {/* Floating animated 3D mini book icon (Kaelkoth .atalestorylibro) */}
          <div className="atalestorylibro-wrapper">
            <div className="kaelkoth-floating-book" title="AWS SBG Codex Regalo">
              <span className="book-spine-accent" />
              <div className="floating-book-mini-aws">
                <AwsBookLogo className="mini-aws-svg" />
              </div>
            </div>
          </div>

          {/* Header Title on Cover */}
          <div className="book-cover-header">
            <span className="codex-kicker">// AWS SBG CHRONICLES · VOL. 01</span>
            <div className="aws-cover-branding">
              <AwsBookLogo className="cover-big-aws-svg" />
              <span className="cover-badge-text">COMMUNITY CODEX</span>
            </div>
            <p className="cover-lore-quote">
              "Every line of cloud code connects a milestone. Listen to the soundtrack of builders turning curiosity into architecture."
            </p>
          </div>

          {/* Embedded Audio Player Station inside Left Cover */}
          <div className="book-audio-player-hud">
            <div className="player-now-playing-row">
              <div className="disc-spin-box">
                <Disc3 className={`player-disc-icon ${isPlaying ? 'spinning' : ''}`} size={24} />
              </div>
              <div className="player-track-meta">
                <span className="now-playing-tag">
                  {isPlaying ? 'NOW PLAYING' : 'AUDIO CODEX PAUSED'}
                </span>
                <h5 className="player-track-title">{currentTrack.num} {currentTrack.title}</h5>
                <span className="player-track-artist">{currentTrack.artist} · {currentTrack.tag}</span>
              </div>
            </div>

            {/* Soundwave frequency visualizer bars */}
            <div className={`audio-frequency-bars ${isPlaying ? 'animating' : ''}`} aria-hidden="true">
              <span className="freq-bar fb-1" />
              <span className="freq-bar fb-2" />
              <span className="freq-bar fb-3" />
              <span className="freq-bar fb-4" />
              <span className="freq-bar fb-5" />
              <span className="freq-bar fb-6" />
              <span className="freq-bar fb-7" />
              <span className="freq-bar fb-8" />
              <span className="freq-bar fb-9" />
              <span className="freq-bar fb-10" />
            </div>

            {/* Time Scrubber */}
            <div className="player-progress-bar-wrap">
              <span className="time-curr">{formatSec(currentTimeSec)}</span>
              <div className="progress-track">
                <div 
                  className="progress-fill" 
                  style={{ width: `${(currentTimeSec / currentTrack.durationSec) * 100}%` }} 
                />
              </div>
              <span className="time-dur">{currentTrack.duration}</span>
            </div>

            {/* Controls Bar */}
            <div className="player-controls-row">
              <button 
                className="audio-ctrl-btn" 
                onClick={handlePrev} 
                title="Previous Track"
                aria-label="Previous Track"
              >
                <SkipBack size={15} />
              </button>

              <button 
                className="audio-play-main-btn" 
                onClick={togglePlay}
                title={isPlaying ? "Pause Soundtrack" : "Play Soundtrack"}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} className="play-triangle" />}
              </button>

              <button 
                className="audio-ctrl-btn" 
                onClick={handleNext} 
                title="Next Track"
                aria-label="Next Track"
              >
                <SkipForward size={15} />
              </button>

              <button 
                className={`audio-ctrl-btn volume-btn ${isMuted ? 'muted' : ''}`} 
                onClick={toggleMute}
                title={isMuted ? "Unmute Audio" : "Mute Audio"}
                aria-label="Toggle Mute"
              >
                {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
              </button>
            </div>
          </div>

          <div className="cover-bottom-stamp">
            <span className="stamp-symbol">✦</span>
            <span>JSSATEB BUILDERS CHAPTER · KAELKOTH REGALO</span>
            <span className="stamp-symbol">✦</span>
          </div>
        </div>

        {/* Book Spine Divider (Golden / Neon seam) */}
        <div className="kaelkoth-book-spine" aria-hidden="true">
          <div className="spine-ribbon-stitch" />
        </div>

        {/* =================================================================
            RIGHT FOLIO: KAELKOTH PLAYLIST REGALO (TABLE OF TRACKS)
            ================================================================= */}
        <div className="kaelkoth-book-playlist-folio">
          <div className="folio-parchment-glow" />
          <div className="book-filigree-corners top-right" />

          {/* Heading with Ornate Kaelkoth Style & AWS Accents */}
          <div className="playlist-folio-header">
            <div className="header-ornament-line">
              <span className="ornament-cross">❖</span>
              <span className="ornament-bar" />
              <span className="ornament-label">REGALO DE MÚSICA</span>
              <span className="ornament-bar" />
              <span className="ornament-cross">❖</span>
            </div>
            
            <h4 className="kaelkoth-playlist-title">
              <span>COMMUNITY</span> PLAYLIST REGALO
            </h4>
            <p className="kaelkoth-playlist-desc">
              Dedicated chapters of community rhythm, hackathon focus beats, and cloud workshop themes.
            </p>
          </div>

          {/* Tracks List matching user's exact specification */}
          <div className="kaelkoth-tracklist" role="list">
            {KAELKOTH_TRACKS.map((track, idx) => {
              const isCurrent = idx === currentTrackIndex;
              return (
                <div 
                  key={track.num}
                  className={`kaelkoth-track-row ${isCurrent ? 'active-track' : ''}`}
                  onClick={() => selectTrack(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      selectTrack(idx);
                    }
                  }}
                  aria-label={`Play Track ${track.num}: ${track.title} by ${track.artist}`}
                >
                  {/* Left: Roman Numeral */}
                  <span className="track-roman-num">{track.num}</span>

                  {/* Play Button Icon on Row */}
                  <div className="track-row-play-icon">
                    {isCurrent && isPlaying ? (
                      <span className="track-playing-pulse" />
                    ) : (
                      <Play size={11} className="track-play-glyph" />
                    )}
                  </div>

                  {/* Middle: Title & Artist with dotted leader */}
                  <div className="track-info-cell">
                    <div className="track-title-lead-line">
                      <span className="track-song-title">{track.title}</span>
                      <span className="track-dotted-leader" aria-hidden="true" />
                    </div>
                    <div className="track-artist-line">
                      <span className="track-artist-name">{track.artist}</span>
                      <span className="track-station-badge">{track.tag}</span>
                    </div>
                  </div>

                  {/* Right: Duration */}
                  <span className="track-duration-pill">{track.duration}</span>
                </div>
              );
            })}
          </div>

          {/* Footer inside Right Page */}
          <div className="playlist-folio-footer">
            <div className="folio-footnote">
              <Music size={12} className="footer-music-icon" />
              <span>Select any track above to play and synchronize your journey</span>
            </div>
            <div className="folio-page-num">FOLIO // 0{currentTrackIndex + 1}</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default KaelkothPlaylistBook;
