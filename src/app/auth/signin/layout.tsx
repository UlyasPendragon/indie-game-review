import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In | Indie Game Review',
  description: 'Sign in to your Indie Game Review account.',
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 