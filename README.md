# Indie Game Review Website

A modern, responsive website for reviewing indie games, built with Next.js, TypeScript, and TailwindCSS.

## Features

- 🎮 Game Reviews
- 📰 News Articles
- 👨‍💻 Developer Interviews
- 🔍 Advanced Search
- 🌐 Internationalization Support
- 📱 Responsive Design
- ⚡ Performance Optimized

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** TailwindCSS + SASS
- **Testing:** Jest + React Testing Library
- **Code Quality:** ESLint + Prettier
- **CI/CD:** GitHub Actions

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/indie-game-review.git
   cd indie-game-review
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:

   ```env
   NEXT_PUBLIC_API_URL=your_api_url
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm test` - Run tests
- `npm run format` - Format code with Prettier

## Project Structure

```
indie-game-review/
├── public/                          # Static assets
├── src/
│   ├── app/                         # Next.js app router pages
│   ├── components/                  # React components
│   ├── context/                     # React Context providers
│   ├── hooks/                       # Custom React hooks
│   ├── styles/                      # Global styles
│   ├── types/                       # TypeScript type definitions
│   └── utils/                       # Utility functions
```

# Indie Game Review - Style Guide

This document serves as a reference for maintaining consistent styling throughout the Indie Game Review website. All styling is centralized in our theme configuration.

## Core Principles

1. **Single Source of Truth**: All styling variables are defined in `src/styles/theme.ts`
2. **Consistency**: Always reference theme variables instead of hardcoding values
3. **Maintainability**: When new UI elements are needed, add them to the style guide

## How to Use the Theme System

### Tailwind Classes

For most styling needs, use the Tailwind classes that reference our theme:

```jsx
// Example component using theme-based Tailwind classes
<div className="bg-retro-dark-primary text-retro-neon-blue">
  <h1 className="font-retro text-retro-neon-pink">Game Review</h1>
  <p className="font-terminal">This is a retro-styled review.</p>
</div>
```

### Theme Object

For dynamic styling needs, import the theme object:

```jsx
import { theme } from '@/styles/theme';

// Use the theme object in your component
const buttonStyle = {
  backgroundColor: theme.colors.retro.neon.pink,
  color: 'white',
  fontFamily: theme.fontFamily.terminal,
};
```

### Reusing UI Patterns

The theme includes common UI patterns that should be used consistently:

```jsx
import { theme } from '@/styles/theme';

function ExampleComponent() {
  // You can reference the patterns in your components
  return (
    <div className={theme.uiPatterns.mainContainer}>
      <h1 className={theme.uiPatterns.headers.h1}>Title</h1>
      <p className={theme.uiPatterns.bodyText}>Content</p>
      <button className={theme.uiPatterns.buttons.primary}>Action</button>
    </div>
  );
}
```

## Color System

Our retro theme uses a specific color palette:

### Background Colors
- `retro-dark-primary` - Main background color (#1a1a2e)
- `retro-dark-secondary` - Secondary backgrounds, cards (#16213e)
- `retro-dark-accent` - Subtle accents (#0f3460)

### Accent Colors
- `retro-neon-pink` - Primary action color (#ff00ff)
- `retro-neon-blue` - Secondary actions and text (#00ffff)
- `retro-neon-green` - Success states (#00ff00)
- `retro-neon-yellow` - Warning states (#ffff00)
- `retro-neon-purple` - Special elements (#9d00ff)

## Typography

Our site uses specific fonts for the retro aesthetic:

- `font-retro` - Press Start 2P font for headings
- `font-terminal` - VT323 for body text in the retro theme
- `font-sans` - Inter for general content
- `font-mono` - Fira Code for code blocks

## Common Components

### Containers
```jsx
// Main content container
<div className="bg-retro-dark-primary/90 border border-retro-neon-blue/20 p-6 rounded-lg shadow-lg">
  {/* Content */}
</div>
```

### Cards
```jsx
// Card component
<article className="bg-retro-dark-primary/90 border border-retro-neon-blue/20 rounded-lg shadow-lg overflow-hidden hover:shadow-neon-blue transition-shadow">
  <div className="p-6">
    <h2 className="text-2xl font-retro text-retro-neon-pink mb-2">Card Title</h2>
    <p className="text-retro-neon-blue/90 mb-4 font-terminal">Card content</p>
  </div>
</article>
```

### Buttons
```jsx
// Primary button
<button className="bg-retro-neon-pink text-white hover:bg-retro-neon-pink/90 font-terminal rounded-md px-4 py-2">
  Primary Action
</button>

// Secondary button
<button className="border-2 border-retro-neon-blue text-retro-neon-blue hover:bg-retro-neon-blue/10 font-terminal rounded-md px-4 py-2">
  Secondary Action
</button>
```

## Animations and Effects

The theme includes specialized animations for the retro feel:

- `animate-pixel-transition` - Subtle pixel scaling effect
- `animate-glitch` - Glitch effect for text or images
- `animate-scanline` - CRT scanline effect
- `animate-flicker` - Neon flicker effect
- `animate-rainbow-border` - Color cycling border effect

## Making Changes

When you need to update styles:

1. Modify variables in `src/styles/theme.ts`
2. Update this style guide document if adding new patterns
3. All components using these theme variables will automatically reflect changes

## Accessibility Considerations

- Ensure sufficient contrast between text and backgrounds
- Avoid relying solely on color to convey information
- Test with screen readers and keyboard navigation

## Performance Tips

- Prefer utility classes over custom CSS when possible
- Use the theme object for dynamic styling needs
- Minimize the use of expensive animations 

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
