'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Trophy, Flame } from 'lucide-react';

interface AchievementBadgeProps {
  title: string;
  description: string;
  icon: 'star' | 'trophy' | 'flame';
  unlocked: boolean;
  unlockedDate?: Date;
  rarity?: 'common' | 'rare' | 'epic' | 'legendary';
}

const iconMap = {
  star: Star,
  trophy: Trophy,
  flame: Flame,
};

const rarityConfig = {
  common: { color: 'text-text-secondary', border: 'border-text-tertiary', bg: 'bg-surface-secondary' },
  rare: { color: 'text-accent-cyan', border: 'border-accent-cyan', bg: 'bg-accent-cyan/10' },
  epic: { color: 'text-accent-magenta', border: 'border-accent-magenta', bg: 'bg-accent-magenta/10' },
  legendary: { color: 'text-accent-lime', border: 'border-accent-lime', bg: 'bg-accent-lime/10' },
};

export const AchievementBadge: React.FC<AchievementBadgeProps> = ({
  title,
  description,
  icon,
  unlocked,
  unlockedDate,
  rarity = 'rare',
}) => {
  const Icon = iconMap[icon];
  const config = rarityConfig[rarity];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center"
    >
      <div
        className={`w-20 h-20 rounded-lg border-2 flex items-center justify-center mb-3 transition-all ${
          unlocked
            ? `${config.bg} ${config.border} cursor-pointer hover:shadow-lg hover:shadow-current`
            : 'bg-surface-secondary border-text-tertiary opacity-40'
        }`}
      >
        <Icon
          className={`w-10 h-10 ${unlocked ? config.color : 'text-text-tertiary'}`}
        />
      </div>
      <h3 className={`text-sm font-bold text-center ${unlocked ? 'text-text-primary' : 'text-text-tertiary'}`}>
        {title}
      </h3>
      <p className="text-xs text-text-secondary text-center mt-1 max-w-[80px]">
        {description}
      </p>
      {unlocked && unlockedDate && (
        <span className="text-xs text-text-tertiary mt-2">
          {unlockedDate.toLocaleDateString()}
        </span>
      )}
    </motion.div>
  );
};
