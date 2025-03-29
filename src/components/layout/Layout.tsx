import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col bg-retro-dark-primary">
      <Header />
      <main className="flex-1 bg-retro-dark-secondary/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-retro-dark-primary/90 border border-retro-neon-blue/20 p-6 rounded-lg shadow-lg">
            <div className="font-terminal text-retro-neon-blue/90 prose prose-invert prose-headings:font-retro prose-headings:text-retro-neon-pink prose-a:text-retro-neon-blue hover:prose-a:text-retro-neon-blue/80 prose-strong:text-retro-neon-pink prose-strong:font-retro prose-code:text-retro-neon-green prose-code:font-fira-code">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
