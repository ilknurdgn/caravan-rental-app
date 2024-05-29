const User = require('../models/userModel');
const Blog = require('../models/blogModel');
const minioClient = require('../minioClient');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }).single('photo');

exports.add = (req, res) => {
  upload(req, res, async function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    try {
      const objectId = req.user._id;
      const userId = objectId.toString();
      const user = await User.findById(userId);

      let photoUrl = null;

      if (req.file) {
        const file = req.file;
        const metaData = {
          'Content-Type': file.mimetype,
        };
        await minioClient.fPutObject(
          'vanca',
          `blogs/${file.filename}`,
          file.path,
          metaData
        );
        photoUrl = `http://89.252.131.245:9000/vanca/blogs/${file.filename}`;
      }

      const newBlog = new Blog({
        userId: userId,
        user: `${user.firstName} ${user.lastName}`,
        title: req.body.title,
        desc: req.body.desc,
        views: 0,
        photo: photoUrl,
      });

      const blog = await newBlog.save();
      res.status(200).json(blog);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'New blog post could not be added!', error });
    }
  });
};

//UPDATE BLOG
exports.update = async (req, res) => {
  upload(req, res, async function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    try {
      const blogId = req.params.id;
      const blog = await Blog.findById(blogId);

      if (!blog) {
        return res.status(404).json({ message: 'Blog not found!' });
      }

      if (req.file) {
        if (blog.photo) {
          const oldPhotoKey = blog.photo.replace(
            'http://89.252.131.245:9000/vanca/',
            ''
          );
          await minioClient.removeObject('vanca', oldPhotoKey);
        }

        const file = req.file;
        const metaData = {
          'Content-Type': file.mimetype,
        };

        await minioClient.fPutObject(
          'vanca',
          `blogs/${file.filename}`,
          file.path,
          metaData
        );

        req.body.photo = `http://89.252.131.245:9000/vanca/blogs/${file.filename}`;
      }

      const updatedBlog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $set: req.body,
        },
        { new: true }
      );

      res
        .status(200)
        .json({ message: 'Blog updated', updatedBlog: updatedBlog });
    } catch (error) {
      res.status(500).json({ message: 'Blog could not be updated', error });
    }
  });
};

// DELETE BLOG
exports.delete = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json('Blog not found!');
    }

    const photoKey = blog.photo.replace(
      'http://89.252.131.245:9000/vanca/',
      ''
    );
    await minioClient.removeObject('vanca', photoKey);

    await Blog.findByIdAndDelete(blogId);

    res.status(200).json('Blog has been deleted');
  } catch (error) {
    res.status(500).json({ message: 'Blog could not be deleted.', error });
  }
};

//GET ALL BLOGS
exports.getBlogs = async (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;
  try {
    const totalBlog = await Blog.countDocuments();
    const totalPage = Math.ceil(totalBlog / limit);

    const blogs = await Blog.find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.status(200).json({ blogs, totalPage, currentPage: page });
  } catch (error) {
    res.status(500).json({ message: 'Blogs could not be get!', error });
  }
};

//GET SINGLE BLOG
exports.getSingleBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found!' });
    }

    blog.views = blog.views + 1;
    await blog.save();

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Blog could not be get!' });
  }
};
