import Link from 'next/link';
import Image from 'next/image';

// Temporary mock data
const featuredReview = {
  title: "Hollow Knight: A Masterpiece of Indie Gaming",
  excerpt: "Team Cherry's Hollow Knight is a stunning achievement in indie game development, offering a perfect blend of challenging gameplay and atmospheric world-building.",
  image: "/images/hollow-knight.jpg",
  rating: 9.5,
  category: "Review",
};

const latestNews = [
  {
    title: "Indie Game Awards 2024 Winners Announced",
    excerpt: "The gaming community celebrates the best indie games of the year...",
    date: "2024-03-29",
    category: "News",
  },
  {
    title: "New Indie Game Funding Initiative Launched",
    excerpt: "A new program aims to support underrepresented indie developers...",
    date: "2024-03-28",
    category: "News",
  },
];

const featuredInterviews = [
  {
    title: "Interview: The Making of Celeste",
    excerpt: "An in-depth look at the development process of the critically acclaimed platformer...",
    developer: "Maddy Makes Games",
    date: "2024-03-27",
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-900 text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Amazing Indie Games
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your trusted source for honest reviews and coverage of the latest indie games
          </p>
          <Link
            href="/reviews"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Browse Reviews
          </Link>
        </div>
      </section>

      {/* Featured Review */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Featured Review</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
              <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">
                {featuredReview.category}
              </span>
              <span className="text-yellow-500 font-semibold">
                {featuredReview.rating}/10
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2">{featuredReview.title}</h3>
            <p className="text-gray-600 mb-4">{featuredReview.excerpt}</p>
            <Link
              href="/reviews/hollow-knight"
              className="text-indigo-600 hover:text-indigo-800 font-semibold"
            >
              Read Full Review →
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestNews.map((news, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                  {news.category}
                </span>
                <span className="text-gray-500 text-sm">{news.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{news.title}</h3>
              <p className="text-gray-600 mb-4">{news.excerpt}</p>
              <Link
                href={`/news/${news.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-indigo-600 hover:text-indigo-800 font-semibold"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Interviews */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Featured Interviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredInterviews.map((interview, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                  Interview
                </span>
                <span className="text-gray-500 text-sm">{interview.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{interview.title}</h3>
              <p className="text-gray-600 mb-2">{interview.excerpt}</p>
              <p className="text-gray-500 mb-4">Developer: {interview.developer}</p>
              <Link
                href={`/interviews/${interview.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-indigo-600 hover:text-indigo-800 font-semibold"
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
