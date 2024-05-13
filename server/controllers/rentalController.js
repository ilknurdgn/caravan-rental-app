const Rental = require('../models/rentalModel');
const User = require('../models/userModel');
const Caravan = require('../models/caravanModel');

// ADD BOOKING
exports.booking = async (req, res) => {
  try {
    const userId = req.body.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }

    const caravanId = req.body.caravanId;
    const caravan = await Caravan.findById(caravanId);

    if (!caravan) {
      return res.status(404).json({ message: 'Caravan not found!' });
    }

    const newRental = new Rental({
      userId: userId,
      caravanId: caravanId,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      totalPrice: req.body.totalPrice,
      status: 'continues',
    });

    const rental = await newRental.save();

    res.status(200).json(rental);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET ALL BOOKINGS
exports.getBookings = async (req, res) => {
  try {
    const userId = req.body.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }

    const rentals = await Rental.find({ userId: userId });

    for (let rental of rentals) {
      const currentDate = new Date();

      if (currentDate > rental.endDate && rental.status !== 'completed') {
        rental.status = 'completed';

        await rental.save();
      }
    }

    res.status(200).json(rentals);
  } catch (error) {
    res.status(500).json(error);
  }
};
