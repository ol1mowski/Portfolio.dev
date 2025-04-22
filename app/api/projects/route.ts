import { NextResponse } from 'next/server';
import { getProjects } from '@/db/Utils/DataFetchingFunctions/DataFetchingFunctions';
import { dbConnect } from '@/db/db_connect';

export async function GET() {
  try {
    await dbConnect();
    const projects = await getProjects();
    return NextResponse.json(projects);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
