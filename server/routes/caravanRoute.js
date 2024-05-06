const express = require('express');
const router = express.Router();
const caravanController = require('../controllers/caravanController');

router.post('/add', caravanController.add);
module.exports = router;
