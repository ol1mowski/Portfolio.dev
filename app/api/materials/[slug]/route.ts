import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/db/db_connect';
import Materials from '@/db/Schemas/Materials';

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    await dbConnect();
    const { slug } = await params;

    const material = await Materials.findOne({ slug }).lean().exec();

    if (!material) {
      return NextResponse.json({ success: false, error: 'Material not found' }, { status: 404 });
    }

    const mappedMaterial = {
      ...material,
      id: material._id,
    };

    return NextResponse.json({
      success: true,
      data: mappedMaterial,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
