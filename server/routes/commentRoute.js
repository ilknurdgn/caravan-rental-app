const router = require('express').Router();
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/add', authMiddleware, commentController.add);
router.put('/update/:id', authMiddleware, commentController.update);

module.exports = router;
