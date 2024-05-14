const router = require('express').Router();
const rentalController = require('../controllers/rentalController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/booking', authMiddleware, rentalController.booking);
router.get('/getSingleBooking/:id', rentalController.getSingleBooking);
router.get('/getBookings', rentalController.getBookings);
router.put(
  '/cancelBooking/:id',
  authMiddleware,
  rentalController.cancelBooking
);

module.exports = router;
