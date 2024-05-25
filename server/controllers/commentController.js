const Comment = require('../models/commentModel');
const User = require('../models/userModel');
const Caravan = require('../models/caravanModel');
const Rental = require('../models/rentalModel');

// ADD COMMENT
exports.add = async (req, res) => {
  try {
    const caravanId = req.body.caravanId;
    const caravan = await Caravan.findById(caravanId);

    if (!caravan) {
      res.status(404).json({ message: 'Caravan not found!' });
    }

    const objectId = req.user._id;
    const userId = objectId.toString();
    const user = await User.findById(userId);

    const rental = await Rental.findOne({
      userId: userId,
      caravanId: caravanId,
      status: 'completed',
    });

    if (!rental) {
      return res.status(403).json({
        message: 'You can only comment on rentals you have completed',
      });
    }

    const newComment = new Comment({
      user: user.firstName + ' ' + user.lastName,
      caravan: caravanId,
      text: req.body.text,
      score: req.body.score,
    });

    const comment = await newComment.save();

    res.status(200).json({ message: 'Comment saved', comment: comment });
  } catch (error) {
    res.status(500).json({ message: 'Comment could not be saved', error });
  }
};

// UPDATE COMMENT
exports.update = async (req, res) => {
  try {
    const commentId = req.params.id;
    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(403).json({ message: 'Comment not found!' });
    }

    const objectId = req.user._id;
    const userId = objectId.toString();

    if (!comment.user.equals(userId)) {
      return res
        .status(403)
        .json({ message: 'You are not authorized to update this comment' });
    }

    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({ message: 'Comment updated.', updatedComment });
  } catch (error) {
    res.status(500).json({ message: 'Comment could not be updated', error });
  }
};

// DELETE COMMENT
exports.delete = async (req, res) => {
  try {
    const commentId = req.params.id;
    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(403).json({ message: 'Comment not found!' });
    }

    const objectId = req.user._id;
    const userId = objectId.toString();

    if (!comment.user.equals(userId)) {
      return res
        .status(403)
        .json({ message: 'You are not authorized to delete this comment' });
    }

    await Comment.findByIdAndDelete(commentId);

    res.status(200).json({ message: 'Your comment deleted.' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Your comment could not be deleted', error });
  }
};

//GET ALL COMMENTS
exports.getComments = async (req, res) => {
  try {
    const caravanId = req.params.id;
    const caravan = await Caravan.findById(caravanId);

    if (!caravan) {
      return res.status(404).json({ message: 'Caravan not found!' });
    }

    const totalEvaluation = await Comment.find({ caravan: caravanId });

    const comments = await Comment.find({
      caravan: caravanId,
      text: { $ne: null },
    });

    const totalScore = totalEvaluation.reduce(
      (sum, comment) => sum + comment.score,
      0
    );
    const averageScore = totalScore / totalEvaluation.length;

    res.status(200).json({
      comments,
      totalComment: comments.length,
      averageScore,
      totalEvaluation: totalEvaluation.length,
    });
  } catch (error) {
    res.status(500).json({ message: 'Comments could not be get!' });
    console.log(error);
  }
};

//GET SINGLE COMMENT
exports.getSingleComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found!' });
    }

    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: 'Comment could not be get! ' });
  }
};
