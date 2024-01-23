const User = require('../models/userModel');

async function registerUser(username, email, password) {
  try {
    const user = await User.create({ username, email, password });
    return user;
  } catch (error) {
    console.log(error);
  }
}
/////////////////////////////////////////////////////////////////////
async function loginUser(username, password) {
  try {
    const user = await User.findOne({ username });
    if (!user) {
    console.log('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log('Invalid password');
    }

    return {username: user.username};
  } catch (error) {
   console.log(error);
  }
}
/////////////////////////////////////////////////////////////////////////////
async function getAllUsers() {
  try {
    const users = await User.find({}, 'firstName');
    return users;
  } catch (error) {
   console.log(error);
  }
}
/////////////////////////////////////////////////////////////////////////
async function deleteUser(email) {
  try {
    await User.deleteOne({ email });
    return 'User deleted';
  } catch (error) {
    console.log(error);
  }
}
//////////////////////////////////////////////////////////////////////////
async function editUser(email, editValue) {
  try {
    const user = await User.findOneAndUpdate({ email }, editValue);
    return { user };
  } catch (error) {
    console.log(error);
  }
}
/////////////////////////////////////////////////////////////////////////
async function followUser(userId, currentUser) {
  try {
    const isAlreadyFollowing = await User.findByIdAndUpdate(currentUser, { $addToSet: { following: userId } });
    
    if (isAlreadyFollowing) {
      console.log('already following');;
    }

    return 'followed successfully';
  } catch (error) {
    console.log(error);
  }
}
/////////////////////////////////////////////////////////////////////////
async function unfollowUser(userId, currentUser) {
  try {
    const isFollowingUser = await User.findByIdAndUpdate(currentUser, { $pull: { following: userId } });
    
    if (!isFollowingUser) {
      console.log('not following');
    }

    return 'unfollowed successfully';
  } catch (error) {
    console.log(error);
  }
}

/////////////////////////////////////////////////////////////////////////////
async function searchUsers(query) {
  try {
    const users = await User.find({ username: { $regex: query, $options: 'i' } });
    return users;
  } catch (error) {
    console.log(error);
  }
}
//////////////////////////////////////////////////////////////////////////

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  deleteUser,
  editUser,
  followUser,
  unfollowUser,
  searchUsers,
};