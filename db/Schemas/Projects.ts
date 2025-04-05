import mongoose, { Schema, Document, Model } from 'mongoose';
import { ProjectType } from '@/types/PostType.type';

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

export const Projects: Model<ProjectDocument> = mongoose.models.Projects || 
  mongoose.model<ProjectDocument>('Projects', projectSchema);
