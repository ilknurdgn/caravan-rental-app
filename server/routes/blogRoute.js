const router = require('express').Router();
const blogController = require('../controllers/blogController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/add', authMiddleware, blogController.add);

module.exports = router;
