# Argumindo

A Next.js website for Argumindo - transforming kids into confident thinkers and powerful speakers through gamified debate and argumentation learning.

## 🚀 Tech Stack

- **Framework:** Next.js 14.1.0 (App Router)
- **Styling:** Tailwind CSS 3.4.1
- **UI Components:** shadcn/ui (60+ components included)
- **Fonts:** Quicksand (primary), Outfit (secondary)
- **Animations:** CSS keyframe animations with Duolingo-style character interactions

## 🎨 Brand

- **Primary Color:** `#ED4C84` (Pink)
- **Domain:** argumindo.com

## 📁 Project Structure

```
argumindo-web/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Navigation with mobile hamburger menu
│   │   │   └── Footer.tsx      # Footer with links and cloud divider
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Hero section with CTAs
│   │   │   ├── Stats.tsx       # Stats with animated owl mascot
│   │   │   ├── Journey.tsx     # Learning journey roadmap
│   │   │   ├── Features.tsx    # 6 feature cards
│   │   │   ├── Testimonials.tsx # User testimonials carousel
│   │   │   └── CTA.tsx         # Call-to-action section
│   │   └── ui/                 # shadcn/ui components
│   ├── hooks/
│   │   └── useInView.ts        # Scroll-triggered animation hook
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   ├── globals.css             # Global styles & animations
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   └── not-found.tsx           # 404 page
├── public/
│   └── images/                 # SVG and PNG assets
│       ├── hero/               # Hero section assets
│       ├── stats/              # Stats section & owl mascot
│       ├── journey/            # Journey roadmap assets
│       ├── features/           # Feature card assets
│       ├── testimonials/       # Avatar images
│       ├── cta/                # CTA section assets
│       └── footer/             # Footer assets
├── tailwind.config.ts          # Tailwind configuration
├── next.config.js              # Next.js configuration (static export)
└── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build

```bash
# Build for production (static export)
npm run build

# The output will be in the 'out' directory
```

## ✨ Features

- **Responsive Design:** Fully responsive with mobile-first approach
- **Animated Mascots:** Duolingo-style character animations (owl and parrot)
- **Smooth Animations:** Fade-in, float, twinkle, bounce, and blink effects
- **Static Export:** Optimized for static hosting
- **shadcn/ui Components:** 60+ pre-configured UI components available

## 🎭 Animations

The site includes various CSS animations defined in `globals.css`:

- `float` / `float-slow` / `float-reverse` - Floating effects
- `twinkle` - Star twinkling
- `bounce` - Bouncing elements
- `blink` - Eye blink animation
- `wing-flap` - Bird wing flapping
- `eyebrow` - Eyebrow raise animation
- `sparkle-pop` - Sparkle appearance
- `breathe` - Subtle breathing motion
- `head-bob` - Character head movement
- `logo-jump` - Logo hover animation

## 📱 Responsive Breakpoints

- Mobile: < 1024px
- Desktop: ≥ 1024px (lg:)

## 🔧 Configuration

### Tailwind

Custom configuration in `tailwind.config.ts`:
- Custom colors (pink brand color)
- Custom fonts (Quicksand, Outfit)
- Extended animations

### Next.js

Configured for static export in `next.config.js`:
```js
output: 'export'
```

## 📄 License

Private - All rights reserved.

