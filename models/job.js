const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: {type: String, unique: true},
  description: String,
  zipcode: Number,
  date: Date,
  payRate: String,
  type: String
})

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;