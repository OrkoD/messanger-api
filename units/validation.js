const Joi = require('joi');

const validateContact = contact => {
  const schema = {
    fullName: Joi.string().required().min(3).max(50),
    email: Joi.string().email().required().min(4).max(50),
    phone: Joi.string().required().min(4).max(50),
    gender: Joi.string()
  }
  return Joi.validate( contact, schema );
}

const validateMessage = message => {
  const schema = {
    title: Joi.string().required().min(1).max(50),
    text: Joi.string().required().min(1).max(1000),
    sender: Joi.string().required().min(1).max(50),
    type: Joi.string().required().min(2).max(50)
  }
  return Joi.validate( message, schema );
}

const validateSentMessage = message => {
  const schema = {
    title: Joi.string().required().min(1).max(50),
    text: Joi.string().required().min(1).max(1000),
    recipient: Joi.string().required().min(1).max(50),
    type: Joi.string().required().min(2).max(50)
  }
  return Joi.validate( message, schema );
}

exports.validateContact = validateContact;
exports.validateMessage = validateMessage;
exports.validateMessage = validateSentMessage;
