import { NextResponse } from 'next/server';
import { getOpinions } from '@/actions/opinions.actions';
import { dbConnect } from '@/db/db_connect';

export async function GET() {
  try {
    await dbConnect();
    const opinions = await getOpinions();
    return NextResponse.json(opinions);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
