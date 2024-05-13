const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: ture,
    },
    caravan: {
      type: mongoose.Schema.ObjectId,
      ref: 'Caravan',
      required: ture,
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
