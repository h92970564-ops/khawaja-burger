import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'cream';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  showTagline = false,
}) => {
  const isDarkCanvas = variant === 'light'; // Light logo text for dark background

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Memorable Emblem: Flame & Sizzle Burger Icon */}
      <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-orange-600 p-[1.5px] shadow-lg shadow-amber-500/20 shrink-0">
        <div className="w-full h-full bg-[#121316] rounded-[10px] flex items-center justify-center p-1.5">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Top Bun */}
            <path
              d="M5 14C5 8.5 9.5 4 16 4C22.5 4 27 8.5 27 14C27 14.5 26.5 15 25.8 15H6.2C5.5 15 5 14.5 5 14Z"
              fill="url(#topBunGrad)"
            />
            {/* Sesame Seeds */}
            <circle cx="12" cy="8" r="0.8" fill="#FFF8E7" opacity="0.9" />
            <circle cx="16" cy="7" r="0.8" fill="#FFF8E7" opacity="0.9" />
            <circle cx="20" cy="8.5" r="0.8" fill="#FFF8E7" opacity="0.9" />
            <circle cx="14" cy="11" r="0.8" fill="#FFF8E7" opacity="0.9" />
            <circle cx="18" cy="11.5" r="0.8" fill="#FFF8E7" opacity="0.9" />

            {/* Melted Cheese Layer (dripping) */}
            <path
              d="M4 16.5C4 16.5 7 16.5 9 17.5C10.5 18.2 11 19.8 12.5 19.8C14 19.8 14.5 17 17 17C19.5 17 20 18.5 21.5 18.5C23 18.5 24.5 16.5 28 16.5"
              stroke="#FACC15"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {/* Flame-Broiled Patty */}
            <rect
              x="5"
              y="20"
              width="22"
              height="3.6"
              rx="1.8"
              fill="#D97706"
            />

            {/* Bottom Bun */}
            <path
              d="M6 25C6 24.4 6.4 24 7 24H25C25.6 24 26 24.4 26 25C26 27.2 21.5 29 16 29C10.5 29 6 27.2 6 25Z"
              fill="url(#bottomBunGrad)"
            />

            <defs>
              <linearGradient id="topBunGrad" x1="5" y1="4" x2="27" y2="15" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FBBF24" />
                <stop offset="1" stopColor="#D97706" />
              </linearGradient>
              <linearGradient id="bottomBunGrad" x1="6" y1="24" x2="26" y2="29" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F59E0B" />
                <stop offset="1" stopColor="#B45309" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span
            className={`font-display text-xl md:text-2xl font-black tracking-tight ${
              isDarkCanvas ? 'text-white' : 'text-[#121316]'
            }`}
          >
            KHAWAJA
          </span>
          <span className="font-display text-xl md:text-2xl font-black tracking-wider text-amber-400">
            BURGER
          </span>
        </div>
        {showTagline && (
          <span className="text-[10px] uppercase font-semibold tracking-widest text-amber-500/90 mt-0.5">
            Taste That Hits Different!
          </span>
        )}
      </div>
    </div>
  );
};
