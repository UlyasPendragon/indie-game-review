'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { RetroScreen } from '@/components/ui/RetroScreen';

export default function SignUpPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    try {
      // In a real app, you would make an API call to create the user here
      // For demo purposes, we'll simulate a successful signup
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Sign in the user after successful signup
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        setError('Failed to sign in after registration');
        return;
      }

      setSuccess(true);
      setTimeout(() => {
        router.push('/');
        router.refresh();
      }, 2000);
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignIn = async (provider: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await signIn(provider, { callbackUrl: '/' });
    } catch (error) {
      setError(`Failed to sign in with ${provider}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-retro-dark-primary flex items-center justify-center p-4">
      <RetroScreen className="w-full max-w-md">
        <div className="p-6">
          <h1 className="text-2xl font-retro text-retro-neon-pink mb-6 text-center">
            Create Account
          </h1>
          
          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500 text-red-500 rounded-md font-terminal">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 bg-retro-neon-green/20 border border-retro-neon-green text-retro-neon-green rounded-md font-terminal">
              Account created successfully! Redirecting...
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-retro-neon-blue mb-2 font-terminal">
                Name
              </label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-retro-neon-blue mb-2 font-terminal">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-retro-neon-blue mb-2 font-terminal">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                className="w-full"
                placeholder="Create a password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-retro-neon-blue mb-2 font-terminal">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
                className="w-full"
                placeholder="Confirm your password"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-retro-neon-pink hover:bg-retro-neon-pink/90 text-retro-dark-primary font-retro"
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-retro-neon-blue/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-retro-dark-primary text-retro-neon-blue font-terminal">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button
                type="button"
                onClick={() => handleSocialSignIn('google')}
                disabled={isLoading}
                className="bg-retro-dark-primary border border-retro-neon-blue hover:bg-retro-neon-blue/10 text-retro-neon-blue font-terminal"
              >
                Google
              </Button>
              <Button
                type="button"
                onClick={() => handleSocialSignIn('github')}
                disabled={isLoading}
                className="bg-retro-dark-primary border border-retro-neon-blue hover:bg-retro-neon-blue/10 text-retro-neon-blue font-terminal"
              >
                GitHub
              </Button>
            </div>
          </div>

          <p className="mt-6 text-center text-retro-neon-blue/90 font-terminal">
            Already have an account?{' '}
            <Link href="/auth/signin" className="text-retro-neon-pink hover:text-retro-neon-pink/90">
              Sign in
            </Link>
          </p>
        </div>
      </RetroScreen>
    </div>
  );
}
