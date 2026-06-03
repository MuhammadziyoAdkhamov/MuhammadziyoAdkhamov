'use client';

import { useState } from 'react';
import { Container } from '@/components/Container';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Target, Zap } from 'lucide-react';

export default function OnboardPage() {
  const [step, setStep] = useState(0);
  const [characterName, setCharacterName] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'Easy' | 'Medium' | 'Hard' | null>(null);

  const steps = [
    {
      title: 'Welcome to Life OS',
      subtitle: 'Your Self-Improvement RPG',
      description: 'Transform your daily habits into an epic adventure. Every quest completed levels you up.',
      icon: Sparkles,
    },
    {
      title: 'Create Your Character',
      subtitle: 'What is your name, adventurer?',
      description: 'Choose a name for your RPG character. This is how you\'ll be known throughout your journey.',
      icon: Target,
    },
    {
      title: 'Select Difficulty',
      subtitle: 'How challenging do you want your quests?',
      description: 'This affects the complexity and rewards. You can change it anytime.',
      icon: Zap,
    },
  ];

  const currentStep = steps[step];
  const CurrentIcon = currentStep.icon;

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      // Complete onboarding
      window.location.href = '/';
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <Container maxWidth="md" className="py-8">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="space-y-8"
        >
          {/* Icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center"
          >
            <div className="w-24 h-24 rounded-2xl bg-accent-cyan/20 flex items-center justify-center">
              <CurrentIcon className="w-12 h-12 text-accent-cyan" />
            </div>
          </motion.div>

          {/* Content */}
          <Card variant="accent" className="p-8 space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-4xl font-bold text-text-primary">{currentStep.title}</h1>
              <p className="text-lg text-accent-cyan font-semibold">{currentStep.subtitle}</p>
              <p className="text-text-secondary">{currentStep.description}</p>
            </div>

            {/* Step Content */}
            {step === 1 && (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter your character name..."
                  value={characterName}
                  onChange={(e) => setCharacterName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-surface-primary border-2 border-surface-secondary text-text-primary placeholder-text-tertiary focus:outline-none focus:border-accent-cyan transition-colors"
                />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-3">
                {(['Easy', 'Medium', 'Hard'] as const).map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                      selectedDifficulty === diff
                        ? 'border-accent-cyan bg-accent-cyan/10'
                        : 'border-surface-secondary bg-surface-primary hover:border-accent-cyan'
                    }`}
                  >
                    <p className="font-bold text-text-primary capitalize">{diff}</p>
                    <p className="text-sm text-text-secondary">
                      {diff === 'Easy' && 'Perfect for building habits'}
                      {diff === 'Medium' && 'Balanced challenge and rewards'}
                      {diff === 'Hard' && 'Maximum challenge and rewards'}
                    </p>
                  </button>
                ))}
              </div>
            )}

            {/* Progress */}
            <div className="space-y-4">
              <div className="flex gap-2">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 h-1 rounded-full transition-all ${
                      i <= step ? 'bg-accent-cyan' : 'bg-surface-secondary'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-text-secondary text-center">
                Step {step + 1} of {steps.length}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex gap-3">
              {step > 0 && (
                <Button
                  variant="ghost"
                  className="flex-1"
                  onClick={() => setStep(step - 1)}
                >
                  Back
                </Button>
              )}
              <Button
                variant="primary"
                className="flex-1"
                onClick={handleNext}
                disabled={
                  (step === 1 && !characterName) ||
                  (step === 2 && !selectedDifficulty)
                }
              >
                {step === steps.length - 1 ? 'Start Journey' : 'Next'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </Container>
    </main>
  );
}
