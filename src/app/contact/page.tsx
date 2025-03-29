import { Metadata } from 'next';
import { RetroScreen } from '@/components/ui/RetroScreen';

export const metadata: Metadata = {
  title: 'Contact Us | Indie Game Review',
  description: 'Get in touch with the Indie Game Review team.',
};

export default function ContactPage(): JSX.Element {
  return (
    <RetroScreen>
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-4xl font-bold">Contact Us</h1>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Get in Touch</h2>
          <p className="mb-4">
            Have questions, suggestions, or want to collaborate? We'd love to hear from you!
            Reach out to us at{' '}
            <a
              href="mailto:contact@indiegamereview.com"
              className="text-primary-600 hover:text-primary-800"
            >
              contact@indiegamereview.com
            </a>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Follow Us</h2>
          <p className="mb-4">Stay connected with us on social media:</p>
          <ul className="list-inside list-disc space-y-2">
            <li>Twitter: @IndieGameReview</li>
            <li>Discord: Join our community server</li>
            <li>Instagram: @indiegamereview</li>
            <li>YouTube: Indie Game Review Channel</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Join Our Community</h2>
          <p className="mb-4">
            Share your passion for indie games:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>Submit game reviews</li>
            <li>Contribute news articles</li>
            <li>Participate in discussions</li>
            <li>Share your indie game recommendations</li>
          </ul>
        </section>
      </div>
    </RetroScreen>
  );
}
