export interface Review {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  rating: number;
  pros: string[];
  cons: string[];
  gameInfo: {
    title: string;
    developer: string;
    publisher: string;
    releaseDate: Date;
    platforms: string[];
    price: number;
  };
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  categories: string[];
  tags: string[];
  status: 'draft' | 'published' | 'archived';
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  views: number;
  likes: number;
  comments: number;
} 