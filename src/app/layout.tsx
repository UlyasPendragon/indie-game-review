import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Press_Start_2P, VT323, Fira_Code } from 'next/font/google';
import './globals.css';
import { GameBoyHeader } from '@/components/ui/GameBoyHeader';
import { Providers } from '@/components/Providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const pressStart2P = Press_Start_2P({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start-2p'
});
const vt323 = VT323({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vt323'
});
const firaCode = Fira_Code({ 
  subsets: ['latin'],
  variable: '--font-fira-code'
});

export const metadata: Metadata = {
  title: 'Indie Game Review',
  description: 'Your source for honest indie game reviews',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${pressStart2P.variable} ${vt323.variable} ${firaCode.variable}`}>
      <body className="min-h-screen bg-retro-dark-primary text-retro-neon-blue/90 font-terminal">
        <Providers>
          <GameBoyHeader />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
