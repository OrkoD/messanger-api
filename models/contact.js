const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 50,
    unique: true
  },
  phone: {
    type: String,
    minlength: 4,
    maxlength: 50,
    required: true
  },
  gender: {
    type: String,
    default: null
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
});

exports.Contact = mongoose.model('Contact', ContactSchema);
