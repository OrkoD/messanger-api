const Joi = require('joi');

const validateContact = contact => {
  const schema = {
    fullName: Joi.string().min(3).max(50),
    email: Joi.string().email().min(4).max(50),
    phone: Joi.string().min(4).max(50),
    gender: Joi.string()
  }
  return Joi.validate( contact, schema );
}

const validateMessage = message => {
  const schema = {
    title: Joi.string().required().min(1).max(50),
    text: Joi.string().required().min(1).max(1000),
    sender: Joi.string().min(1).max(50),
    recipient: Joi.string().min(1).max(50),
    type: Joi.string().required().min(2).max(50)
  }
  return Joi.validate( message, schema );
}

const validateSentMessage = message => {
  const schema = {
    title: Joi.string().required().min(1).max(50),
    text: Joi.string().required().min(1).max(1000),
    recipient: Joi.string().required().min(1).max(50)
  }
  return Joi.validate( message, schema );
}

exports.validateContact = validateContact;
exports.validateMessage = validateMessage;
exports.validateSentMessage = validateSentMessage;
