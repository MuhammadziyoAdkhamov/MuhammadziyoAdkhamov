'use client';

import React from 'react';
import { Card } from './Card';
import { XPRing } from './XPRing';
import { StatBadge } from './StatBadge';
import { Badge } from './Badge';
import { motion } from 'framer-motion';

interface CharacterCardProps {
  name: string;
  level: number;
  currentXP: number;
  maxXP: number;
  stats: {
    strength: number;
    vitality: number;
    wisdom: number;
  };
  streak: number;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  name,
  level,
  currentXP,
  maxXP,
  stats,
  streak,
}) => {
  return (
    <Card variant="accent" className="p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold text-text-primary">{name}</h2>
            <p className="text-text-secondary mt-1">RPG Character</p>
          </div>
          <Badge variant="lime">
            🔥 {streak} Day Streak
          </Badge>
        </div>

        {/* XP Ring */}
        <div className="flex justify-center py-4">
          <XPRing
            level={level}
            currentXP={currentXP}
            maxXP={maxXP}
            size="lg"
          />
        </div>

        {/* Stats */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-text-primary">Base Stats</h3>
          <div className="space-y-3">
            <StatBadge label="Strength" value={stats.strength} />
            <StatBadge label="Vitality" value={stats.vitality} />
            <StatBadge label="Wisdom" value={stats.wisdom} />
          </div>
        </div>
      </motion.div>
    </Card>
  );
};
