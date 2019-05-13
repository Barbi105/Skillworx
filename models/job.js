const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: {type: String, unique: true},
  description: String,
  location: String,
  date: Date,
  payRate: String
})

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;