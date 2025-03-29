'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-retro text-retro-neon-pink mb-4">Something went wrong!</h1>
        <p className="text-retro-neon-blue/90 font-terminal mb-8 max-w-md mx-auto">
          We apologize for the inconvenience. Please try again or contact us if the problem
          persists.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center px-6 py-3 bg-retro-neon-pink text-white font-terminal rounded-lg hover:bg-retro-neon-pink/90 shadow-neon-pink transition-colors"
        >
          Try Again
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
