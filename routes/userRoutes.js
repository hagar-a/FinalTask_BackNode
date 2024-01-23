const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');


router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserController.registerUser(username, password);
    res.json(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get user profile
router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await UserController.getUserProfile(userId);
    res.json(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Follow a user
router.post('/:userId/follow/:FollowId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const FollowId = req.params.FollowId;
    await UserController.followUser(userId, FollowId);
    res.send('followed successfully');
  } catch (error) {
    res.status(500).send(error);
  }
});

// Unfollow a user
router.post('/:userId/unfollow/:UnfollowId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const UnfollowId = req.params.UnfollowId;
    await UserController.unfollowUser(userId, UnfollowId);
    res.send('unfollowed successfully');
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;