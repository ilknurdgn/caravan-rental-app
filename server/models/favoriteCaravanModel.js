const mongoose = require('mongoose');

const favoriteCaravanSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: true,
    },
    favoriteCaravans: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Caravan',
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('FavoriteCaravan', favoriteCaravanSchema);
