import mongoose, { Schema, Document, Model } from 'mongoose';

export interface MaterialDocument extends Document {
  title: string;
  image: string;
  slug: string;
  type: 'ebook' | 'note';
  category: string;
  categoryType: 'techniczne' | 'rozwojowe';
  tags: string[];
  description: string;
  downloadCount: number;
  size: string;
  format: string;
  publishDate: Date;
  isPremium: boolean;
  createdAt: Date;
}

const MaterialSchema: Schema = new Schema<MaterialDocument>({
  title: { type: String, required: true },
  image: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  type: { type: String, enum: ['ebook', 'note'], required: true },
  category: { type: String, required: true },
  categoryType: { type: String, enum: ['techniczne', 'rozwojowe'], required: true },
  tags: [{ type: String }],
  description: { type: String, required: true },
  downloadCount: { type: Number, default: 0 },
  size: { type: String, required: true },
  format: { type: String, required: true },
  publishDate: { type: Date, default: Date.now },
  isPremium: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export const Materials: Model<MaterialDocument> =
  mongoose.models.Materials || mongoose.model<MaterialDocument>('Materials', MaterialSchema);
