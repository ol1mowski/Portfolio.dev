'use server';

import { Opinions } from '@/db/Schemas/Opinions';
import { dbConnect } from '@/db/db_connect';
import { OpinionsType } from '@/types/Opinions.types';

export const getOpinions = async (): Promise<OpinionsType[] | null> => {
  try {
    await dbConnect();
    const data = await Opinions.find().lean().exec();

    const serializedData = data.map(item => ({
      ...item,
      _id: item._id ? item._id.toString() : undefined,
    }));

    return serializedData as unknown as OpinionsType[];
  } catch (error) {
    console.error('Error fetching opinions:', error);
    return null;
  }
};
