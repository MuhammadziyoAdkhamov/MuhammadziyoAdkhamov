'use client';

import { useState } from 'react';
import { Container } from '@/components/Container';
import { CharacterCard } from '@/components/CharacterCard';
import { QuestCard } from '@/components/QuestCard';
import { Navigation } from '@/components/Navigation';
import { RewardNotification, Reward } from '@/components/RewardNotification';
import { Confetti } from '@/components/Confetti';
import { LevelUpModal } from '@/components/LevelUpModal';
import { motion } from 'framer-motion';

interface Quest {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Legendary';
  reward: number;
  completed: boolean;
  dueToday: boolean;
}

export default function Home() {
  const [character, setCharacter] = useState({
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
  });

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
  ]);

  const [reward, setReward] = useState<Reward | null>(null);
  const [levelUpShow, setLevelUpShow] = useState(false);
  const [confettiTrigger, setConfettiTrigger] = useState(false);

  const handleQuestComplete = (questId: string) => {
    const quest = quests.find((q) => q.id === questId);
    if (quest) {
      setQuests(
        quests.map((q) =>
          q.id === questId ? { ...q, completed: true } : q
        )
      );

      // Show reward
      setReward({
        id: `reward-${questId}`,
        type: 'xp',
        amount: quest.reward,
      });

      // Update character XP
      setCharacter((prev) => {
        let newXP = prev.currentXP + quest.reward;
        let newLevel = prev.level;

        if (newXP >= prev.maxXP) {
          newLevel += 1;
          newXP = newXP - prev.maxXP;

          // Trigger celebrations
          setTimeout(() => {
            setLevelUpShow(true);
            setConfettiTrigger(true);
            setReward({
              id: `levelup-${Date.now()}`,
              type: 'achievement',
              title: 'Level Up!',
              description: `You reached level ${newLevel}!`,
            });
          }, 500);
        }

        return {
          ...prev,
          currentXP: newXP,
          level: newLevel,
        };
      });
    }
  };

  const completedCount = quests.filter((q) => q.completed).length;
  const totalQuestRewards = quests
    .filter((q) => q.completed)
    .reduce((sum, q) => sum + q.reward, 0);

  return (
    <main className="min-h-screen bg-background text-foreground md:ml-20 mb-20 md:mb-0">
      <Navigation />

      {/* Header Section */}
      <div className="bg-gradient-dark border-b border-surface-secondary">
        <Container maxWidth="2xl" className="py-8 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-2">
              Welcome Back
            </h1>
            <p className="text-text-secondary">
              {`You've completed ${completedCount} of ${quests.length} quests today`}
            </p>
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

        {/* Quests Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Today's Quests</h2>
            <div className="space-y-3">
              {quests
                .filter((q) => q.dueToday)
                .map((quest) => (
                  <QuestCard
                    key={quest.id}
                    {...quest}
                    onComplete={handleQuestComplete}
                  />
                ))}
            </div>
          </div>

          {/* Other Quests */}
          {quests.some((q) => !q.dueToday) && (
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Available Quests</h3>
              <div className="space-y-3">
                {quests
                  .filter((q) => !q.dueToday)
                  .map((quest) => (
                    <QuestCard
                      key={quest.id}
                      {...quest}
                      onComplete={handleQuestComplete}
                    />
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-6 bg-surface-primary rounded-lg border border-surface-secondary"
        >
          <h3 className="text-lg font-bold text-text-primary mb-4">Today's Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-text-secondary text-sm">Quests Completed</p>
              <p className="text-2xl font-bold text-accent-cyan">{completedCount}</p>
            </div>
            <div>
              <p className="text-text-secondary text-sm">XP Earned</p>
              <p className="text-2xl font-bold text-accent-lime">+{totalQuestRewards}</p>
            </div>
            <div>
              <p className="text-text-secondary text-sm">Current Level</p>
              <p className="text-2xl font-bold text-accent-magenta">{character.level}</p>
            </div>
            <div>
              <p className="text-text-secondary text-sm">Streak</p>
              <p className="text-2xl font-bold text-orange-400">{character.streak}</p>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Reward Notification */}
      <RewardNotification
        reward={reward}
        onClose={() => setReward(null)}
      />

      {/* Level Up Modal */}
      <LevelUpModal
        show={levelUpShow}
        level={character.level}
        onClose={() => setLevelUpShow(false)}
      />

      {/* Confetti */}
      <Confetti
        trigger={confettiTrigger}
        onComplete={() => setConfettiTrigger(false)}
      />
    </main>
  );
}
