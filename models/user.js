const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: true
  },
  lastName: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required:true
    // match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  image: String,
  rating: Number,
  skills: { type: Array },
  favorites: Array,

  // an array to store ObjectIds
  // allow us to populate the User with associated Jobs
  jobs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Job"
    }
  ],
  // an embedded document to store Messages
  messages: [
    {
      body: String,
      createdAt: {type: Date, default: Date.now},
      to: [{
            type: Schema.Types.ObjectId,
            ref: "User"
          }],
          // socket#ID, room
      chatId: String
    }
  ]
});
//encrypting passwords user input
userSchema.pre("save", function(next) {
  this.password = bcrypt.hashSync(
    this.password,
    bcrypt.genSaltSync(10),
    null
  );
  next()
});
const User = mongoose.model("User", userSchema);
//check if password matches
User.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};


module.exports = User;
