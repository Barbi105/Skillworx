const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: String,
  description: String,
  location: String,
  date: Date,
  comments: String
})

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;