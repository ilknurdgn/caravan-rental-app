const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.put('/update', authMiddleware, userController.update);
router.delete('/delete', authMiddleware, userController.delete);
router.get('/:id', userController.getUser);

module.exports = router;
