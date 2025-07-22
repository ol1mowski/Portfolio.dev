'use server';

import { getProjectsModel } from '@/db/Schemas/Projects';
import { ProjectsType } from '@/types/PostType.types';

export const getProjects = async (): Promise<ProjectsType[] | null> => {
  try {
    const Projects = await getProjectsModel();
    const data = await Projects.find().lean().exec();

    const serializedData = data.map(item => ({
      ...item,
      _id: item._id ? item._id.toString() : undefined,
    }));

    return serializedData as unknown as ProjectsType[];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return null;
  }
};
