const Blog = require('../models/blogModel');

async function createBlog(title, body, photo, tags, author) {
  try {
    const blog = await Blog.create({ title, body, photo, author, tags });
    return blog;
  } catch (error) {
    console.log(error);
  }
}
//////////////////////////////////////////////////////////////////////////
async function updateBlog(id, title, body, photo, tags) {
  try {
    const blog = await Blog.findByIdAndUpdate(id, { title, body, photo, tags });
    return blog;
  } catch (error) {
    console.log(error);

  }
}
///////////////////////////////////////////////////////////////////////
async function deleteBlog(id) {
  try {
    await Blog.findByIdAndRemove(id);
    return 'deleted successfully';
  } catch (error) {
    console.log(error);
  }
}
////////////////////////////////////////////////////////////////////////
async function getBlogById(id) {
  try {
    const blog = await Blog.findById(id);
    return blog;
  } catch (error) {
    console.log(error);
  }
}
/////////////////////////////////////////////////////////////////////
async function getLatestBlogs() {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return blogs;
  } catch (error) {
    console.log(error);
  }
}
///////////////////////////////////////////////////////////////////////
async function searchBlogs(query) {
  try {
    const blogs = await Blog.find({ $or: [{ author: query }, { title: query }, { tags: query }] });
    return blogs;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogById,
  getLatestBlogs,
  searchBlogs,
};
