import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // TODO: Fetch profile data from database
  // For now, return mock data
  return NextResponse.json({
    name: session.user?.name,
    email: session.user?.email,
    image: session.user?.image,
    bio: 'Indie game enthusiast and retro gaming lover',
    favoriteGenres: ['Action', 'RPG', 'Platformer'],
    location: 'United States',
    favoritePlatforms: ['PC', 'Nintendo Switch'],
    playStyle: 'Casual, Story-driven',
  });
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await request.json();

    // TODO: Update profile data in database
    // For now, just return success
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update profile' },
      { status: 500 }
    );
  }
} 