const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.put('/:id', userController.update);
router.delete('/:id', userController.delete);
router.get('/:id', userController.getUser);

module.exports = router;
