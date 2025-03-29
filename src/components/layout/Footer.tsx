'use client';

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export function Footer(): JSX.Element {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="relative border-t border-retro-neon-blue/20 bg-retro-dark-secondary/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="font-retro text-retro-neon-pink text-sm tracking-wider">ABOUT US</h3>
            <p className="font-terminal text-retro-neon-blue/80 text-sm">
              Dedicated to celebrating indie game development and preserving the spirit of classic
              gaming.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-retro text-retro-neon-green text-sm tracking-wider">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/reviews"
                  className="font-terminal text-retro-neon-blue/80 hover:text-retro-neon-blue transition-colors duration-200"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="font-terminal text-retro-neon-blue/80 hover:text-retro-neon-blue transition-colors duration-200"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/interviews"
                  className="font-terminal text-retro-neon-blue/80 hover:text-retro-neon-blue transition-colors duration-200"
                >
                  Interviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Theme */}
          <div className="space-y-4">
            <h3 className="font-retro text-retro-neon-yellow text-sm tracking-wider">CONNECT</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="font-terminal text-retro-neon-blue/80 hover:text-retro-neon-blue transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <button
                  onClick={toggleTheme}
                  className="font-terminal text-retro-neon-blue/80 hover:text-retro-neon-blue transition-colors duration-200"
                >
                  {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-retro-neon-purple/20">
          <p className="font-terminal text-retro-neon-blue/60 text-sm text-center">
            © {new Date().getFullYear()} IndieGameReview. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
