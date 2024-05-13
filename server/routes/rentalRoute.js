const router = require('express').Router();
const rentalController = require('../controllers/rentalController');

router.post('/booking', rentalController.booking);
router.get('/getBookings', rentalController.getBookings);

module.exports = router;
