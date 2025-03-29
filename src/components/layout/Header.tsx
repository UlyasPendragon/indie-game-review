'use client';

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/Button';
import { useSession } from 'next-auth/react';

export function Header(): JSX.Element {
  const { theme, toggleTheme } = useTheme();
  const { data: session } = useSession();

  return (
    <header className="relative border-b border-retro-neon-blue/20 bg-retro-dark-secondary/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-retro text-retro-neon-pink hover:text-retro-neon-pink/80 transition-colors duration-200"
          >
            INDIE GAME REVIEW
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/reviews"
              className="font-terminal text-retro-neon-blue/80 hover:text-retro-neon-blue transition-colors duration-200"
            >
              Reviews
            </Link>
            <Link
              href="/news"
              className="font-terminal text-retro-neon-blue/80 hover:text-retro-neon-blue transition-colors duration-200"
            >
              News
            </Link>
            <Link
              href="/interviews"
              className="font-terminal text-retro-neon-blue/80 hover:text-retro-neon-blue transition-colors duration-200"
            >
              Interviews
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="font-terminal text-retro-neon-blue/80 hover:text-retro-neon-blue transition-colors duration-200"
            >
              {theme === 'light' ? 'DARK' : 'LIGHT'}
            </button>

            {session ? (
              <Link href="/profile">
                <Button variant="outline" className="font-terminal">
                  Profile
                </Button>
              </Link>
            ) : (
              <Link href="/auth/signin">
                <Button variant="outline" className="font-terminal">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
