const mongoose = require('mongoose');

const caravanSchema = new mongoose.Schema(
  {
    photos: [
      {
        type: String,
      },
    ],
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
    owner: {
      type: String,
      required: true,
    },
    description: [
      {
        type: String,
      },
    ],
    notAvailableDates: [{ start: Date, end: Date }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Caravan', caravanSchema);
