import Link from 'next/link';
import Image from 'next/image';

// Temporary mock data
const featuredReview = {
  title: 'Hollow Knight: A Masterpiece of Indie Gaming',
  excerpt:
    "Team Cherry's Hollow Knight is a stunning achievement in indie game development, offering a perfect blend of challenging gameplay and atmospheric world-building.",
  image: '/images/hollow-knight.jpg',
  rating: 9.5,
  category: 'Review',
};

const latestNews = [
  {
    title: 'Indie Game Awards 2024 Winners Announced',
    excerpt: 'The gaming community celebrates the best indie games of the year...',
    date: '2024-03-29',
    category: 'News',
  },
  {
    title: 'New Indie Game Funding Initiative Launched',
    excerpt: 'A new program aims to support underrepresented indie developers...',
    date: '2024-03-28',
    category: 'News',
  },
];

const featuredInterviews = [
  {
    title: 'Interview: The Making of Celeste',
    excerpt:
      'An in-depth look at the development process of the critically acclaimed platformer...',
    developer: 'Maddy Makes Games',
    date: '2024-03-27',
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-retro-dark-primary border-b border-retro-neon-blue/20 text-retro-neon-blue/90">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div className="absolute inset-0 bg-pixel-grid opacity-10 z-10" />
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-5xl md:text-6xl font-retro text-retro-neon-pink mb-6 animate-glitch">Discover Amazing Indie Games</h1>
          <p className="text-xl md:text-2xl mb-8 font-terminal">
            Your trusted source for honest reviews and coverage of the latest indie games
          </p>
          <Link
            href="/reviews"
            className="bg-retro-neon-pink hover:bg-retro-neon-pink/90 text-white px-8 py-3 rounded-lg text-lg font-terminal shadow-neon-pink transition-colors"
          >
            Browse Reviews
          </Link>
        </div>
      </section>

      {/* Featured Review */}
      <section>
        <h2 className="text-3xl font-retro text-retro-neon-pink mb-6">Featured Review</h2>
        <div className="bg-retro-dark-primary/90 border border-retro-neon-blue/20 rounded-lg shadow-lg overflow-hidden hover:shadow-neon-blue transition-shadow">
          <div className="relative h-64 md:h-96">
            <Image
              src={featuredReview.image}
              alt={featuredReview.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-retro-neon-purple/20 text-retro-neon-purple px-2 py-1 rounded text-sm font-terminal">
                {featuredReview.category}
              </span>
              <span className="text-retro-neon-yellow font-terminal">{featuredReview.rating}/10</span>
            </div>
            <h3 className="text-2xl font-retro text-retro-neon-pink mb-2">{featuredReview.title}</h3>
            <p className="text-retro-neon-blue/90 mb-4 font-terminal">{featuredReview.excerpt}</p>
            <Link
              href="/reviews/hollow-knight"
              className="text-retro-neon-blue hover:text-retro-neon-blue/80 font-terminal inline-flex items-center"
            >
              Read Full Review →
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section>
        <h2 className="text-3xl font-retro text-retro-neon-pink mb-6">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestNews.map((news, index) => (
            <div key={index} className="bg-retro-dark-primary/90 border border-retro-neon-blue/20 rounded-lg shadow-lg p-6 hover:shadow-neon-blue transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-retro-neon-blue/20 text-retro-neon-blue px-2 py-1 rounded text-sm font-terminal">
                  {news.category}
                </span>
                <span className="text-retro-neon-blue/70 text-sm font-terminal">{news.date}</span>
              </div>
              <h3 className="text-xl font-retro text-retro-neon-pink mb-2">{news.title}</h3>
              <p className="text-retro-neon-blue/90 mb-4 font-terminal">{news.excerpt}</p>
              <Link
                href={`/news/${news.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-retro-neon-blue hover:text-retro-neon-blue/80 font-terminal inline-flex items-center"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Interviews */}
      <section>
        <h2 className="text-3xl font-retro text-retro-neon-pink mb-6">Featured Interviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredInterviews.map((interview, index) => (
            <div key={index} className="bg-retro-dark-primary/90 border border-retro-neon-blue/20 rounded-lg shadow-lg p-6 hover:shadow-neon-blue transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-retro-neon-green/20 text-retro-neon-green px-2 py-1 rounded text-sm font-terminal">
                  Interview
                </span>
                <span className="text-retro-neon-blue/70 text-sm font-terminal">{interview.date}</span>
              </div>
              <h3 className="text-xl font-retro text-retro-neon-pink mb-2">{interview.title}</h3>
              <p className="text-retro-neon-blue/90 mb-2 font-terminal">{interview.excerpt}</p>
              <p className="text-retro-neon-blue/70 mb-4 font-terminal">Developer: {interview.developer}</p>
              <Link
                href={`/interviews/${interview.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-retro-neon-blue hover:text-retro-neon-blue/80 font-terminal inline-flex items-center"
              >
                Read Interview →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
