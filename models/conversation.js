const mongoose = require('mongoose');

const ConversationSchema = new mongoose.Schema({
  participant: { type: mongoose.Schema.Types.ObjectId, ref: `Contact` },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
});

exports.Conversation = mongoose.model('Conversation', ConversationSchema);
