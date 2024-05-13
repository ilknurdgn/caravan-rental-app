const router = require('express').Router();
const rentalController = require('../controllers/rentalController');

router.post('/booking', rentalController.booking);

module.exports = router;
