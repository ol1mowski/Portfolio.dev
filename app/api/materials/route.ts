import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/db/db_connect';
import Materials from '@/db/Schemas/Materials';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get('type');
    const category = searchParams.get('category');
    const categoryType = searchParams.get('categoryType');
    const tags = searchParams.get('tags');
    const search = searchParams.get('search');
    const isPremium = searchParams.get('isPremium');
    const limit = parseInt(searchParams.get('limit') || '50');
    const page = parseInt(searchParams.get('page') || '1');

    const filter: any = {};

    if (type) {
      filter.type = type;
    }

    if (category) {
      filter.category = category;
    }

    if (categoryType) {
      filter.categoryType = categoryType;
    }

    if (tags) {
      const tagsArray = tags.split(',');
      filter.tags = { $in: tagsArray };
    }

    if (isPremium !== null) {
      filter.isPremium = isPremium === 'true';
    }

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } },
        { category: { $regex: search, $options: 'i' } },
      ];
    }

    const skip = (page - 1) * limit;

    let sortOptions: any = { publishDate: -1 };

    if (search) {
      sortOptions = {
        publishDate: -1,
      };
    }

    const materials = await Materials.find(filter)
      .sort(sortOptions)
      .skip(skip)
      .limit(limit)
      .lean()
      .exec();

    const total = await Materials.countDocuments(filter).exec();

    return NextResponse.json({
      success: true,
      data: materials,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
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

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();

    const requiredFields = [
      'title',
      'image',
      'slug',
      'type',
      'category',
      'categoryType',
      'description',
      'size',
      'format',
    ];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const existingMaterial = await Materials.findOne({ slug: body.slug }).lean().exec();
    if (existingMaterial) {
      return NextResponse.json(
        { success: false, error: 'Material with this slug already exists' },
        { status: 400 }
      );
    }

    const material = new Materials(body);
    await material.save();

    return NextResponse.json(
      {
        success: true,
        data: material,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
