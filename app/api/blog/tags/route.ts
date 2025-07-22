import { NextResponse } from 'next/server';
import { getBlogTags } from '@/actions/blog';

export async function GET() {
  try {
    const tagsData = await getBlogTags();
    return NextResponse.json(tagsData);
  } catch (error) {
    console.error('Tags API Error:', error);
    return NextResponse.json({ error: 'Nie udało się pobrać tagów' }, { status: 500 });
  }
}
