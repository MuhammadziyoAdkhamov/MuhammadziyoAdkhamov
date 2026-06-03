'use client';

import React from 'react';

interface XPRingProps {
  currentXP: number;
  maxXP: number;
  level: number;
  size?: 'sm' | 'md' | 'lg';
}

export const XPRing: React.FC<XPRingProps> = ({
  currentXP,
  maxXP,
  level,
  size = 'md',
}) => {
  const progress = (currentXP / maxXP) * 100;
  
  const sizeMap = {
    sm: { radius: 40, circumference: 251, strokeWidth: 3 },
    md: { radius: 60, circumference: 377, strokeWidth: 4 },
    lg: { radius: 80, circumference: 503, strokeWidth: 5 },
  };

  const config = sizeMap[size];
  const offset = config.circumference - (progress / 100) * config.circumference;

  const dimensionMap = {
    sm: { svg: 100, textSize: 'text-xl', levelSize: 'text-2xl' },
    md: { svg: 150, textSize: 'text-2xl', levelSize: 'text-4xl' },
    lg: { svg: 200, textSize: 'text-3xl', levelSize: 'text-5xl' },
  };

  const dims = dimensionMap[size];

  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        width={dims.svg}
        height={dims.svg}
        className="transform -rotate-90"
      >
        {/* Background Circle */}
        <circle
          cx={dims.svg / 2}
          cy={dims.svg / 2}
          r={config.radius}
          stroke="hsl(var(--color-surface-secondary))"
          strokeWidth={config.strokeWidth}
          fill="none"
        />
        
        {/* Progress Circle */}
        <circle
          cx={dims.svg / 2}
          cy={dims.svg / 2}
          r={config.radius}
          stroke="url(#xpGradient)"
          strokeWidth={config.strokeWidth}
          fill="none"
          strokeDasharray={config.circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-out"
          style={{ filter: 'drop-shadow(0 0 8px rgba(0, 217, 255, 0.5))' }}
        />

        {/* Gradient Definition */}
        <defs>
          <linearGradient id="xpGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--color-accent-cyan))" />
            <stop offset="100%" stopColor="hsl(var(--color-accent-lime))" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center Text */}
      <div className="absolute flex flex-col items-center justify-center">
        <div className={`font-mono font-bold ${dims.levelSize} text-accent-cyan`}>
          {level}
        </div>
        <div className={`${dims.textSize} text-text-secondary font-mono`}>
          {currentXP}/{maxXP}
        </div>
      </div>
    </div>
  );
};
