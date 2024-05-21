const Comment = require('../models/commentModel');
const User = require('../models/userModel');
const Caravan = require('../models/caravanModel');
const Rental = require('../models/rentalModel');

// ADD COMMENT
exports.add = async (req, res) => {
  try {
    const caravanId = req.body.caravanId;
    const caravan = await Caravan.findById(caravanId);

    if (!caravan) {
      res.status(404).json({ message: 'Caravan not found!' });
    }

    const userId = req.body.userId;
    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({ message: 'User not found!' });
    }

    const rental = await Rental.findOne({
      userId: userId,
      caravanId: caravanId,
      status: 'completed',
    });

    if (!rental) {
      res.status(403).json({
        message: 'You can only comment on rentals you have completed',
      });
    }

    const newComment = new Comment({
      user: userId,
      caravan: caravanId,
      text: req.body.text,
    });

    const comment = await newComment.save();

    res.status(200).json({ message: 'Comment saved', comment: comment });
  } catch (error) {
    res.status(500).json({ message: 'Comment could not be saved', error });
  }
};
