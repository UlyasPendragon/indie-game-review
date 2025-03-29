export interface Interview {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  developer: {
    name: string;
    studio: string;
    avatar: string;
    bio: string;
    website?: string;
    socialLinks?: {
      twitter?: string;
      discord?: string;
      youtube?: string;
    };
  };
  game: {
    title: string;
    description: string;
    releaseDate?: Date;
    platforms: string[];
    website?: string;
  };
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  tags: string[];
  status: 'draft' | 'published' | 'archived';
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  views: number;
  likes: number;
  comments: number;
} 