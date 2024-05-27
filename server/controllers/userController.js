const bcrypt = require('bcrypt');
const User = require('../models/userModel');

//UPDATE
exports.update = async (req, res) => {
  const userId = req.user._id.toString();

  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'User information could not be updated', error });
  }
};

//DELETE
exports.delete = async (req, res) => {
  const userId = req.user._id.toString();

  try {
    await User.findByIdAndDelete(userId);
    res.status(200).json('User has been deleted.');
  } catch (error) {
    res.status(500).json({ message: 'User could not be deleted.', error });
  }
};

//GET USER
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;

    res.status(200).json(others);
  } catch (error) {
    res.status(500).json({ message: 'User not found!', error });
  }
};
