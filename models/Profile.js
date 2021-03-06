const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  bio: {
    type: String
  },
  location: {
      type: String
  },
  email: {
    type: String,
    required: true
  },
  website: {
    type: String
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);