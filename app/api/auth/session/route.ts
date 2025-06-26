import { NextRequest, NextResponse } from 'next/server';
import { validateSession } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const { session, error } = await validateSession();

    if (error) {
      return NextResponse.json({ session: null, error }, { status: 401 });
    }

    return NextResponse.json({ session, error: null });
  } catch (error) {
    console.error('Session validation error:', error);
    return NextResponse.json({ session: null, error: 'Internal server error' }, { status: 500 });
  }
}
