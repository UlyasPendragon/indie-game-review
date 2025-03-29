'use client';

import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { RetroScreen } from '@/components/ui/RetroScreen';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

interface ProfileData {
  name: string;
  email: string;
  bio: string;
  favoriteGenres: string[];
  location: string;
  favoritePlatforms: string[];
  playStyle: string;
}

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<ProfileData>({
    name: '',
    email: '',
    bio: '',
    favoriteGenres: [],
    location: '',
    favoritePlatforms: [],
    playStyle: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/profile');
        if (!response.ok) throw new Error('Failed to fetch profile');
        const data = await response.json();
        setFormData(data);
      } catch (err) {
        setError('Failed to load profile data');
        console.error('Profile fetch error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    if (session) {
      fetchProfile();
    }
  }, [session]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to update profile');

      setIsEditing(false);
    } catch (err) {
      setError('Failed to update profile');
      console.error('Profile update error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (status === 'loading' || isLoading) {
    return (
      <div className="min-h-screen bg-retro-dark-primary flex items-center justify-center">
        <div className="text-retro-neon-blue font-terminal">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-retro-dark-primary flex items-center justify-center">
        <div className="text-retro-neon-pink font-terminal">Please sign in to view your profile</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-retro-dark-primary py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <RetroScreen>
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-retro text-retro-neon-pink">Profile</h1>
              <div className="flex gap-4">
                <Button
                  onClick={() => setIsEditing(!isEditing)}
                  className="bg-retro-neon-blue hover:bg-retro-neon-blue/90 text-retro-dark-primary font-retro"
                >
                  {isEditing ? 'Cancel' : 'Edit Profile'}
                </Button>
                <Button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="bg-retro-neon-pink hover:bg-retro-neon-pink/90 text-retro-dark-primary font-retro"
                >
                  Sign Out
                </Button>
              </div>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-500/20 border border-red-500 text-red-500 rounded-md font-terminal">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Profile Picture */}
              <div className="md:col-span-1">
                <div className="relative">
                  <img
                    src={session.user?.image || 'https://via.placeholder.com/150'}
                    alt="Profile"
                    className="w-48 h-48 rounded-lg border-4 border-retro-neon-blue/30 mx-auto"
                  />
                  {isEditing && (
                    <Button
                      className="absolute bottom-0 right-0 bg-retro-neon-pink hover:bg-retro-neon-pink/90 text-retro-dark-primary font-retro"
                    >
                      Change Photo
                    </Button>
                  )}
                </div>
              </div>

              {/* Profile Information */}
              <div className="md:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-retro-neon-blue mb-2 font-terminal">Name</label>
                    {isEditing ? (
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-retro-dark-secondary border-retro-neon-blue/30 text-retro-neon-blue/90 font-terminal"
                      />
                    ) : (
                      <div className="text-retro-neon-blue/90 font-terminal">{formData.name}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-retro-neon-blue mb-2 font-terminal">Email</label>
                    <div className="text-retro-neon-blue/90 font-terminal">{formData.email}</div>
                  </div>

                  <div>
                    <label className="block text-retro-neon-blue mb-2 font-terminal">Bio</label>
                    {isEditing ? (
                      <textarea
                        value={formData.bio}
                        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                        className="w-full bg-retro-dark-secondary border border-retro-neon-blue/30 text-retro-neon-blue/90 font-terminal p-2 rounded-md"
                        rows={3}
                      />
                    ) : (
                      <div className="text-retro-neon-blue/90 font-terminal">{formData.bio}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-retro-neon-blue mb-2 font-terminal">Location</label>
                    {isEditing ? (
                      <Input
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="bg-retro-dark-secondary border-retro-neon-blue/30 text-retro-neon-blue/90 font-terminal"
                      />
                    ) : (
                      <div className="text-retro-neon-blue/90 font-terminal">{formData.location}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-retro-neon-blue mb-2 font-terminal">Favorite Genres</label>
                    <div className="flex flex-wrap gap-2">
                      {formData.favoriteGenres.map((genre, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-retro-neon-purple/20 border border-retro-neon-purple/30 text-retro-neon-purple rounded-full font-terminal text-sm"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>

                  {isEditing && (
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="bg-retro-neon-green hover:bg-retro-neon-green/90 text-retro-dark-primary font-retro"
                    >
                      {isLoading ? 'Saving...' : 'Save Changes'}
                    </Button>
                  )}
                </form>
              </div>
            </div>

            {/* Review History */}
            <div className="mt-12">
              <h2 className="text-2xl font-retro text-retro-neon-pink mb-6">Review History</h2>
              <div className="space-y-4">
                {/* Placeholder for review history */}
                <div className="bg-retro-dark-secondary/50 border border-retro-neon-blue/20 p-4 rounded-lg">
                  <div className="text-retro-neon-blue/90 font-terminal">No reviews yet</div>
                </div>
              </div>
            </div>

            {/* Game Preferences */}
            <div className="mt-12">
              <h2 className="text-2xl font-retro text-retro-neon-pink mb-6">Game Preferences</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-retro-dark-secondary/50 border border-retro-neon-blue/20 p-4 rounded-lg">
                  <h3 className="text-retro-neon-blue font-terminal mb-2">Favorite Platforms</h3>
                  <div className="text-retro-neon-blue/90 font-terminal">
                    {formData.favoritePlatforms.join(', ')}
                  </div>
                </div>
                <div className="bg-retro-dark-secondary/50 border border-retro-neon-blue/20 p-4 rounded-lg">
                  <h3 className="text-retro-neon-blue font-terminal mb-2">Play Style</h3>
                  <div className="text-retro-neon-blue/90 font-terminal">{formData.playStyle}</div>
                </div>
              </div>
            </div>
          </div>
        </RetroScreen>
      </div>
    </div>
  );
} 