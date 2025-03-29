# Indie Game Review - Retro Style Guide

This document serves as a reference for maintaining a consistent retro gaming aesthetic throughout the Indie Game Review website. All styling is centralized in our theme configuration.

## Core Principles

1. **Single Source of Truth**: All styling variables are defined in `src/styles/theme.ts`
2. **Consistency**: Always reference theme variables instead of hardcoding values
3. **Retro Aesthetic**: Embrace the nostalgic feel of classic gaming with neon colors, pixel-style fonts, and CRT effects

## Color System

Our retro theme uses a specific color palette:

### Background Colors
- `retro-dark-primary` - Main background color (#1a1a2e)
- `retro-dark-secondary` - Secondary backgrounds, cards (#16213e)
- `retro-dark-accent` - Subtle accents (#0f3460)

### Accent Colors
- `retro-neon-pink` - Primary action color, button backgrounds (#ff00ff)
- `retro-neon-blue` - Secondary actions, text, and interactive elements (#00ffff)
- `retro-neon-green` - Success states and positive indicators (#00ff00)
- `retro-neon-yellow` - Warning states (#ffff00)
- `retro-neon-purple` - Special elements (#9d00ff)

## Typography

Our site uses specific fonts for the retro aesthetic:

- `font-retro` - Press Start 2P font for headings and emphasis
- `font-terminal` - VT323 for body text in the retro theme
- `font-sans` - Inter for general content where retro is not needed
- `font-mono` - Fira Code for code blocks

### Text Styling Patterns

```jsx
// Headings
<h1 className="text-4xl font-retro text-retro-neon-pink">Heading</h1>

// Body text
<p className="font-terminal text-retro-neon-blue/90">Body text with retro styling</p>

// Links
<a className="text-retro-neon-blue hover:text-retro-neon-blue/80 transition-colors">Link</a>
```

## Components

### Button Variants

The Button component supports multiple variants for different contexts:

```jsx
// Primary button (for main actions)
<Button variant="default">Primary Action</Button>

// Secondary button (for secondary actions)
<Button variant="outline">Secondary Action</Button>

// Ghost button (for minimal emphasis)
<Button variant="ghost">Ghost Button</Button>

// Link button
<Button variant="link">Link Button</Button>
```

### Cards

Cards use our retro theme with hover effects:

```jsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Form Elements

Inputs, selects, and other form controls use the retro theme:

```jsx
// Text input
<Input type="text" placeholder="Enter name" />

// Progress bar
<Progress value={75} variant="default" />

// Badge
<Badge variant="default">Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="pink">Pink</Badge>
<Badge variant="purple">Purple</Badge>
```

### Alert Variants

```jsx
<Alert variant="default">
  <AlertTitle>Default Alert</AlertTitle>
  <AlertDescription>This is a default alert.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>This is an error alert.</AlertDescription>
</Alert>

<Alert variant="success">
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>This is a success alert.</AlertDescription>
</Alert>
```

## Special Effects

Our retro theme includes several special effects to enhance the nostalgia:

### RetroScreen Container

The `RetroScreen` component adds CRT-like effects to create an authentic retro gaming feel:

```jsx
<RetroScreen>
  {/* Your content here */}
</RetroScreen>
```

This adds:
- Scanlines
- Screen flicker
- Color aberration
- Vignette effect
- Glowing border
- Pixel grid background

### Animations

The theme includes specialized animations for the retro feel:

- `animate-pixel-transition` - Subtle pixel scaling effect
- `animate-glitch` - Glitch effect for text or images
- `animate-scanline` - CRT scanline effect
- `animate-flicker` - Neon flicker effect
- `animate-rainbow-border` - Color cycling border effect

## Layout Patterns

### Main Content Container

```jsx
<div className="bg-retro-dark-primary/90 border border-retro-neon-blue/20 p-6 rounded-lg shadow-lg">
  {/* Content */}
</div>
```

### Section Dividers

```jsx
<hr className="border-t border-retro-neon-blue/20 my-8" />
```

## Accessibility Considerations

While embracing the retro aesthetic, ensure:
- Text has sufficient contrast with backgrounds
- Interactive elements have clear focus states
- Animations can be reduced/disabled for users with motion sensitivity

## Implementation Guidelines

1. Use Tailwind classes that reference theme variables
2. For dynamic styling, import the theme object
3. Prefer component composition over custom styling
4. Ensure consistent spacing and sizing across the site
5. For new UI elements, follow the established retro patterns

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

## Performance Tips

- Prefer utility classes over custom CSS when possible
- Use the theme object for dynamic styling needs
- Minimize the use of expensive animations 