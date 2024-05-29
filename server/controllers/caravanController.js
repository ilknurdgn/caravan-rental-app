const Caravan = require('../models/caravanModel');
const minioClient = require('../minioClient');
const multer = require('multer');

//Add a caravan in the DB
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage }).array('photos', 5);

exports.add = async (req, res) => {
  try {
    upload(req, res, async function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      const uploadedPhotos = [];
      for (const file of req.files) {
        const metaData = {
          'Content-Type': file.mimetype,
        };

        await minioClient.fPutObject(
          'vanca',
          `caravans/${file.filename}`,
          file.path,
          metaData
        );

        uploadedPhotos.push(
          `http://89.252.131.245:9000/vanca/caravans/${file.filename}`
        );
      }

      const newCaravan = new Caravan({
        photos: uploadedPhotos,
        title: req.body.title,
        location: req.body.location,
        type: req.body.type,
        fuel: req.body.fuel,
        gear: req.body.gear,
        maxGuests: req.body.maxGuests,
        dailyPrice: req.body.dailyPrice,
        owner: req.body.owner,
        yearOfManufacture: req.body.yearOfManufacture,
        description: req.body.description,
        notAvailableDates: req.body.notAvailableDates,
      });

      const caravan = await newCaravan.save();
      res.status(200).json(caravan);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

//Update a caravan
exports.updateCaravan = async (req, res) => {
  try {
    const updatedCaravan = await Caravan.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedCaravan);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Delete a caravan
exports.deleteCaravan = async (req, res) => {
  try {
    const caravan = await Caravan.findById(req.params.id);
    if (!caravan) {
      return res.status(404).json('Caravan not found');
    }

    const photos = caravan.photos;
    if (photos.length !== 0) {
      for (const photo of photos) {
        try {
          const photoKey = photo.replace(
            'http://89.252.131.245:9000/vanca/',
            ''
          );
          await minioClient.removeObject('vanca', photoKey);
        } catch (error) {
          console.error('Error removing photo from MinIO:', error);
        }
      }
    }

    await Caravan.findByIdAndDelete(req.params.id);
    res.status(200).json('Caravan has been deleted.');
  } catch (error) {
    res.status(500).json(error);
  }
};

//Get a single caravan
exports.getSingleCaravan = async (req, res) => {
  try {
    const caravan = await Caravan.findById(req.params.id);

    res.status(200).json(caravan);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Get caravans
exports.getCaravans = async (req, res) => {
  const regexLocation = new RegExp(req.query.location, 'i');
  const { location, maxGuests, start, end } = req.query;

  const page = req.query.page;
  const limit = req.query.limit;

  try {
    let query = {};

    if (location) {
      query.location = regexLocation;
    }

    if (maxGuests) {
      query.maxGuests = maxGuests;
    }

    if (start && end) {
      query.notAvailableDates = {
        $not: {
          $elemMatch: {
            $and: [
              { start: { $lte: new Date(end) } },
              { end: { $gte: new Date(start) } },
            ],
          },
        },
      };
    }

    const totalCaravans = await Caravan.countDocuments(query);
    const totalPage = Math.ceil(totalCaravans / limit);

    const caravans = await Caravan.find(query)
      .skip((page - 1) * limit)
      .limit(limit);

    res
      .status(200)
      .json({ caravans, totalPage, currentPage: page, totalCaravans });
  } catch (error) {
    res.status(500).json(error);
  }
};
