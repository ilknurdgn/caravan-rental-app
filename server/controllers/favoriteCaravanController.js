const User = require('../models/userModel');
const Caravan = require('../models/caravanModel');
const FavoriteCaravan = require('../models/favoriteCaravanModel');

// Add favorite caravan
exports.add = async (req, res) => {
  try {
    const userId = req.body.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const caravanId = req.body.caravanId;
    const caravan = await Caravan.findById(caravanId);

    if (!caravan) {
      return res.status(404).json({ message: 'Caravan not found' });
    }

    //Find your favorite caravans record
    let favoriteCaravan = await FavoriteCaravan.findOne({ user: userId });

    if (!favoriteCaravan) {
      // If there is no favorite caravans record, create a new record
      favoriteCaravan = await new FavoriteCaravan({
        user: userId,
        favoriteCaravans: [caravanId],
      });
    } else {
      // If a favorite caravans record exists, update the existing record
      if (!favoriteCaravan.favoriteCaravans.includes(caravanId)) {
        favoriteCaravan.favoriteCaravans.push(caravanId);
      }
    }

    favoriteCaravan.save();
    res.status(201).json({
      message: 'Caravan added to favorites successfully',
      favoriteCaravan,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
