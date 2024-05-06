const express = require('express');
const router = express.Router();
const caravanController = require('../controllers/caravanController');

router.post('/add', caravanController.add);
router.put('/:id', caravanController.updateCaravan);

module.exports = router;
