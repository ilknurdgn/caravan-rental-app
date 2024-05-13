const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    caravanId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Caravan',
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['continues', 'cancelled', 'completed'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Rental', rentalSchema);
