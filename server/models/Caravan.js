const mongoose = require('mongoose');

const caravanSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    fuel: {
      type: String,
    },
    gear: {
      type: String,
    },
    maxGuests: {
      type: Number,
      required: true,
    },
    dailyPrice: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    notAvailableDates: [{ start: Date, end: Date }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Caravan', caravanSchema);
