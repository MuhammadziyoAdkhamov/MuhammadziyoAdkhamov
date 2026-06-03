'use client';

import React, { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Badge } from './Badge';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock } from 'lucide-react';

interface QuestCardProps {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Legendary';
  reward: number;
  completed: boolean;
  dueToday: boolean;
  onComplete?: (id: string) => void;
}

const difficultyConfig = {
  Easy: { color: 'lime', bgColor: 'bg-accent-lime/10' },
  Medium: { color: 'cyan', bgColor: 'bg-accent-cyan/10' },
  Hard: { color: 'magenta', bgColor: 'bg-accent-magenta/10' },
  Legendary: { color: 'magenta', bgColor: 'bg-accent-magenta/20' },
};

export const QuestCard: React.FC<QuestCardProps> = ({
  id,
  title,
  description,
  difficulty,
  reward,
  completed,
  dueToday,
  onComplete,
}) => {
  const [isCompleting, setIsCompleting] = useState(false);
  const config = difficultyConfig[difficulty];

  const handleComplete = async () => {
    setIsCompleting(true);
    // Simulate celebration animation
    setTimeout(() => {
      onComplete?.(id);
      setIsCompleting(false);
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        variant={completed ? 'secondary' : 'primary'}
        className={`p-4 md:p-6 ${completed ? 'opacity-60' : ''} ${dueToday ? 'border-accent-cyan' : ''}`}
      >
        <div className="space-y-4">
          {/* Title and Difficulty */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-text-primary line-clamp-2">
                {title}
              </h3>
              <p className="text-text-secondary text-sm mt-1 line-clamp-2">
                {description}
              </p>
            </div>
            <Badge variant={config.color as any} size="sm">
              {difficulty}
            </Badge>
          </div>

          {/* Reward and Status */}
          <div className="flex items-center justify-between pt-2 border-t border-surface-secondary">
            <div className="flex items-center gap-2">
              {completed ? (
                <div className="flex items-center gap-2 text-accent-lime">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-sm font-semibold">Completed</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-text-secondary">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-semibold">+{reward} XP</span>
                </div>
              )}
            </div>
            {!completed && (
              <Button
                size="sm"
                variant="primary"
                onClick={handleComplete}
                loading={isCompleting}
              >
                Complete
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
