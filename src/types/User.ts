export type UserRole = 'user' | 'reviewer' | 'editor' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  image?: string;
  role: UserRole;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
  isActive: boolean;
  emailVerified?: Date;
  accounts?: {
    provider: string;
    providerAccountId: string;
  }[];
  sessions?: {
    sessionToken: string;
    expires: Date;
  }[];
}
