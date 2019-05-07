const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String, 
    required: true,
    unique: true
  },
  image: String,
  rating: Number,
  skills: {type: Array, required: true},
  favorites: Array,

  // an array to store ObjectIds
  // allow us to populate the User with associated Jobs
  jobs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Job"
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;