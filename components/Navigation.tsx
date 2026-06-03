'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Zap, User, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/quests', icon: Zap, label: 'Quests' },
  { href: '/profile', icon: User, label: 'Profile' },
  { href: '/settings', icon: Settings, label: 'Settings' },
];

export const Navigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:fixed md:left-0 md:top-0 md:h-screen md:w-20 md:bg-surface-primary md:border-r md:border-surface-secondary md:flex md:flex-col md:items-center md:py-8 md:gap-6 md:z-50">
        <Link
          href="/"
          className="text-2xl font-bold text-accent-cyan mb-8 hover:opacity-80 transition-opacity"
        >
          ⚔️
        </Link>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative group"
              title={item.label}
            >
              <motion.div
                animate={{
                  scale: isActive ? 1.1 : 1,
                }}
                className={`p-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-accent-cyan text-background'
                    : 'text-text-secondary hover:text-accent-cyan'
                }`}
              >
                <Icon className="w-6 h-6" />
              </motion.div>
              <div className="absolute left-full ml-2 px-2 py-1 bg-surface-secondary text-text-primary text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface-primary border-t border-surface-secondary flex items-center justify-around py-4 z-50">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 ${
                isActive ? 'text-accent-cyan' : 'text-text-secondary'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Mobile Content Padding */}
      <div className="md:hidden h-20" />
    </>
  );
};
