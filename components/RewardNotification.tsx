'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Star, Trophy } from 'lucide-react';

export interface Reward {
  id: string;
  type: 'xp' | 'achievement' | 'bonus';
  amount?: number;
  title?: string;
  description?: string;
}

interface RewardNotificationProps {
  reward: Reward | null;
  onClose: () => void;
}

export const RewardNotification: React.FC<RewardNotificationProps> = ({
  reward,
  onClose,
}) => {
  useEffect(() => {
    if (reward) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
    return;
  }, [reward, onClose]);

  return (
    <AnimatePresence>
      {reward && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{ duration: 0.4 }}
          className="fixed top-4 right-4 z-50"
        >
          <div className="bg-surface-primary border-2 border-accent-lime rounded-lg p-4 md:p-6 shadow-xl">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, repeat: 2 }}
                className="text-2xl"
              >
                {reward.type === 'xp' && <Zap className="w-6 h-6 text-accent-lime" />}
                {reward.type === 'achievement' && <Star className="w-6 h-6 text-accent-magenta" />}
                {reward.type === 'bonus' && <Trophy className="w-6 h-6 text-accent-cyan" />}
              </motion.div>
              <div>
                <p className="font-bold text-text-primary">
                  {reward.type === 'xp' && `+${reward.amount} XP!`}
                  {reward.type === 'achievement' && reward.title}
                  {reward.type === 'bonus' && reward.title}
                </p>
                {reward.description && (
                  <p className="text-sm text-text-secondary">{reward.description}</p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
