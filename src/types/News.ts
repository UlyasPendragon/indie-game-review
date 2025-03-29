export interface News {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  category: string;
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
  relatedGames?: string[]; // IDs of related games
  source?: {
    name: string;
    url: string;
  };
}
