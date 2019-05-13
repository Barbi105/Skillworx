const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  //stuff goes here...
  rating: 
})

const rating = mongoose.model("rating", ratingSchema);

module.exports = rating;