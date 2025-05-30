import mongoose, { Document, Model } from 'mongoose';

export interface ICustomer extends Document {
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICustomerModel extends Model<ICustomer> {
  findByEmail(email: string): Promise<ICustomer | null>;
}

const CustomerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters long'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    collection: 'customers',
  }
);

CustomerSchema.index({ email: 1 }, { unique: true });

CustomerSchema.pre('save', function (next: () => void) {
  if (this.isModified('email')) {
    this.email = this.email.toLowerCase();
  }
  next();
});

CustomerSchema.statics.findByEmail = function (email: string): Promise<ICustomer | null> {
  return this.findOne({ email: email.toLowerCase() }).exec();
};

const Customers = ((mongoose.models && mongoose.models.customers) ||
  mongoose.model<ICustomer, ICustomerModel>('customers', CustomerSchema)) as ICustomerModel;

export { Customers };
