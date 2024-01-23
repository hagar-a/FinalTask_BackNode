const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
 },
  password: {
    type: String,
    required: true
  },
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
