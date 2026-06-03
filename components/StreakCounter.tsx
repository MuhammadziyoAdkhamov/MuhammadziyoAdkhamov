'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';
import { Card } from './Card';

interface StreakCounterProps {
  currentStreak: number;
  longestStreak?: number;
  showAnimation?: boolean;
}

export const StreakCounter: React.FC<StreakCounterProps> = ({
  currentStreak,
  longestStreak = 0,
  showAnimation = false,
}) => {
  const getMilestoneMessage = (streak: number) => {
    if (streak === 7) return '🎉 Week Warrior!';
    if (streak === 30) return '🏆 Monthly Legend!';
    if (streak === 100) return '👑 Centennial Champion!';
    if (streak % 10 === 0 && streak > 0) return `⭐ ${streak} Day Milestone!`;
    return null;
  };

  const milestone = getMilestoneMessage(currentStreak);

  return (
    <div className="space-y-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative"
      >
        <Card
          variant="accent"
          className="p-8 text-center relative overflow-hidden"
        >
          {/* Background glow */}
          <motion.div
            animate={{ scale: showAnimation ? [1, 1.1, 1] : 1 }}
            transition={{ duration: 1, repeat: showAnimation ? Infinity : 0 }}
            className="absolute inset-0 bg-orange-500/10 blur-2xl -z-10"
          />

          <div className="relative z-10 flex flex-col items-center gap-4">
            <motion.div
              animate={{ rotate: showAnimation ? 360 : 0 }}
              transition={{ duration: 2, repeat: showAnimation ? Infinity : 0 }}
            >
              <Flame className="w-16 h-16 text-orange-400" />
            </motion.div>

            <div>
              <motion.div
                animate={{ scale: showAnimation ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 1, repeat: showAnimation ? Infinity : 0 }}
                className="text-5xl font-bold text-orange-400 font-mono"
              >
                {currentStreak}
              </motion.div>
              <p className="text-text-secondary mt-2">Day Streak</p>
            </div>

            {longestStreak > currentStreak && (
              <p className="text-sm text-text-tertiary">
                Longest: {longestStreak} days
              </p>
            )}
          </div>
        </Card>
      </motion.div>

      {milestone && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-orange-500/20 border border-orange-500/50 rounded-lg p-4 text-center"
        >
          <p className="font-bold text-orange-400">{milestone}</p>
        </motion.div>
      )}
    </div>
  );
};
