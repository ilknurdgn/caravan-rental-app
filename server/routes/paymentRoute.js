const router = require('express').Router();
const paymentController = require('../controllers/paymentController');

router.post('/createPayment', paymentController.createPayment);

module.exports = router;
