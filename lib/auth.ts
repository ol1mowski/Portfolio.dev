import { Lucia } from "lucia";
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import { Collection, MongoClient } from "mongodb";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

interface SessionData {
  email: string;
  name: string;
}

export async function createAuthSession(email: string, name: string) {
  try {
    const sessionData: SessionData = { email, name };
    const token = jwt.sign(sessionData, process.env.JWT_SECRET!, {
      expiresIn: '24h'
    });

    cookies().set({
      name: 'session',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 // 24 hours
    });

    return { success: true };
  } catch (error) {
    console.error('Error creating session:', error);
    return { success: false, error: 'Failed to create session' };
  }
}

export async function validateSession() {
  try {
    const sessionCookie = cookies().get('session');
    
    if (!sessionCookie) {
      return { session: null, error: 'No session found' };
    }

    const verified = jwt.verify(sessionCookie.value, process.env.JWT_SECRET!) as SessionData;
    return { session: verified, error: null };
    
  } catch (error) {
    console.error('Session validation error:', error);
    return { session: null, error: 'Invalid session' };
  }
}
