const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
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
  sensder: {
    type: String,
    minlength: 1,
    maxlength: 50
  },
  recipient: {
    type: String,
    minlength: 1,
    maxlength: 50
  },
  type: {
    type: String,
    required: true,
    minlength: 2,
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
  },
  converstationId: {
    type: { type: mongoose.Schema.Types.ObjectId, ref: `Conversation` }
  }
})

exports.Message = mongoose.model('Message', MessageSchema);
