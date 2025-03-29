import Link from 'next/link';
import { Metadata } from 'next';
import { RetroScreen } from '@/components/ui/RetroScreen';

export default function NotFound(): JSX.Element {
  return (
    <RetroScreen>
      <div className="flex min-h-[50vh] flex-col items-center justify-center">
        <h1 className="mb-4 text-4xl font-retro text-retro-neon-pink animate-glitch">404 - Page Not Found</h1>
        <p className="mb-8 text-lg text-retro-neon-blue/90 font-terminal">The page might have been moved, deleted, or never existed.</p>
        <Link
          href="/"
          className="rounded-md bg-retro-neon-pink px-6 py-3 text-white font-terminal transition-colors hover:bg-retro-neon-pink/90 shadow-neon-pink"
        >
          Return Home
        </Link>
      </div>
    </RetroScreen>
  );
}

export const metadata: Metadata = {
  title: '404 - Page Not Found | Indie Game Reviews',
  description: 'The page you are looking for could not be found.',
};
