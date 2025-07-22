import mongoose, { Schema, Document, Model } from 'mongoose';

export interface MaterialDocument extends Document {
  title: string;
  description: string;
  createdAt: Date;
}

const MaterialSchema: Schema = new Schema<MaterialDocument>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Materials: Model<MaterialDocument> =
  mongoose.models.Materials || mongoose.model<MaterialDocument>('Materials', MaterialSchema);
