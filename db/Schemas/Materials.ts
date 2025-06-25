import mongoose, { Schema, Document, Model } from 'mongoose';
import { MaterialType } from '@/types/Materials.types';

export interface MaterialDocument extends Document, Omit<MaterialType, 'id'> {
  createdAt: Date;
  updatedAt: Date;
}

const MaterialsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ['ebook', 'note'],
      required: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    categoryType: {
      type: String,
      enum: ['techniczne', 'rozwojowe'],
      required: true,
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    description: {
      type: String,
      required: true,
      trim: true,
    },
    downloadCount: {
      type: Number,
      default: 0,
    },
    size: {
      type: String,
      required: true,
    },
    format: {
      type: String,
      required: true,
    },
    publishDate: {
      type: Date,
      default: Date.now,
    },
    isPremium: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

MaterialsSchema.index({ title: 'text', description: 'text' });
MaterialsSchema.index({ type: 1 });
MaterialsSchema.index({ category: 1 });
MaterialsSchema.index({ categoryType: 1 });
MaterialsSchema.index({ tags: 1 });
MaterialsSchema.index({ isPremium: 1 });

export const Materials: Model<MaterialDocument> =
  mongoose.models && mongoose.models.Materials
    ? (mongoose.models.Materials as Model<MaterialDocument>)
    : mongoose.model<MaterialDocument>('Materials', MaterialsSchema);

export default Materials;
