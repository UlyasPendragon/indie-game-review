import { Metadata } from 'next';
import { RetroScreen } from '@/components/ui/RetroScreen';

export const metadata: Metadata = {
  title: 'About Us | Indie Game Review',
  description: 'Learn more about our mission to support and promote indie games.',
};

export default function AboutPage(): JSX.Element {
  return (
    <RetroScreen>
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-4xl font-bold">About Indie Game Review</h1>
        
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
          <p className="mb-4">
            We are passionate about indie games and the creative minds behind them.
            Our mission is to shine a spotlight on the incredible world of independent game development,
            providing a dedicated space where indie games get the attention they deserve.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">What We Do</h2>
          <p className="mb-4">
            Indie Game Review is a community space for indie game enthusiasts.
            Our goal is to help you discover your next favorite indie game through:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>In-depth game reviews and analysis</li>
            <li>Developer interviews and behind-the-scenes content</li>
            <li>News coverage of upcoming indie releases</li>
            <li>Community discussions and recommendations</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Join Our Community</h2>
          <p className="mb-4">
            We believe in the power of community. Whether you're a developer, player,
            or enthusiast, there's a place for you here. Share your thoughts, discover
            new games, and connect with fellow indie game lovers.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Get Involved</h2>
          <p className="mb-4">
            Share your passion for indie games:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>Write reviews and share your experiences</li>
            <li>Participate in community discussions</li>
            <li>Submit news tips about upcoming indie games</li>
            <li>Support indie developers by spreading the word</li>
          </ul>
        </section>
      </div>
    </RetroScreen>
  );
}
