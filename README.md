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

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 