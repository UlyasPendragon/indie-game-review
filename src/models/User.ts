import mongoose from 'mongoose';
import { User, UserRole } from '@/types/User';

const userSchema = new mongoose.Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    image: { type: String },
    role: {
      type: String,
      enum: ['user', 'reviewer', 'editor', 'admin'],
      default: 'user',
    },
    bio: { type: String },
    isActive: { type: Boolean, default: true },
    emailVerified: { type: Date },
    lastLogin: { type: Date },
    accounts: [{
      provider: { type: String, required: true },
      providerAccountId: { type: String, required: true },
    }],
    sessions: [{
      sessionToken: { type: String, required: true },
      expires: { type: Date, required: true },
    }],
  },
  {
    timestamps: true,
  }
);

// Create indexes for better query performance
userSchema.index({ email: 1 });
userSchema.index({ role: 1 });
userSchema.index({ isActive: 1 });

export default mongoose.models.User || mongoose.model<User>('User', userSchema); 