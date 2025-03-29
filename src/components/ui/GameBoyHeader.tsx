'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'News', href: '/news' },
  { name: 'Profile', href: '/profile' },
];

export function GameBoyHeader() {
  const pathname = usePathname();

  return (
    <motion.header
      className="relative bg-retro-dark-primary border-b-8 border-retro-dark-secondary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="relative">
          {/* Game Boy Frame */}
          <div className="absolute inset-0 bg-gradient-to-b from-retro-dark-secondary to-retro-dark-primary rounded-lg shadow-lg transform -skew-y-1" />
          
          {/* Screen Area */}
          <div className="relative bg-retro-dark-primary border-4 border-retro-neon-blue/30 rounded-lg p-4 overflow-hidden">
            {/* Content */}
            <div className="relative z-10">
              {/* Title */}
              <div className="text-center mb-6">
                <motion.h1
                  className="text-4xl font-retro text-retro-neon-pink mb-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Indie Game Review
                </motion.h1>
                <motion.div
                  className="h-1 bg-retro-neon-blue/30 w-32 mx-auto"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4 }}
                />
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4 flex-wrap">
                {navItems.map((item) => (
                  <motion.div
                    key={item.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
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