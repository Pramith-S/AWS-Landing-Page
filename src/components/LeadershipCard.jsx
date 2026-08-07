import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .card {
    width: 280px;
    height: 280px;
    background: #120e16;
    border-radius: 32px;
    padding: 3px;
    position: relative;
    border: none;

    /* Seamless Neomorphic Shadow calculated directly from #120e16 */
    box-shadow: 
      8px 8px 18px #08060a,
      -8px -8px 18px #1c1622;
    
    transition: 
      border-radius 0.75s cubic-bezier(0.16, 1, 0.3, 1), 
      box-shadow 0.75s cubic-bezier(0.16, 1, 0.3, 1);
    transform: translateZ(0);
    will-change: border-radius, box-shadow;
  }

  .card .mail {
    position: absolute;
    right: 2rem;
    top: 1.4rem;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 10;
  }

  .card .mail svg {
    stroke: #a78bfa;
    stroke-width: 3px;
    transition: stroke 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .card .mail svg:hover {
    stroke: #c084fc;
  }

  .card .profile-pic {
    position: absolute;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    top: 3px;
    left: 3px;
    border-radius: 29px;
    z-index: 1;
    border: 0px solid #271442;
    overflow: hidden;
    background: #000000;
    transition: width 0.75s cubic-bezier(0.16, 1, 0.3, 1),
                height 0.75s cubic-bezier(0.16, 1, 0.3, 1),
                top 0.75s cubic-bezier(0.16, 1, 0.3, 1),
                left 0.75s cubic-bezier(0.16, 1, 0.3, 1),
                border-radius 0.75s cubic-bezier(0.16, 1, 0.3, 1),
                border-width 0.75s cubic-bezier(0.16, 1, 0.3, 1),
                box-shadow 0.75s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: width, height, top, left, border-radius, transform;
  }

  .card .profile-pic img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-position: 0px 0px;
    transition: transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), object-position 0.75s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .card .profile-pic svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0px 0px;
    transform-origin: 45% 20%;
    transition: transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .card .bottom {
    position: absolute;
    bottom: 3px;
    left: 3px;
    right: 3px;
    background: #271442;
    top: 80%;
    border-radius: 29px;
    z-index: 2;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 5px 0px inset;
    overflow: hidden;
    transition: top 0.75s cubic-bezier(0.16, 1, 0.3, 1), border-radius 0.75s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: top, border-radius;
  }

  .card .bottom .content {
    position: absolute;
    bottom: 0;
    left: 1.5rem;
    right: 1.5rem;
    height: 160px;
  }

  .card .bottom .content .name {
    display: block;
    font-size: 1.2rem;
    color: white;
    font-weight: bold;
  }

  .card .bottom .content .about-me {
    display: block;
    font-size: 0.9rem;
    color: white;
    margin-top: 1rem;
  }

  .card .bottom .bottom-bottom {
    position: absolute;
    bottom: 1rem;
    left: 1.5rem;
    right: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card .bottom .bottom-bottom .social-links-container {
    display: flex;
    gap: 1rem;
  }

  .card .bottom .bottom-bottom .social-links-container svg {
    height: 20px;
    fill: white;
    filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.3));
    transition: fill 0.3s ease, transform 0.3s ease;
  }

  .card .bottom .bottom-bottom .social-links-container svg:hover {
    fill: #a78bfa;
    transform: scale(1.2);
  }

  .card .bottom .bottom-bottom .button {
    background: #a78bfa;
    color: #1e0938;
    border: none;
    border-radius: 20px;
    font-size: 0.6rem;
    font-weight: bold;
    padding: 0.4rem 0.6rem;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 5px 0px;
    transition: background 0.3s ease, color 0.3s ease;
    cursor: pointer;
  }

  .card .bottom .bottom-bottom .button:hover {
    background: #c084fc;
    color: #ffffff;
  }

  /* Blended Hover Shadow */
  .card:hover {
    border-top-left-radius: 55px;
    box-shadow: 
      12px 12px 24px #060408,
      -12px -12px 24px #1e1824,
      0 0 20px rgba(167, 139, 250, 0.15);
  }

  .card:hover .bottom {
    top: 20%;
    border-radius: 80px 29px 29px 29px;
  }

  .card:hover .profile-pic {
    width: 100px;
    height: 100px;
    top: 10px;
    left: 10px;
    border-radius: 50%;
    z-index: 3;
    border: 7px solid #271442;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 5px 0px;
  }

  .card:hover .profile-pic:hover {
    transform: scale(1.3);
    border-radius: 0px;
  }

  .card:hover .profile-pic img {
    transform: scale(2.5);
    object-position: 0px 25px;
  }

  .card:hover .profile-pic svg {
    transform: scale(2.5);
  }
`;

const LeadershipCard = ({ name, aboutMe = "Revealing soon!" }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <button className="mail">
          <svg
            className="lucide lucide-mail"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            height={24}
            width={24}
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect rx={2} y={4} x={2} height={16} width={20} />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </button>
        <div className="profile-pic" />
        <div className="bottom">
          <div className="content">
            <span className="name">{name}</span>
            <span className="about-me">
              {aboutMe}
            </span>
          </div>
          <div className="bottom-bottom">
            <div className="social-links-container">
              <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z" />
              </svg>
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>

              <svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </div>
            <button className="button">Contact Me</button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default LeadershipCard;