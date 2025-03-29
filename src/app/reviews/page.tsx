import Link from 'next/link';
import Image from 'next/image';

// Temporary mock data
const reviews = [
  {
    id: 1,
    title: 'Hollow Knight: A Masterpiece of Indie Gaming',
    excerpt: "Team Cherry's Hollow Knight is a stunning achievement in indie game development...",
    image: '/images/hollow-knight.jpg',
    rating: 9.5,
    category: 'Action',
    date: '2024-03-29',
  },
  {
    id: 2,
    title: 'Celeste: A Journey of Self-Discovery',
    excerpt:
      'Maddy Makes Games delivers a touching narrative wrapped in challenging platforming...',
    image: '/images/celeste.jpg',
    rating: 9.0,
    category: 'Platformer',
    date: '2024-03-28',
  },
  {
    id: 3,
    title: 'Stardew Valley: Farming Never Felt So Good',
    excerpt: "ConcernedApe's farming simulator is a perfect blend of relaxation and progression...",
    image: '/images/stardew-valley.jpg',
    rating: 9.2,
    category: 'Simulation',
    date: '2024-03-27',
  },
  {
    id: 4,
    title: 'Undertale: A Game That Changed Everything',
    excerpt: "Toby Fox's masterpiece redefines what an RPG can be...",
    image: '/images/undertale.jpg',
    rating: 9.8,
    category: 'RPG',
    date: '2024-03-26',
  },
];

export default function ReviewsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-retro text-retro-neon-pink mb-4">Game Reviews</h1>
        <p className="text-retro-neon-blue/90 font-terminal max-w-2xl mx-auto">
          Discover our latest reviews of indie games, from hidden gems to blockbuster hits. We
          provide honest, in-depth analysis to help you find your next favorite game.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center">
        <button className="px-4 py-2 bg-retro-neon-pink text-white font-terminal rounded-lg hover:bg-retro-neon-pink/90 shadow-neon-pink">
          All Games
        </button>
        <button className="px-4 py-2 bg-retro-dark-primary/90 border border-retro-neon-blue/20 text-retro-neon-blue font-terminal rounded-lg hover:bg-retro-neon-blue/10">
          Action
        </button>
        <button className="px-4 py-2 bg-retro-dark-primary/90 border border-retro-neon-blue/20 text-retro-neon-blue font-terminal rounded-lg hover:bg-retro-neon-blue/10">
          Platformer
        </button>
        <button className="px-4 py-2 bg-retro-dark-primary/90 border border-retro-neon-blue/20 text-retro-neon-blue font-terminal rounded-lg hover:bg-retro-neon-blue/10">
          RPG
        </button>
        <button className="px-4 py-2 bg-retro-dark-primary/90 border border-retro-neon-blue/20 text-retro-neon-blue font-terminal rounded-lg hover:bg-retro-neon-blue/10">
          Simulation
        </button>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map(review => (
          <Link
            key={review.id}
            href={`/reviews/${review.title.toLowerCase().replace(/\s+/g, '-')}`}
            className="bg-retro-dark-primary/90 border border-retro-neon-blue/20 rounded-lg shadow-lg overflow-hidden hover:shadow-neon-blue transition-shadow"
          >
            <div className="relative h-48">
              <Image src={review.image} alt={review.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-retro-neon-purple/20 text-retro-neon-purple px-2 py-1 rounded text-sm font-terminal">
                  {review.category}
                </span>
                <span className="text-retro-neon-yellow font-terminal">{review.rating}/10</span>
              </div>
              <h2 className="text-xl font-retro text-retro-neon-pink mb-2">{review.title}</h2>
              <p className="text-retro-neon-blue/90 mb-4 font-terminal">{review.excerpt}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-retro-neon-blue/70 font-terminal">{review.date}</span>
                <span className="text-retro-neon-blue hover:text-retro-neon-blue/80 font-terminal">Read Review →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-8">
        <button className="px-4 py-2 bg-retro-dark-primary/90 border border-retro-neon-blue/20 text-retro-neon-blue font-terminal rounded-lg hover:bg-retro-neon-blue/10">
          Previous
        </button>
        <button className="px-4 py-2 bg-retro-neon-pink text-white font-terminal rounded-lg hover:bg-retro-neon-pink/90">
          1
        </button>
        <button className="px-4 py-2 bg-retro-dark-primary/90 border border-retro-neon-blue/20 text-retro-neon-blue font-terminal rounded-lg hover:bg-retro-neon-blue/10">
          2
        </button>
        <button className="px-4 py-2 bg-retro-dark-primary/90 border border-retro-neon-blue/20 text-retro-neon-blue font-terminal rounded-lg hover:bg-retro-neon-blue/10">
          3
        </button>
        <button className="px-4 py-2 bg-retro-dark-primary/90 border border-retro-neon-blue/20 text-retro-neon-blue font-terminal rounded-lg hover:bg-retro-neon-blue/10">
          Next
        </button>
      </div>
    </div>
  );
}
