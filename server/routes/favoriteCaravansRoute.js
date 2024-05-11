const router = require('express').Router();
const favoriteCaravanController = require('../controllers/favoriteCaravanController');

router.post('/add', favoriteCaravanController.add);
router.delete('/delete', favoriteCaravanController.delete);
router.get('/get', favoriteCaravanController.getFavoriteCaravans);

module.exports = router;
