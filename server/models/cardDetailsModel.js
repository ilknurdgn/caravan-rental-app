const mongoose = require('mongoose');

const cardDetails = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    cardNumber: {
      type: String,
      required: true,
    },
    nameOnCard: {
      type: String,
      required: true,
    },
    expiryDate: {
      type: Date,
      required: true,
    },
    securityCode: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('CardDetails', cardDetails);
