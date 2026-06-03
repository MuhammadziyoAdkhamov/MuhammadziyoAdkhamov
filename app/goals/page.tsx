'use client';

import { useState } from 'react';
import { Container } from '@/components/Container';
import { Card } from '@/components/Card';
import { Badge } from '@/components/Badge';
import { Navigation } from '@/components/Navigation';
import { motion } from 'framer-motion';
import { Target, CheckCircle2, Calendar, Zap } from 'lucide-react';

interface Goal {
  id: string;
  title: string;
  description: string;
  progress: number;
  target: number;
  dueDate: string;
  relatedQuests: number;
  status: 'active' | 'completed' | 'paused';
  category: 'health' | 'learning' | 'fitness' | 'career' | 'personal';
}

export default function GoalsPage() {
  const [goals] = useState<Goal[]>([
    {
      id: '1',
      title: 'Complete 30-Day Meditation Challenge',
      description: 'Build a consistent meditation habit with daily 10-minute sessions',
      progress: 12,
      target: 30,
      dueDate: '2024-07-03',
      relatedQuests: 12,
      status: 'active',
      category: 'health',
    },
    {
      id: '2',
      title: 'Learn Web Development Fundamentals',
      description: 'Complete online course and build 3 projects',
      progress: 60,
      target: 100,
      dueDate: '2024-07-30',
      relatedQuests: 25,
      status: 'active',
      category: 'learning',
    },
    {
      id: '3',
      title: 'Read 12 Books This Year',
      description: 'Read one book per month and write reviews',
      progress: 3,
      target: 12,
      dueDate: '2024-12-31',
      relatedQuests: 3,
      status: 'active',
      category: 'personal',
    },
    {
      id: '4',
      title: 'Run a 5K Race',
      description: 'Train and complete a 5K race',
      progress: 100,
      target: 100,
      dueDate: '2024-05-20',
      relatedQuests: 40,
      status: 'completed',
      category: 'fitness',
    },
  ]);

  const totalProgress = Math.round(
    goals.reduce((sum, g) => sum + (g.progress / g.target) * 100, 0) / goals.length
  );

  const completedGoals = goals.filter((g) => g.status === 'completed').length;

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
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Story Arcs & Goals
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-text-secondary text-sm">Total Goals</p>
                <p className="text-2xl font-bold text-accent-cyan">{goals.length}</p>
              </div>
              <div>
                <p className="text-text-secondary text-sm">Completed</p>
                <p className="text-2xl font-bold text-accent-lime">{completedGoals}</p>
              </div>
              <div>
                <p className="text-text-secondary text-sm">In Progress</p>
                <p className="text-2xl font-bold text-accent-magenta">
                  {goals.filter((g) => g.status === 'active').length}
                </p>
              </div>
              <div>
                <p className="text-text-secondary text-sm">Overall Progress</p>
                <p className="text-2xl font-bold text-accent-cyan">{totalProgress}%</p>
              </div>
            </div>
          </motion.div>
        </Container>
      </div>

      {/* Content */}
      <Container maxWidth="2xl" className="py-8 md:py-12">
        {/* Active Goals */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Active Story Arcs</h2>
          <div className="space-y-4">
            {goals
              .filter((g) => g.status === 'active')
              .map((goal, index) => {
                const progressPercent = (goal.progress / goal.target) * 100;

                return (
                  <motion.div
                    key={goal.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card variant="secondary" className="p-6 hover:border-accent-cyan transition-colors">
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Target className="w-5 h-5 text-accent-cyan" />
                              <h3 className="text-lg font-bold text-text-primary">
                                {goal.title}
                              </h3>
                            </div>
                            <p className="text-text-secondary text-sm">{goal.description}</p>
                          </div>
                          <Badge variant="cyan" size="sm">
                            {goal.category}
                          </Badge>
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-mono text-text-secondary">
                              {goal.progress}/{goal.target}
                            </span>
                            <span className="text-sm font-bold text-accent-cyan">
                              {progressPercent.toFixed(0)}%
                            </span>
                          </div>
                          <div className="w-full h-3 bg-surface-primary rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${progressPercent}%` }}
                              transition={{ duration: 0.8, ease: 'easeOut' }}
                              className="h-full bg-gradient-to-r from-accent-cyan to-accent-lime"
                            />
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-2 border-t border-surface-secondary">
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1 text-text-secondary">
                              <Calendar className="w-4 h-4" />
                              {goal.dueDate}
                            </div>
                            <div className="flex items-center gap-1 text-text-secondary">
                              <Zap className="w-4 h-4" />
                              {goal.relatedQuests} quests
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
          </div>
        </div>

        {/* Completed Goals */}
        {completedGoals > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-accent-lime" />
              Completed Story Arcs
            </h2>
            <div className="space-y-4">
              {goals
                .filter((g) => g.status === 'completed')
                .map((goal, index) => (
                  <motion.div
                    key={goal.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card
                      variant="secondary"
                      className="p-6 opacity-60 hover:opacity-100 transition-opacity"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent-lime flex-shrink-0" />
                            <h3 className="text-lg font-bold text-text-primary">
                              {goal.title}
                            </h3>
                          </div>
                          <p className="text-text-secondary text-sm mt-1">
                            Completed on {goal.dueDate}
                          </p>
                        </div>
                        <Badge variant="lime">Completed</Badge>
                      </div>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </div>
        )}
      </Container>
    </main>
  );
}
