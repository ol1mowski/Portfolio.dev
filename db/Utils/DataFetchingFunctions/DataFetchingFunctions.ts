import { dbConnect } from '../../db_connect';
import { Document } from 'mongoose';
import { saveClient } from '@/lib/api/client/client.service';
import { ClientData } from '@/lib/api/client/client.types';
import { Materials } from '../../Schemas/Materials';

interface CustomerDocument extends Document {
  name: string;
  email: string;
  createdAt: Date;
}

export async function saveClientToDB(clientData: ClientData): Promise<CustomerDocument | null> {
  try {
    const result = await saveClient(clientData);

    if (result.success && result.client) {
      return result.client as unknown as CustomerDocument;
    }

    throw new Error(result.error || 'Failed to save client');
  } catch (error) {
    console.error('Error in saveClientToDB:', error);
    throw error;
  }
}

export async function getMaterialBySlug(slug: string) {
  try {
    await dbConnect();
    const material = await Materials.findOne({ slug }).lean().exec();
    return material;
  } catch (error) {
    console.error('Error fetching material by slug:', error);
    return null;
  }
}

export async function updateMaterialDownloadCount(materialId: string) {
  try {
    await dbConnect();
    const result = await Materials.findByIdAndUpdate(
      materialId,
      { $inc: { downloadCount: 1 } },
      { new: true }
    ).exec();
    return result;
  } catch (error) {
    console.error('Error updating material download count:', error);
    return null;
  }
}
