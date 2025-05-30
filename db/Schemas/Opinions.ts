import mongoose, { Schema, Document, Model } from 'mongoose';
import { OpinionsType } from '@/types/Opinions.types';

export interface OpinionDocument extends Document {
  opinions: OpinionsType['opinions'];
}

const opinionsSchema = new Schema({
  opinions: [
    {
      content: {
        type: String,
      },
      link: {
        type: String,
      },
      companyImage: {
        type: String,
      },
      companyName: {
        type: String,
      },
    },
  ],
});

export const Opinions: Model<OpinionDocument> =
  mongoose.models && mongoose.models.opinions
    ? (mongoose.models.opinions as Model<OpinionDocument>)
    : mongoose.model<OpinionDocument>('opinions', opinionsSchema);
