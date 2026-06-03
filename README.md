# Life Operating System RPG Platform

A world-class self-improvement RPG platform that transforms your daily habits and goals into an engaging gaming experience. Level up your life with daily quests, character progression, achievements, and real-time gamification rewards.

## Features

### Core Gamification
- **Character Progression**: Track your character level, XP, and base stats (Strength, Vitality, Wisdom)
- **Daily Quests**: Complete daily quests with varying difficulty levels (Easy, Medium, Hard, Legendary)
- **Reward System**: Earn XP for completed quests with instant visual feedback and notifications
- **Streak Counter**: Maintain daily streaks with fire emoji indicators
- **Level-Up Celebrations**: Full-screen animations and confetti when you level up

### Pages & Navigation
- **Dashboard (`/`)**: Main hub with character card, today's quests, and summary stats
- **Quests (`/quests`)**: Full quest library with filtering and sorting
- **Profile (`/profile`)**: Character details, achievements, and progression timeline
- **Goals (`/goals`)**: Story arcs and long-term goals with progress tracking
- **Settings (`/settings`)**: User preferences and app customization
- **Onboarding (`/onboard`)**: Character creation wizard for new users

### Premium Design
- **Dark Mode First**: Beautiful dark theme optimized for focus and reduced eye strain
- **Mobile Responsive**: Mobile-first design with desktop enhancements
- **Smooth Animations**: Framer Motion animations for engaging interactions
- **Design Tokens**: Complete color system with semantic naming (cyan, lime, magenta accents)
- **Accessibility**: Semantic HTML, ARIA attributes, and screen reader support

## Tech Stack

- **Framework**: Next.js 16 with React 18
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React for consistent iconography
- **Type Safety**: TypeScript throughout
- **Package Manager**: npm with legacy peer dependencies support

## Getting Started

### Installation

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The app will be available at `http://localhost:3000`

## Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout with fonts and metadata
│   ├── page.tsx             # Dashboard home page
│   ├── globals.css          # Design tokens and global styles
│   ├── quests/
│   │   └── page.tsx         # Quests list page
│   ├── profile/
│   │   └── page.tsx         # Character profile page
│   ├── goals/
│   │   └── page.tsx         # Story arcs and goals page
│   ├── settings/
│   │   └── page.tsx         # App settings page
│   └── onboard/
│       └── page.tsx         # Character creation onboarding
│
├── components/
│   ├── Button.tsx           # Reusable button component
│   ├── Card.tsx             # Card wrapper component
│   ├── Container.tsx        # Max-width container
│   ├── Badge.tsx            # Status badge component
│   ├── StatBadge.tsx        # Stat display component
│   ├── XPRing.tsx           # Circular XP progress ring
│   ├── Navigation.tsx       # Top and bottom navigation
│   ├── CharacterCard.tsx    # Main character display
│   ├── QuestCard.tsx        # Individual quest card
│   ├── AchievementBadge.tsx # Achievement display
│   ├── RewardNotification.tsx # Floating reward notifications
│   ├── Confetti.tsx         # Confetti animation component
│   ├── LevelUpModal.tsx     # Level-up celebration modal
│   ├── StreakCounter.tsx    # Daily streak display
│   └── ...
│
├── tailwind.config.js       # Tailwind configuration with tokens
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Design System

### Colors (Design Tokens)

The app uses a sophisticated dark mode color palette:

- **Primary**: Cyan (`#00D9FF`) - Main accent color
- **Secondary**: Lime (`#00FF00`) - Success and completion
- **Tertiary**: Magenta (`#FF006E`) - Energy and intensity
- **Background**: Deep purple (`#0F0E1D`)
- **Surfaces**: Various dark grays with transparency
- **Text**: Light colors with semantic hierarchy

### Typography

- **Headings**: Space Grotesk (600-700 weight)
- **Body**: Inter (400-500 weight)
- **Code**: JetBrains Mono (400-600 weight)

### Spacing & Layout

- 4px grid system for precise alignment
- Flexbox for responsive layouts
- CSS Grid for complex 2D layouts
- Semantic spacing scale (gap, p, m classes)

## Key Components

### CharacterCard
Displays your character with:
- Level and XP progress ring
- Daily streak counter
- Base stats with progress bars
- Level-up visual feedback

### QuestCard
Interactive quest cards with:
- Title and description
- Difficulty badge (color-coded)
- XP reward display
- Complete/completed state
- Click handler for quest completion

### RewardNotification
Floating notifications showing:
- XP earned
- Achievement unlocked
- Level up messages
- Auto-dismisses after 3 seconds

### LevelUpModal
Full-screen celebration on level-up with:
- Animated "Level Up!" text
- New level display
- Confetti animation
- Auto-closes after 3 seconds

## State Management

The app uses React's built-in hooks for state:
- `useState` for component-level state
- Props drilling for parent-child communication
- Future: Can be enhanced with Context API or external state management

## Animation Library

**Framer Motion** is used for all animations:
- Entry animations with staggered delays
- Smooth transitions on interactions
- Level-up celebration animations
- XP ring progress animations

## Browser Support

- Modern browsers with ES2020+ support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance Considerations

- Image optimization with Next.js Image component
- Code splitting with dynamic imports
- CSS-in-JS with Tailwind for optimal bundle size
- SSR for fast initial page load
- HMR (Hot Module Replacement) in development

## Future Enhancements

Planned features for v2:
- Cloud sync with database
- Social features (leaderboards, friends)
- Advanced achievements system
- Customizable character avatars
- Dark/light theme toggle
- Sound effects and music
- Export progress as PDF
- Integration with calendar apps
- Real-time multiplayer features

## Contributing

This is a Vercel v0 generation. For modifications:
1. Edit components in `/components`
2. Modify pages in `/app`
3. Update design tokens in `/app/globals.css` and `tailwind.config.js`
4. Test with `npm run dev` and build with `npm run build`

---

**Built with ❤️ by v0 - Vercel's AI-Powered Builder**

Transform your life into an epic adventure. Start your journey today!
 
