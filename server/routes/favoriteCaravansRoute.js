const router = require('express').Router();
const favoriteCaravanController = require('../controllers/favoriteCaravanController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/add', authMiddleware, favoriteCaravanController.add);
router.delete('/delete', authMiddleware, favoriteCaravanController.delete);
router.get(
  '/favoriteCaravansList',
  authMiddleware,
  favoriteCaravanController.favoriteCaravansList
);

module.exports = router;
