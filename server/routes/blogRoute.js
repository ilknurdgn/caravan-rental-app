const router = require('express').Router();
const blogController = require('../controllers/blogController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/add', authMiddleware, blogController.add);
router.put('/update/:id', authMiddleware, blogController.update);

module.exports = router;
