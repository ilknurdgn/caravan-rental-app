const router = require('express').Router();
const favoriteCaravanController = require('../controllers/favoriteCaravanController');

router.post('/add', favoriteCaravanController.add);

module.exports = router;
