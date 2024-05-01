const User = require('../models/User');
const jwt = require('jsonwebtoken');

const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      res.status(401).json({
        succeesseded: false,
        error: 'no token avilable',
      });
    }

    req.user = await User.findById(
      jwt.verify(token, process.env.JWT_SECRET).id
    );

    next();
  } catch (error) {
    res.status(401).json('Not authorized');
  }
};

module.exports = authenticateToken;
