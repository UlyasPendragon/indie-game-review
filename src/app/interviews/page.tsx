import Link from 'next/link';
import Image from 'next/image';

// Temporary mock data
const interviews = [
  {
    id: 1,
    title: 'Interview: The Making of Celeste',
    excerpt:
      'An in-depth look at the development process of the critically acclaimed platformer, featuring insights from Maddy Makes Games...',
    image: '/images/celeste-interview.jpg',
    developer: 'Maddy Makes Games',
    date: '2024-03-29',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: "Behind the Scenes: Hollow Knight's Success",
    excerpt:
      'Team Cherry shares their journey from a small indie studio to creating one of the most beloved games of the decade...',
    image: '/images/hollow-knight-interview.jpg',
    developer: 'Team Cherry',
    date: '2024-03-28',
    readTime: '10 min read',
  },
  {
    id: 3,
    title: 'The Story of Stardew Valley',
    excerpt:
      'ConcernedApe discusses the challenges and triumphs of developing Stardew Valley as a solo developer...',
    image: '/images/stardew-interview.jpg',
    developer: 'ConcernedApe',
    date: '2024-03-27',
    readTime: '7 min read',
  },
  {
    id: 4,
    title: 'Undertale: A Game That Changed Everything',
    excerpt: 'Toby Fox shares his creative process and the unexpected success of Undertale...',
    image: '/images/undertale-interview.jpg',
    developer: 'Toby Fox',
    date: '2024-03-26',
    readTime: '9 min read',
  },
];

export default function InterviewsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-retro text-retro-neon-pink mb-4">Developer Interviews</h1>
        <p className="text-retro-neon-blue/90 max-w-2xl mx-auto font-terminal">
          Get an inside look at the creative process behind your favorite indie games. Our
          interviews with developers provide unique insights into game development.
        </p>
      </div>

      {/* Interviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {interviews.map(interview => (
          <article
            key={interview.id}
            className="bg-retro-dark-primary/90 border border-retro-neon-blue/20 rounded-lg shadow-lg overflow-hidden hover:shadow-neon-blue transition-shadow"
          >
            <div className="relative h-64">
              <Image src={interview.image} alt={interview.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-retro-neon-green/20 text-retro-neon-green px-2 py-1 rounded text-sm font-terminal">
                  Interview
                </span>
                <span className="text-retro-neon-blue/70 text-sm font-terminal">{interview.date}</span>
                <span className="text-retro-neon-blue/70 text-sm font-terminal">•</span>
                <span className="text-retro-neon-blue/70 text-sm font-terminal">{interview.readTime}</span>
              </div>
              <h2 className="text-2xl font-retro text-retro-neon-pink mb-2">{interview.title}</h2>
              <p className="text-retro-neon-blue/90 mb-4 font-terminal">{interview.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-retro-neon-blue/20 rounded-full" />
                  <span className="text-retro-neon-blue/90 font-terminal">{interview.developer}</span>
                </div>
                <Link
                  href={`/interviews/${interview.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-retro-neon-blue hover:text-retro-neon-blue/80 font-terminal inline-flex items-center"
                >
                  Read Interview
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-8">
        <button className="px-4 py-2 bg-retro-dark-primary/90 border border-retro-neon-blue/20 text-retro-neon-blue rounded-lg hover:bg-retro-neon-blue/10 font-terminal">
          Previous
        </button>
        <button className="px-4 py-2 bg-retro-neon-pink text-white rounded-lg hover:bg-retro-neon-pink/90 font-terminal">
          1
        </button>
        <button className="px-4 py-2 bg-retro-dark-primary/90 border border-retro-neon-blue/20 text-retro-neon-blue rounded-lg hover:bg-retro-neon-blue/10 font-terminal">
          2
        </button>
        <button className="px-4 py-2 bg-retro-dark-primary/90 border border-retro-neon-blue/20 text-retro-neon-blue rounded-lg hover:bg-retro-neon-blue/10 font-terminal">
          3
        </button>
        <button className="px-4 py-2 bg-retro-dark-primary/90 border border-retro-neon-blue/20 text-retro-neon-blue rounded-lg hover:bg-retro-neon-blue/10 font-terminal">
          Next
        </button>
      </div>
    </div>
  );
}
