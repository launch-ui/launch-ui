# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vibe Hero is a Polish landing page for an AI product building community. The site is built with React + Vite and uses Relume UI components for layout. Content is in Polish (language: "pl").

**Domain:** https://vibehero.pl

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Tech Stack
- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Routing:** React Router DOM v7
- **UI Components:** @relume_io/relume-ui and @relume_io/relume-tailwind
- **Styling:** Tailwind CSS with custom Relume preset
- **SEO:** react-helmet-async
- **Analytics:** Vercel Analytics
- **Deployment:** Vercel (see vercel.json)

### Project Structure

```
src/
├── App.tsx                 # Main app with routing config
├── main.tsx               # App entry point
├── pages/                 # Route pages
│   ├── HomePage.tsx       # Main landing page (/)
│   ├── Live.tsx          # Live event page (/live)
│   ├── Kalendarz.tsx     # Calendar page (/kalendarz)
│   ├── Dzieki.tsx        # Thank you page (/dzieki)
│   └── DziekiBardzo.tsx  # Extended thank you page (/dzieki-bardzo)
└── components/
    ├── SEO.tsx            # SEO component using react-helmet-async
    ├── Navbar1.tsx        # Navigation bar
    ├── Header1.tsx        # Hero section
    ├── Layout*.tsx        # Relume layout components (numbered)
    ├── Pricing*.tsx       # Pricing sections
    ├── Testimonial1.tsx   # Testimonial component
    ├── FAQ1.tsx          # FAQ section
    ├── Footer6.tsx       # Footer
    ├── WaitlistModal.tsx  # Modal for waitlist form
    ├── WaitlistForm.tsx   # Waitlist form (embedded ConvertKit)
    ├── LiveFormModal.tsx  # Modal for live event form
    └── LiveForm.tsx       # Live event form
```

### Routing Structure

The app uses client-side routing with Vercel rewrites (all routes → index.html):
- `/` - Main homepage
- `/live` - Live event page
- `/kalendarz` - Calendar/scheduling page
- `/dzieki` - Thank you page (after form submission)
- `/dzieki-bardzo` - Extended thank you page

### Key Patterns

**Page Structure:** Pages compose multiple Relume components in a specific order. The HomePage demonstrates the typical pattern:
```tsx
<SEO {...metadata} />
<Navbar1 />
<main className="pt-16 md:pt-[72px]">
  <Header1 />
  <Pricing10 />
  <Testimonial1 />
  {/* more sections */}
</main>
```

**Modal Pattern:** Forms are embedded in modals (WaitlistModal, LiveFormModal) that:
- Use state to control visibility
- Include backdrop with blur effect
- Handle click-outside-to-close
- Position at z-index 1000/1001

**SEO Pattern:** Every page uses the SEO component to set page-specific metadata. Default OG image is `/og-allpages.png`, with page-specific overrides (e.g., `/og-live.png` for Live page).

### Styling

**Custom Fonts:**
- `Hack` - Default sans-serif
- `Radius Compact` - Heading font
- `Radius Regular` - H1 font

**Custom Colors:**
- Primary: `#ff4c2d` (orange-red)
- Blue Primary: `#1d62d4`

**Relume Integration:** The project uses Relume UI components with a Tailwind preset. Component names follow Relume conventions (e.g., Layout25, Pricing10).

### Deployment

Configured for Vercel with SPA rewrites. The build outputs to `dist/` directory.

## ESLint Configuration

- Uses flat config format (eslint.config.js)
- React Hooks and React Refresh plugins enabled
- Custom rule: Ignores unused vars starting with uppercase or underscore
- Files linted: `**/*.{js,jsx}`
- Ignores: `dist/`

## Important Notes

- **Language:** All content is in Polish
- **TypeScript:** Project uses TypeScript but some files are .jsx with type assertions
- **Mobile-First:** Responsive design with mobile breakpoints
- **Forms:** Uses embedded ConvertKit forms for email collection
