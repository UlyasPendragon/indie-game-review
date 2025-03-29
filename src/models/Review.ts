import mongoose from 'mongoose';
import { Review } from '@/types/Review';

const reviewSchema = new mongoose.Schema<Review>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    excerpt: { type: String, required: true },
    coverImage: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 10 },
    pros: [{ type: String }],
    cons: [{ type: String }],
    gameInfo: {
      title: { type: String, required: true },
      developer: { type: String, required: true },
      publisher: { type: String, required: true },
      releaseDate: { type: Date, required: true },
      platforms: [{ type: String }],
      price: { type: Number, required: true },
    },
    author: {
      id: { type: String, required: true },
      name: { type: String, required: true },
      avatar: { type: String, required: true },
    },
    categories: [{ type: String }],
    tags: [{ type: String }],
    status: {
      type: String,
      enum: ['draft', 'published', 'archived'],
      default: 'draft',
    },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    comments: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

// Create indexes for better query performance
reviewSchema.index({ slug: 1 });
reviewSchema.index({ status: 1 });
reviewSchema.index({ 'gameInfo.title': 1 });
reviewSchema.index({ categories: 1 });
reviewSchema.index({ tags: 1 });

export default mongoose.models.Review || mongoose.model<Review>('Review', reviewSchema);
