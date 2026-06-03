'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Sparkles } from 'lucide-react';

interface LevelUpModalProps {
  show: boolean;
  level: number;
  onClose: () => void;
}

export const LevelUpModal: React.FC<LevelUpModalProps> = ({ show, level, onClose }) => {
  React.useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
    return;
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-40"
        >
          <motion.div
            initial={{ scale: 0.5, y: -50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.5, y: 50 }}
            transition={{ type: 'spring', damping: 15, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative"
          >
            {/* Glow background */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-cyan via-accent-magenta to-accent-lime opacity-75 blur-xl -z-10"
            />

            <div className="bg-background border-2 border-accent-lime rounded-2xl p-8 text-center relative">
              {/* Sparkles */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity }}>
                <Sparkles className="w-12 h-12 text-accent-lime mx-auto mb-4" />
              </motion.div>

              {/* Level Number */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.2 }}
                className="mb-4"
              >
                <div className="text-7xl font-bold text-accent-lime">{level}</div>
              </motion.div>

              {/* Text */}
              <h2 className="text-2xl font-bold text-text-primary mb-2">Level Up!</h2>
              <p className="text-text-secondary mb-6">
                You&apos;ve reached a new level in your journey
              </p>

              {/* Animated Icon */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Zap className="w-8 h-8 text-accent-cyan mx-auto" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
