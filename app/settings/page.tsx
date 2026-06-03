'use client';

import { useState } from 'react';
import { Container } from '@/components/Container';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Navigation } from '@/components/Navigation';
import { Badge } from '@/components/Badge';
import { motion } from 'framer-motion';
import { Bell, Shield, Palette, LogOut } from 'lucide-react';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: true,
    dailyReminders: true,
    soundEffects: true,
  });

  const [characterName, setCharacterName] = useState('Seeker');
  const [isSaving, setIsSaving] = useState(false);

  const handleSettingChange = (key: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate save
    setTimeout(() => {
      setIsSaving(false);
    }, 1000);
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
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">Settings</h1>
            <p className="text-text-secondary mt-2">Customize your Life OS experience</p>
          </motion.div>
        </Container>
      </div>

      {/* Content */}
      <Container maxWidth="2xl" className="py-8 md:py-12 space-y-8">
        {/* Character Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-text-primary mb-6">Character</h2>
          <Card variant="secondary" className="p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Character Name
                </label>
                <input
                  type="text"
                  value={characterName}
                  onChange={(e) => setCharacterName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-surface-primary border border-surface-secondary text-text-primary placeholder-text-tertiary focus:outline-none focus:border-accent-cyan"
                />
              </div>
              <p className="text-sm text-text-secondary">
                This is your character&apos;s name displayed throughout the platform.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Notification Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <Bell className="w-6 h-6 text-accent-cyan" />
            Notifications
          </h2>
          <Card variant="secondary" className="p-6 space-y-4">
            <SettingToggle
              label="Enable Notifications"
              description="Receive notification alerts"
              checked={settings.notifications}
              onChange={() => handleSettingChange('notifications')}
            />
            <div className="border-t border-surface-secondary pt-4">
              <SettingToggle
                label="Daily Reminders"
                description="Get reminded to complete quests"
                checked={settings.dailyReminders}
                onChange={() => handleSettingChange('dailyReminders')}
              />
            </div>
          </Card>
        </motion.div>

        {/* Sound & Visual Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <Palette className="w-6 h-6 text-accent-magenta" />
            Preferences
          </h2>
          <Card variant="secondary" className="p-6 space-y-4">
            <SettingToggle
              label="Dark Mode"
              description="Use dark theme (always enabled)"
              checked={settings.darkMode}
              onChange={() => handleSettingChange('darkMode')}
              disabled
            />
            <div className="border-t border-surface-secondary pt-4">
              <SettingToggle
                label="Sound Effects"
                description="Play sounds for achievements"
                checked={settings.soundEffects}
                onChange={() => handleSettingChange('soundEffects')}
              />
            </div>
          </Card>
        </motion.div>

        {/* Privacy & Security */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-accent-lime" />
            Privacy & Security
          </h2>
          <Card variant="secondary" className="p-6">
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-text-primary mb-2">Account Status</p>
                <Badge variant="cyan">Active</Badge>
              </div>
              <div>
                <p className="text-sm text-text-secondary">
                  Your data is securely stored and encrypted. You can export or delete your data anytime.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Danger Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-text-primary mb-6">Actions</h2>
          <Card variant="secondary" className="p-6 border-red-500/20">
            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full border-red-500 text-red-400 hover:bg-red-500/10"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
              <p className="text-xs text-text-secondary text-center">
                You will need to sign in again to access your account.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Save Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex gap-3"
        >
          <Button
            variant="primary"
            className="flex-1"
            onClick={handleSave}
            loading={isSaving}
          >
            Save Changes
          </Button>
          <Button variant="ghost" className="flex-1">
            Cancel
          </Button>
        </motion.div>
      </Container>
    </main>
  );
}

interface SettingToggleProps {
  label: string;
  description: string;
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}

function SettingToggle({
  label,
  description,
  checked,
  onChange,
  disabled = false,
}: SettingToggleProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <p className="font-semibold text-text-primary">{label}</p>
        <p className="text-sm text-text-secondary">{description}</p>
      </div>
      <button
        disabled={disabled}
        onClick={onChange}
        className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
          checked
            ? 'bg-accent-cyan'
            : 'bg-surface-primary border border-surface-secondary'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      >
        <span
          className={`inline-block h-6 w-6 transform rounded-full bg-background transition-transform ${
            checked ? 'translate-x-7' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}
