const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  collection: 'customers'
});

// Dodaj indeks dla email
CustomerSchema.index({ email: 1 }, { unique: true });

// Pre-save middleware
CustomerSchema.pre('save', function(next) {
  this.email = this.email.toLowerCase();
  next();
});

const Customers = mongoose.models.customers || mongoose.model('customers', CustomerSchema);

module.exports = { Customers };
