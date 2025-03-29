import Link from 'next/link';
import Image from 'next/image';

// Temporary mock data
const interviews = [
  {
    id: 1,
    title: "Interview: The Making of Celeste",
    excerpt: "An in-depth look at the development process of the critically acclaimed platformer, featuring insights from Maddy Makes Games...",
    image: "/images/celeste-interview.jpg",
    developer: "Maddy Makes Games",
    date: "2024-03-29",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Behind the Scenes: Hollow Knight's Success",
    excerpt: "Team Cherry shares their journey from a small indie studio to creating one of the most beloved games of the decade...",
    image: "/images/hollow-knight-interview.jpg",
    developer: "Team Cherry",
    date: "2024-03-28",
    readTime: "10 min read",
  },
  {
    id: 3,
    title: "The Story of Stardew Valley",
    excerpt: "ConcernedApe discusses the challenges and triumphs of developing Stardew Valley as a solo developer...",
    image: "/images/stardew-interview.jpg",
    developer: "ConcernedApe",
    date: "2024-03-27",
    readTime: "7 min read",
  },
  {
    id: 4,
    title: "Undertale: A Game That Changed Everything",
    excerpt: "Toby Fox shares his creative process and the unexpected success of Undertale...",
    image: "/images/undertale-interview.jpg",
    developer: "Toby Fox",
    date: "2024-03-26",
    readTime: "9 min read",
  },
];

export default function InterviewsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Developer Interviews</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get an inside look at the creative process behind your favorite indie games.
          Our interviews with developers provide unique insights into game development.
        </p>
      </div>

      {/* Interviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {interviews.map((interview) => (
          <article
            key={interview.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-64">
              <Image
                src={interview.image}
                alt={interview.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                  Interview
                </span>
                <span className="text-gray-500 text-sm">{interview.date}</span>
                <span className="text-gray-500 text-sm">•</span>
                <span className="text-gray-500 text-sm">{interview.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">{interview.title}</h2>
              <p className="text-gray-600 mb-4">{interview.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full" />
                  <span className="text-gray-700 font-medium">
                    {interview.developer}
                  </span>
                </div>
                <Link
                  href={`/interviews/${interview.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-indigo-600 hover:text-indigo-800 font-semibold inline-flex items-center"
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
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
          Previous
        </button>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          1
        </button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
          2
        </button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
          3
        </button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
          Next
        </button>
      </div>
    </div>
  );
} 