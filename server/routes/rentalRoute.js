const router = require('express').Router();
const rentalController = require('../controllers/rentalController');

router.post('/booking', rentalController.booking);
router.get('/getSingleBooking/:id', rentalController.getSingleBooking);
router.get('/getBookings', rentalController.getBookings);
router.put('/cancelBooking/:id', rentalController.cancelBooking);

module.exports = router;
