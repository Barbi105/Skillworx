const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {type: String, required: true},
  image: String,
  rating: Number,
  skills: {type: Array, required: true},
  favorites: Array
});

const User = mongoose.model("User", userSchema);

module.exports = User;