import React from 'react';

interface BotanicalArtProps {
  className?: string;
  variant?: 'hero-branch' | 'subtle-petal' | 'corner-flourish' | 'crest';
  opacity?: number;
}

export const BotanicalArt: React.FC<BotanicalArtProps> = ({
  className = '',
  variant = 'hero-branch',
  opacity = 0.2,
}) => {
  if (variant === 'subtle-petal') {
    return (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none select-none ${className}`}
        style={{ opacity }}
      >
        <path
          d="M20 5 C12 12, 10 24, 20 35 C30 24, 28 12, 20 5 Z"
          fill="#E0A0B0"
        />
        <path
          d="M20 8 C18 15, 18 25, 20 32"
          stroke="#7A0F2E"
          strokeWidth="0.75"
          opacity="0.5"
        />
      </svg>
    );
  }

  if (variant === 'corner-flourish') {
    return (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none select-none ${className}`}
        style={{ opacity }}
      >
        <path
          d="M10 190 C60 160, 110 120, 180 30"
          stroke="#3A241E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M80 135 C110 120, 130 95, 145 65"
          stroke="#3A241E"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Leaves */}
        <path
          d="M110 120 C125 110, 135 115, 140 125 C125 130, 115 125, 110 120 Z"
          fill="#34483B"
        />
        <path
          d="M60 150 C70 140, 78 142, 82 150 C72 155, 65 152, 60 150 Z"
          fill="#708070"
        />
        {/* Sakura blossom */}
        <circle cx="150" cy="60" r="14" fill="#F0B0C0" fillOpacity="0.4" />
        <circle cx="150" cy="60" r="4" fill="#7A0F2E" />
      </svg>
    );
  }

  if (variant === 'crest') {
    return (
      <div className={`relative flex items-center justify-center ${className}`} style={{ opacity }}>
        <svg
          viewBox="0 0 160 160"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="80" cy="80" r="76" stroke="#7A0F2E" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="80" cy="80" r="68" stroke="#3A241E" strokeWidth="0.75" />
          <path
            d="M30 110 C55 90, 80 75, 130 50"
            stroke="#3A241E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="105" cy="60" r="16" fill="#F0B0C0" fillOpacity="0.3" />
          <circle cx="105" cy="60" r="5" fill="#7A0F2E" />
          <circle cx="65" cy="115" r="10" fill="#5A1020" />
          <circle cx="50" cy="118" r="9" fill="#8C1835" />
        </svg>
      </div>
    );
  }

  // Default: hero-branch
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
    >
      <g filter="blur(0.5px)">
        {/* Main branch curve */}
        <path
          d="M50 550 C200 480, 320 380, 480 180 C530 120, 560 70, 580 30"
          stroke="#3A241E"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Offshoot branches */}
        <path
          d="M280 390 C340 320, 420 280, 510 260"
          stroke="#3A241E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M180 470 C160 400, 130 350, 90 310"
          stroke="#3A241E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M400 260 C440 210, 480 180, 530 160"
          stroke="#3A241E"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Botanical Sage/Green Leaves */}
        <path
          d="M480 180 C510 160, 530 170, 535 190 C505 195, 490 188, 480 180 Z"
          fill="#34483B"
        />
        <path
          d="M340 320 C370 300, 390 310, 395 330 C365 335, 350 328, 340 320 Z"
          fill="#708070"
        />
        <path
          d="M130 350 C110 320, 120 300, 140 295 C145 320, 138 340, 130 350 Z"
          fill="#34483B"
        />
        <path
          d="M230 430 C250 410, 270 418, 275 435 C255 440, 240 435, 230 430 Z"
          fill="#708070"
        />

        {/* Delicate Sakura Blossoms */}
        <g transform="translate(470, 170)">
          <circle cx="0" cy="0" r="28" fill="#F0B0C0" fillOpacity="0.25" />
          <circle cx="0" cy="0" r="18" fill="#E0A0B0" fillOpacity="0.4" />
          <circle cx="0" cy="0" r="7" fill="#7A0F2E" />
          <circle cx="0" cy="0" r="3" fill="#FFFFFF" opacity="0.8" />
        </g>

        <g transform="translate(330, 310)">
          <circle cx="0" cy="0" r="22" fill="#F0B0C0" fillOpacity="0.2" />
          <circle cx="0" cy="0" r="14" fill="#E0A0B0" fillOpacity="0.35" />
          <circle cx="0" cy="0" r="5" fill="#7A0F2E" />
        </g>

        {/* Cherry Pair Accent */}
        <path
          d="M200 450 C205 480, 215 510, 225 530"
          stroke="#708070"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M200 450 C185 480, 170 505, 155 525"
          stroke="#708070"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="228" cy="535" r="16" fill="#5A1020" />
        <circle cx="228" cy="535" r="13" fill="#7A0F2E" />
        <circle cx="224" cy="530" r="3" fill="#FFFFFF" opacity="0.5" />

        <circle cx="152" cy="530" r="14" fill="#5A1020" />
        <circle cx="152" cy="530" r="11" fill="#8C1835" />
        <circle cx="149" cy="526" r="2.5" fill="#FFFFFF" opacity="0.6" />
      </g>
    </svg>
  );
};
