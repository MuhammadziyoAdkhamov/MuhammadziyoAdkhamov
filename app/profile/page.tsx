'use client';
import { Container } from '@/components/Container';
import { Card } from '@/components/Card';
import { CharacterCard } from '@/components/CharacterCard';
import { AchievementBadge } from '@/components/AchievementBadge';
import { Navigation } from '@/components/Navigation';
import { motion } from 'framer-motion';
import { Zap, Target, Calendar } from 'lucide-react';

export default function ProfilePage() {
  const achievements = [
    {
      title: 'First Quest',
      description: 'Completed your first quest',
      icon: 'star' as const,
      unlocked: true,
      unlockedDate: new Date('2024-06-01'),
      rarity: 'rare' as const,
    },
    {
      title: 'Week Warrior',
      description: '7-day streak',
      icon: 'flame' as const,
      unlocked: true,
      unlockedDate: new Date('2024-06-07'),
      rarity: 'epic' as const,
    },
    {
      title: 'Level Master',
      description: 'Reach level 10',
      icon: 'trophy' as const,
      unlocked: false,
      rarity: 'legendary' as const,
    },
    {
      title: 'Meditation Master',
      description: 'Complete 30 meditations',
      icon: 'star' as const,
      unlocked: false,
      rarity: 'epic' as const,
    },
    {
      title: 'Speed Runner',
      description: 'Complete 5 quests in a day',
      icon: 'flame' as const,
      unlocked: true,
      unlockedDate: new Date('2024-06-03'),
      rarity: 'rare' as const,
    },
    {
      title: 'Legendary Status',
      description: 'Complete a legendary quest',
      icon: 'trophy' as const,
      unlocked: false,
      rarity: 'legendary' as const,
    },
  ];

  const character = {
    name: 'Seeker',
    level: 5,
    currentXP: 350,
    maxXP: 1000,
    stats: {
      strength: 42,
      vitality: 58,
      wisdom: 65,
    },
    streak: 12,
  };

  const levelHistory = [
    { level: 1, date: '2024-05-20' },
    { level: 2, date: '2024-05-24' },
    { level: 3, date: '2024-05-28' },
    { level: 4, date: '2024-05-31' },
    { level: 5, date: '2024-06-03' },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground md:ml-20 mb-20 md:mb-0">
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-dark border-b border-surface-secondary">
        <Container maxWidth="2xl" className="py-8 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">Profile</h1>
            <p className="text-text-secondary mt-2">Your character and achievements</p>
          </motion.div>
        </Container>
      </div>

      {/* Main Content */}
      <Container maxWidth="2xl" className="py-8 md:py-12">
        {/* Character Card */}
        <div className="mb-12">
          <CharacterCard
            name={character.name}
            level={character.level}
            currentXP={character.currentXP}
            maxXP={character.maxXP}
            stats={character.stats}
            streak={character.streak}
          />
        </div>

        {/* Level History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-text-primary mb-6">Level History</h2>
          <Card variant="secondary" className="p-6">
            <div className="space-y-4">
              {levelHistory.map((item, index) => (
                <div key={item.level} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-cyan/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-accent-cyan">Lvl {item.level}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-text-primary">
                      Level {item.level} Reached
                    </p>
                    <p className="text-sm text-text-secondary">{item.date}</p>
                  </div>
                  {index === levelHistory.length - 1 && (
                    <div className="px-3 py-1 rounded bg-accent-cyan/20 text-accent-cyan text-xs font-semibold">
                      Current
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-text-primary mb-6">Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AchievementBadge
                  title={achievement.title}
                  description={achievement.description}
                  icon={achievement.icon}
                  unlocked={achievement.unlocked}
                  unlockedDate={achievement.unlockedDate}
                  rarity={achievement.rarity}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-text-primary mb-6">Overall Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card variant="secondary" className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-cyan/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-accent-cyan" />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Total XP</p>
                  <p className="text-2xl font-bold text-accent-cyan">3,450</p>
                </div>
              </div>
            </Card>
            <Card variant="secondary" className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-magenta/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-accent-magenta" />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Quests Done</p>
                  <p className="text-2xl font-bold text-accent-magenta">47</p>
                </div>
              </div>
            </Card>
            <Card variant="secondary" className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-lime/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-accent-lime" />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Active Days</p>
                  <p className="text-2xl font-bold text-accent-lime">32</p>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </Container>
    </main>
  );
}
