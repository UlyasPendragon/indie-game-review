export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-retro-neon-blue border-t-transparent shadow-neon-blue" />
        <p className="mt-4 text-retro-neon-blue/90 font-terminal animate-flicker">Loading...</p>
      </div>
    </div>
  );
}
