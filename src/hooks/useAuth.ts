import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { UserRole } from '@/types/User';

export function useAuth(requiredRole?: UserRole) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;

    if (!session) {
      router.push('/auth/signin');
      return;
    }

    if (requiredRole) {
      const userRole = session.user.role as UserRole;
      const roleHierarchy: Record<UserRole, number> = {
        user: 0,
        reviewer: 1,
        editor: 2,
        admin: 3,
      };

      if (roleHierarchy[userRole] < roleHierarchy[requiredRole]) {
        router.push('/');
      }
    }
  }, [session, status, requiredRole, router]);

  return {
    user: session?.user,
    isAuthenticated: !!session,
    isLoading: status === 'loading',
    role: session?.user?.role as UserRole | undefined,
  };
} 