const mongoose = require('mongoose');

const SentMessageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50
  },
  text: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 1000
  },
  recipient: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  starred: {
    type: Boolean,
    default: false
  }
})

exports.SentMessage = mongoose.model('SentMessage', SentMessageSchema);
