import { NextResponse } from 'next/server';
import { getBlogCategories } from '@/actions/blog.actions';

export async function GET() {
  try {
    const categories = await getBlogCategories();
    return NextResponse.json(categories);
  } catch (error) {
    console.error('Categories API Error:', error);
    return NextResponse.json({ error: 'Nie udało się pobrać kategorii' }, { status: 500 });
  }
}
