import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET must be defined in environment variables');
}

export async function createAuthSession(email: string, name: string) {
  try {
    const token = jwt.sign(
      { email, name },
      JWT_SECRET as string,
      { expiresIn: '24h' }
    );

    const cookieStore = await cookies();
    cookieStore.set('session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24
    });

    return { success: true };
  } catch (error) {
    console.error('Error creating session:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function validateSession() {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('session');
    
    if (!sessionCookie) {
      return { session: null, error: 'No session found' };
    }

    const verified = jwt.verify(sessionCookie.value, JWT_SECRET as string) as jwt.JwtPayload;
    
    if (!verified.email || !verified.name) {
      throw new Error('Invalid token payload');
    }

    const session = {
      email: verified.email as string,
      name: verified.name as string
    };

    return { session, error: null };
  } catch (error) {
    console.error('Session validation error:', error);
    return { session: null, error: 'Invalid session' };
  }
}
