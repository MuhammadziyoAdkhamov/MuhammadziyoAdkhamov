import React from 'react';
import { Zap, Heart, Brain } from 'lucide-react';

interface StatBadgeProps {
  label: 'Strength' | 'Vitality' | 'Wisdom';
  value: number;
  maxValue?: number;
}

const statConfig = {
  Strength: { icon: Zap, color: 'text-accent-magenta' },
  Vitality: { icon: Heart, color: 'text-red-400' },
  Wisdom: { icon: Brain, color: 'text-accent-cyan' },
};

export const StatBadge: React.FC<StatBadgeProps> = ({
  label,
  value,
  maxValue = 100,
}) => {
  const config = statConfig[label];
  const Icon = config.icon;
  const percentage = (value / maxValue) * 100;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className={`w-5 h-5 ${config.color}`} />
          <span className="text-sm font-semibold text-text-primary">{label}</span>
        </div>
        <span className="text-sm font-mono text-text-secondary">{value}</span>
      </div>
      <div className="w-full h-2 bg-surface-secondary rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-300 bg-gradient-to-r from-${config.color} to-accent-lime`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
