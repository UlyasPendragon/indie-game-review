# Indie Game Review

A modern, retro-styled website for indie game reviews, built with Next.js 14, TypeScript, and TailwindCSS. The platform features a unique Game Boy-inspired design while maintaining modern web standards and best practices.

## Features

- 🎮 Game Boy-inspired UI design with retro neon aesthetics
- 🌙 Dark mode optimized with custom color schemes
- 📱 Fully responsive layout for all devices
- 🔐 Secure user authentication with NextAuth.js
- ✍️ Comprehensive game reviews with ratings and categories
- 📰 Latest gaming news and developer interviews
- 👤 User profiles with review history
- 🔍 Advanced search and filtering capabilities
- 🌐 SEO optimized with metadata and structured data
- 🎨 Custom animations and transitions with Framer Motion

## Tech Stack

### Frontend
- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript (strict mode)
- **Styling:** TailwindCSS with custom configuration
- **Animations:** Framer Motion
- **State Management:** React Context API
- **Forms:** React Hook Form with Zod validation
- **UI Components:** Custom components with Radix UI primitives

### Backend
- **Runtime:** Node.js
- **Database:** MongoDB Atlas
- **Authentication:** NextAuth.js
- **API:** Next.js API Routes
- **Content Management:** Custom API for dynamic content

### Development Tools
- **Testing:** Jest & React Testing Library
- **Linting:** ESLint with custom rules
- **Formatting:** Prettier
- **Type Checking:** TypeScript
- **CI/CD:** GitHub Actions

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/indie-game-review.git
   ```

2. Install dependencies:
   ```bash
   cd indie-game-review
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_uri
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
indie-game-review/
├── src/
│   ├── app/              # Next.js 14 App Router pages and layouts
│   ├── components/       # Reusable React components
│   │   ├── ui/          # Basic UI components
│   │   ├── layout/      # Layout components
│   │   └── features/    # Feature-specific components
│   ├── context/         # React context providers
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and configurations
│   ├── models/          # MongoDB models and schemas
│   ├── styles/          # Global styles and TailwindCSS config
│   └── types/           # TypeScript type definitions
├── public/              # Static files
└── ...config files      # Various configuration files
```

## Development Guidelines

### Code Style
- Follow TypeScript best practices with strict type checking
- Use functional components with hooks
- Implement proper error handling and loading states
- Write unit tests for critical components
- Follow accessibility guidelines (WCAG 2.1)

### Git Workflow
1. Create feature branch from `main`
2. Make changes and commit with descriptive messages
3. Push changes and create pull request
4. Ensure all tests pass and code is reviewed
5. Merge to `main` after approval

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the classic Game Boy design
- Built with modern web technologies
- Open source community and contributors
