'use client';

import { useState } from 'react';
import { Container } from '@/components/Container';
import { QuestCard } from '@/components/QuestCard';
import { Navigation } from '@/components/Navigation';
import { RewardNotification, Reward } from '@/components/RewardNotification';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';

interface Quest {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Legendary';
  reward: number;
  completed: boolean;
  dueToday: boolean;
}

export default function QuestsPage() {
  const [filter, setFilter] = useState<'all' | 'today' | 'completed' | 'pending'>('all');
  const [reward, setReward] = useState<Reward | null>(null);

  const [quests, setQuests] = useState<Quest[]>([
    {
      id: '1',
      title: 'Morning Meditation',
      description: 'Practice 10 minutes of meditation',
      difficulty: 'Easy',
      reward: 50,
      completed: false,
      dueToday: true,
    },
    {
      id: '2',
      title: 'Write in Journal',
      description: 'Reflect on today and write 500 words',
      difficulty: 'Medium',
      reward: 75,
      completed: false,
      dueToday: true,
    },
    {
      id: '3',
      title: 'Cold Shower Challenge',
      description: '5 minute cold shower',
      difficulty: 'Hard',
      reward: 150,
      completed: false,
      dueToday: false,
    },
    {
      id: '4',
      title: 'Read a Chapter',
      description: 'Read 1 chapter from current book',
      difficulty: 'Easy',
      reward: 40,
      completed: true,
      dueToday: true,
    },
    {
      id: '5',
      title: 'Exercise for 30 Minutes',
      description: 'Do cardio or strength training',
      difficulty: 'Hard',
      reward: 120,
      completed: false,
      dueToday: false,
    },
    {
      id: '6',
      title: 'Learn Something New',
      description: 'Spend 30 minutes learning a new skill',
      difficulty: 'Medium',
      reward: 90,
      completed: false,
      dueToday: false,
    },
  ]);

  const handleQuestComplete = (questId: string) => {
    setQuests(
      quests.map((q) =>
        q.id === questId ? { ...q, completed: true } : q
      )
    );

    const quest = quests.find((q) => q.id === questId);
    if (quest) {
      setReward({
        id: `reward-${questId}`,
        type: 'xp',
        amount: quest.reward,
      });
    }
  };

  const filteredQuests = quests.filter((q) => {
    if (filter === 'today') return q.dueToday;
    if (filter === 'completed') return q.completed;
    if (filter === 'pending') return !q.completed;
    return true;
  });

  const stats = {
    total: quests.length,
    completed: quests.filter((q) => q.completed).length,
    pending: quests.filter((q) => !q.completed).length,
    totalReward: quests.reduce((sum, q) => sum + (q.completed ? q.reward : 0), 0),
  };

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
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              All Quests
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-text-secondary text-sm">Total Quests</p>
                <p className="text-2xl font-bold text-accent-cyan">{stats.total}</p>
              </div>
              <div>
                <p className="text-text-secondary text-sm">Completed</p>
                <p className="text-2xl font-bold text-accent-lime">{stats.completed}</p>
              </div>
              <div>
                <p className="text-text-secondary text-sm">In Progress</p>
                <p className="text-2xl font-bold text-accent-magenta">{stats.pending}</p>
              </div>
              <div>
                <p className="text-text-secondary text-sm">XP Earned</p>
                <p className="text-2xl font-bold text-orange-400">+{stats.totalReward}</p>
              </div>
            </div>
          </motion.div>
        </Container>
      </div>

      {/* Filter Buttons */}
      <Container maxWidth="2xl" className="py-6">
        <div className="flex flex-wrap gap-2 md:gap-3">
          {(['all', 'today', 'completed', 'pending'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all capitalize ${
                filter === f
                  ? 'bg-accent-cyan text-background'
                  : 'bg-surface-primary text-text-secondary hover:text-accent-cyan'
              }`}
            >
              <Filter className="w-4 h-4" />
              {f === 'pending' ? 'In Progress' : f}
            </button>
          ))}
        </div>
      </Container>

      {/* Quests List */}
      <Container maxWidth="2xl" className="py-8">
        <div className="space-y-3">
          {filteredQuests.map((quest) => (
            <QuestCard
              key={quest.id}
              {...quest}
              onComplete={handleQuestComplete}
            />
          ))}
        </div>
      </Container>

      <RewardNotification
        reward={reward}
        onClose={() => setReward(null)}
      />
    </main>
  );
}
