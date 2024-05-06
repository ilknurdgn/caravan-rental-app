const Caravan = require('../models/caravanModel');

//CREATE
exports.add = async (req, res) => {
  try {
    const newCaravan = new Caravan({
      title: req.body.title,
      location: req.body.location,
      type: req.body.type,
      fuel: req.body.fuel,
      gear: req.body.gear,
      maxGuests: req.body.maxGuests,
      dailyPrice: req.body.dailyPrice,
      description: req.body.description,
    });

    const caravan = await newCaravan.save();
    res.status(200).json(caravan);
  } catch (error) {
    res.status(500).json(error);
  }
};
