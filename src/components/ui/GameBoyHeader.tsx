/**
 * GameBoyHeader Component
 * 
 * A retro-styled header component inspired by the classic Game Boy design.
 * Features animated transitions, neon color effects, and responsive navigation.
 * Built with Framer Motion for smooth animations and Next.js for routing.
 */

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Navigation items configuration
 * Defines the main navigation links and their corresponding routes
 */
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'News', href: '/news' },
  { name: 'Profile', href: '/profile' },
];

/**
 * GameBoyHeader Component
 * 
 * Renders a Game Boy-inspired header with animated navigation.
 * Features a retro-styled frame, neon effects, and interactive navigation buttons.
 * 
 * @returns {JSX.Element} Styled header component with navigation
 */
export function GameBoyHeader() {
  // Get current path for active link highlighting
  const pathname = usePathname();

  return (
    // Animated header container with retro styling
    <motion.header
      className="relative bg-retro-dark-primary border-b-8 border-retro-dark-secondary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {/* Main content container with max width and padding */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="relative">
          {/* Game Boy Frame - Creates the outer shell effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-retro-dark-secondary to-retro-dark-primary rounded-lg shadow-lg transform -skew-y-1" />
          
          {/* Screen Area - Contains the main content */}
          <div className="relative bg-retro-dark-primary border-4 border-retro-neon-blue/30 rounded-lg p-4 overflow-hidden">
            {/* Content Container */}
            <div className="relative z-10">
              {/* Title Section with Animated Elements */}
              <div className="text-center mb-6">
                {/* Animated Title */}
                <motion.h1
                  className="text-4xl font-retro text-retro-neon-pink mb-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Indie Game Review
                </motion.h1>
                {/* Animated Underline */}
                <motion.div
                  className="h-1 bg-retro-neon-blue/30 w-32 mx-auto"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4 }}
                />
              </div>

              {/* Navigation Buttons Container */}
              <div className="flex justify-center gap-4 flex-wrap">
                {navItems.map((item) => (
                  // Individual Navigation Button with Hover/Tap Animations
                  <motion.div
                    key={item.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Navigation Link with Active State Styling */}
                    <Link
                      href={item.href}
                      className={`
                        relative px-6 py-2 rounded-lg font-terminal text-sm
                        ${pathname === item.href
                          ? 'bg-retro-neon-pink text-retro-dark-primary'
                          : 'bg-retro-dark-secondary text-retro-neon-blue hover:bg-retro-neon-blue/10'
                        }
                        border-2 border-retro-neon-blue/30
                        shadow-neon-pink
                        transition-colors duration-200
                      `}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
} 