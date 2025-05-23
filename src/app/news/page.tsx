import Link from 'next/link';
import Image from 'next/image';

// Temporary mock data
const newsArticles = [
  {
    id: 1,
    title: 'Indie Game Awards 2024 Winners Announced',
    excerpt:
      'The gaming community celebrates the best indie games of the year, with several unexpected winners taking home top honors...',
    image: '/images/indie-awards.jpg',
    category: 'Awards',
    date: '2024-03-29',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'New Indie Game Funding Initiative Launched',
    excerpt:
      'A new program aims to support underrepresented indie developers with funding and mentorship opportunities...',
    image: '/images/funding.jpg',
    category: 'Industry',
    date: '2024-03-28',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'The Rise of Indie Game Development in 2024',
    excerpt:
      'As we look at the gaming landscape in 2024, indie games continue to push boundaries and innovate...',
    image: '/images/indie-rise.jpg',
    category: 'Industry',
    date: '2024-03-27',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Indie Game Sales Surge on Steam',
    excerpt:
      'Recent data shows a significant increase in indie game sales on Steam, with smaller titles finding more success than ever...',
    image: '/images/steam-sales.jpg',
    category: 'Sales',
    date: '2024-03-26',
    readTime: '3 min read',
  },
];

export default function NewsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-retro text-retro-neon-pink mb-4">Gaming News</h1>
        <p className="text-retro-neon-blue/90 font-terminal max-w-2xl mx-auto">
          Stay up to date with the latest news from the indie gaming world, including industry
          insights, developer interviews, and upcoming releases.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-4 justify-center">
        <button className="px-4 py-2 bg-retro-neon-pink text-white font-terminal rounded-lg hover:bg-retro-neon-pink/90 shadow-neon-pink">
          All News
        </button>
        <button className="px-4 py-2 bg-retro-dark-primary/90 border border-retro-neon-blue/20 text-retro-neon-blue font-terminal rounded-lg hover:bg-retro-neon-blue/10">
          Industry
        </button>
        <button className="px-4 py-2 bg-retro-dark-primary/90 border border-retro-neon-blue/20 text-retro-neon-blue font-terminal rounded-lg hover:bg-retro-neon-blue/10">
          Awards
        </button>
        <button className="px-4 py-2 bg-retro-dark-primary/90 border border-retro-neon-blue/20 text-retro-neon-blue font-terminal rounded-lg hover:bg-retro-neon-blue/10">
          Sales
        </button>
      </div>

      {/* News Articles */}
      <div className="space-y-8">
        {newsArticles.map(article => (
          <article
            key={article.id}
            className="bg-retro-dark-primary/90 border border-retro-neon-blue/20 rounded-lg shadow-lg overflow-hidden hover:shadow-neon-blue transition-shadow"
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="relative h-48 md:h-full">
                  <Image src={article.image} alt={article.title} fill className="object-cover" />
                </div>
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-retro-neon-green/20 text-retro-neon-green px-2 py-1 rounded text-sm font-terminal">
                    {article.category}
                  </span>
                  <span className="text-retro-neon-blue/70 text-sm font-terminal">{article.date}</span>
                  <span className="text-retro-neon-blue/70 text-sm font-terminal">•</span>
                  <span className="text-retro-neon-blue/70 text-sm font-terminal">{article.readTime}</span>
                </div>
                <h2 className="text-2xl font-retro text-retro-neon-pink mb-3">{article.title}</h2>
                <p className="text-retro-neon-blue/90 font-terminal mb-4">{article.excerpt}</p>
                <Link
                  href={`/news/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-retro-neon-blue hover:text-retro-neon-blue/80 font-terminal inline-flex items-center"
                >
                  Read More
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
