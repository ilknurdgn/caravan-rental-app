const router = require('express').Router();
const commentController = require('../controllers/commentController');

router.post('/add', commentController.add);

module.exports = router;
