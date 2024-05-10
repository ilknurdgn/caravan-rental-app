const mongoose = require('mongoose');

const favoriteCaravanSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: true,
    },
    caravan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Caravan',
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('FavoriteCaravan', favoriteCaravanSchema);
