const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.put('/:id', authMiddleware, userController.update);
router.delete('/:id', authMiddleware, userController.delete);
router.get('/:id', userController.getUser);

module.exports = router;
