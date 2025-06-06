import { getProjectsModel } from '../../Schemas/Projects';
import { Opinions } from '../../Schemas/Opinions';
import { dbConnect } from '../../db_connect';
import { Document } from 'mongoose';
import { ProjectsType } from '@/types/PostType.types';
import { OpinionsType } from '@/types/Opinions.types';
import { saveClient } from '@/lib/api/client/client.service';
import { ClientData } from '@/lib/api/client/client.types';
import Posts from '../../Schemas/Posts';

interface CustomerDocument extends Document {
  name: string;
  email: string;
  createdAt: Date;
}

export async function getOpinions(): Promise<OpinionsType[] | null> {
  try {
    await dbConnect();
    const data = await Opinions.find().lean().exec();
    return data as unknown as OpinionsType[];
  } catch (error) {
    console.error('Error fetching opinions:', error);
    return null;
  }
}

export async function getProjects(): Promise<ProjectsType[] | null> {
  try {
    const Projects = await getProjectsModel();
    const data = await Projects.find().lean().exec();
    return data as unknown as ProjectsType[];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return null;
  }
}

export async function getPosts(): Promise<unknown[] | null> {
  try {
    await dbConnect();
    const data = await (Posts as { find: () => { lean: () => { exec: () => Promise<unknown[]> } } })
      .find()
      .lean()
      .exec();
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return null;
  }
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
