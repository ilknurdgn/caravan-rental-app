const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const authenticateToken = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      console.log('Token not found!');
      return res.redirect('/login');
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        return res.redirect('/login');
      } else {
        try {
          const user = await User.findById(decodedToken.id);
          if (!user) {
            return res.status(401).json('Not authorized');
          }

          req.user = user;
          next();
        } catch (error) {
          console.error(error);
          return res.status(500).json('Internal server error');
        }
      }
    });
  } catch (error) {
    console.log(error);
    res.status(401).json('Not authorized');
  }
};

module.exports = authenticateToken;
