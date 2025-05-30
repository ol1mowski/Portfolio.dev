import mongoose, { Schema, Document, Model } from 'mongoose';
import { ProjectType } from '@/types/PostType.types';
import { dbConnect } from '../db_connect';

export interface ProjectDocument extends Document {
  projects: ProjectType[];
}

const projectSchema = new Schema({
  projects: [
    {
      id: {
        type: String,
      },
      date: {
        type: String,
      },
      description: {
        type: String,
      },
      githubLink: {
        type: String,
      },
      image: {
        type: String,
      },
      liveLink: {
        type: String,
      },
      reverse: {
        type: Boolean,
      },
      technologies: {
        type: [String],
      },
      title: {
        type: String,
      },
    },
  ],
});

// Funkcja do uzyskania modelu Projects
export async function getProjectsModel(): Promise<Model<ProjectDocument>> {
  await dbConnect();

  // Sprawdzenie czy model już istnieje
  if (mongoose.models && mongoose.models.Projects) {
    return mongoose.models.Projects as Model<ProjectDocument>;
  }

  // Utworzenie nowego modelu jeśli nie istnieje
  return mongoose.model<ProjectDocument>('Projects', projectSchema);
}
