const User = require('../models/userModel');
const Blog = require('../models/blogModel');

//ADD BLOG
exports.add = async (req, res) => {
  try {
    const objectId = req.user._id;
    const userId = objectId.toString();
    const user = await User.findById(userId);

    const newBlog = new Blog({
      user: user.firstName + ' ' + user.lastName,
      title: req.body.title,
      desc: req.body.desc,
      views: 0,
      photo: req.body.photo,
    });

    const blog = await newBlog.save();
    res.status(200).json(blog);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'New blog post could not be added!', error });
  }
};

//UPDATE BLOG
exports.update = async (req, res) => {
  try {
    const blogId = req.params.id;

    const updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({ message: 'Blog updated', updatedBlog: updatedBlog });
  } catch (error) {
    res.status(500).json({ message: 'Blog could not be updated', error });
  }
};
