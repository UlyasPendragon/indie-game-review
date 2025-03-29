'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RetroScreenProps {
  children: ReactNode;
  className?: string;
}

export function RetroScreen({ children, className }: RetroScreenProps): JSX.Element {
  return (
    <div
      className={cn(
        'min-h-screen bg-retro-dark-primary text-retro-neon-blue/90 relative overflow-hidden',
        'before:fixed before:inset-0 before:pointer-events-none before:bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] before:bg-[size:100%_2px,100%_100%] before:animate-scan before:z-0',
        'after:fixed after:inset-0 after:pointer-events-none after:bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] after:bg-[size:100%_2px] after:animate-scan after:z-0',
        className
      )}
    >
      {/* CRT Screen Effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Scanline Effect */}
        <div className="absolute inset-0 bg-crt-overlay animate-scanline opacity-30" />

        {/* Screen Flicker */}
        <div className="absolute inset-0 animate-flicker opacity-5 bg-white" />

        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/40" />
        
        {/* Color Aberration */}
        <div className="absolute inset-0 mix-blend-screen opacity-5">
          <div className="absolute inset-0 bg-retro-neon-blue transform translate-x-[1px]"></div>
          <div className="absolute inset-0 bg-retro-neon-pink transform -translate-x-[1px]"></div>
        </div>
      </div>

      {/* Pixel Grid Background */}
      <div className="fixed inset-0 bg-pixel-grid opacity-5 z-0" />
      
      {/* Glowing border */}
      <div className="fixed inset-0 border-8 border-retro-dark-secondary z-0 pointer-events-none"></div>
      <div className="fixed inset-[12px] border border-retro-neon-blue/20 z-0 pointer-events-none animate-rainbow-border rounded-sm"></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
