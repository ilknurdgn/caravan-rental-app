const express = require('express');
const router = express.Router();
const caravanController = require('../controllers/caravanController');

router.post('/add', caravanController.add);
router.put('/:id', caravanController.updateCaravan);
router.delete('/:id', caravanController.deleteCaravan);
router.get('/:id', caravanController.getSingleCaravan);
router.get('/', caravanController.getAllCaravans);

module.exports = router;
