const express = require('express');
const router = express.Router();
const multer = require('multer');
const BlogController = require('../controllers/BlogController');
const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

/////////////////////////////////////////////////////////////////////
router.post('/create', upload.single('photo'), async (req, res) => {
  try {
    const { title, body, author, tags } = req.body;
    const photo = req.file; 
    const blog = await BlogController.createBlog(title, body, photo, author, tags);
    res.json(blog);
  } catch (error) {
    res.status(500).send(error);
  }
});

////////////////////////////////////////////////////////////
router.get('/all', async (req, res) => {
  try {
    const blogs = await BlogController.getAllBlogs();
    res.json(blogs);
  } catch (error) {
    res.status(500).send(error);
  }
});

///////////////////////////////////////////////////////////////////
router.get('/search', async (req, res) => {
  try {
    const query = req.query;
    const blogs = await BlogController.searchBlogs(query);
    res.json(blogs);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
