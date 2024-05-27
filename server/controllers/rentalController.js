const Rental = require('../models/rentalModel');
const User = require('../models/userModel');
const Caravan = require('../models/caravanModel');

// ADD BOOKING
exports.booking = async (req, res) => {
  try {
    const userId = req.user._id.toString();

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

    caravan.notAvailableDates.push({
      start: req.body.startDate,
      end: req.body.endDate,
    });

    await caravan.save();

    res.status(200).json(rental);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET BOOKING
exports.getSingleBooking = async (req, res) => {
  try {
    const rentalId = req.params.id;
    const rental = await Rental.findById(rentalId).populate('caravanId');

    if (!rental) {
      return res.status(404).json({ message: 'Rental not found!' });
    }

    const currentDate = new Date();

    if (
      currentDate > rental.endDate &&
      rental.status !== 'completed' &&
      rental.status !== 'cancelled'
    ) {
      rental.status = 'completed';

      await rental.save();
    }

    res.status(200).json(rental);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET ALL BOOKINGS
exports.getBookings = async (req, res) => {
  try {
    const userId = req.user._id.toString();

    const rentals = await Rental.find({ userId: userId }).populate('caravanId');

    for (let rental of rentals) {
      const currentDate = new Date();

      if (
        currentDate > rental.endDate &&
        rental.status !== 'completed' &&
        rental.status !== 'cancelled'
      ) {
        rental.status = 'completed';

        await rental.save();
      }
    }

    res.status(200).json(rentals);
  } catch (error) {
    res.status(500).json(error);
  }
};

// CANCEL BOOKING
exports.cancelBooking = async (req, res) => {
  try {
    const rentalId = req.params.id;

    let rental = await Rental.findById(rentalId);

    if (!rental) {
      return res.status(404).json({ message: 'Rental not found!' });
    }

    if (rental.status === 'completed') {
      return res
        .status(409)
        .json({ message: 'Rental is complete, cannot be canceled' });
    } else if (rental.status === 'cancelled') {
      return res.status(409).json({ message: 'Rental is already cancelled!' });
    }

    rental = await Rental.findOneAndUpdate(
      { _id: rentalId },
      { status: 'cancelled' },
      { new: true }
    );

    const caravan = await Caravan.findById(rental.caravanId);

    caravan.notAvailableDates.map((notAvailableDate) => {
      if (
        notAvailableDate.start.getTime() === rental.startDate.getTime() &&
        notAvailableDate.end.getTime() === rental.endDate.getTime()
      ) {
        const index = caravan.notAvailableDates.indexOf(notAvailableDate);
        if (index > -1) {
          caravan.notAvailableDates.splice(index, 1);
          caravan.save();
        }
      }
    });

    res.status(200).json(rental);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
