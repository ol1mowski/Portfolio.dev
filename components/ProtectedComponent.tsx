import { useSession } from 'next-auth/react';

export function ProtectedComponent() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Access denied</div>;
  }

  return <div>Protected content</div>;
}
