import { NextResponse } from 'next/server';
import { getBlogStats } from '@/actions/blog.actions';

export async function GET() {
  try {
    const stats = await getBlogStats();

    if (!stats) {
      return NextResponse.json({ error: 'Nie udało się pobrać statystyk bloga' }, { status: 500 });
    }

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Blog Stats API Error:', error);
    return NextResponse.json({ error: 'Nie udało się pobrać statystyk bloga' }, { status: 500 });
  }
}
