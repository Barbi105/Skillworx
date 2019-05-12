const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  message: String,
  createdAt: {type: Date, default: Date.now},
  from: [{
        type: Schema.Types.ObjectId,
        ref: "User"
      }],
  to: String,
  chatId: String
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;