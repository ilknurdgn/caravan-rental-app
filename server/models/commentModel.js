const { default: mongoose } = require('mongoose');
const mongose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    caravan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Caravan',
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comment', commentSchema);
