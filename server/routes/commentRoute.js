const router = require('express').Router();
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/add', authMiddleware, commentController.add);
router.put('/update/:id', authMiddleware, commentController.update);
router.delete('/delete/:id', authMiddleware, commentController.delete);
router.get('/getComments/:id', commentController.getComments);

module.exports = router;
