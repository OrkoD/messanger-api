const { Message } = require('../models/message');
const { validateMessage } = require('../units/validation');

module.exports.getMessages = async (req, res) => {
  const messages = await Message.find();
  return res.status(200).json( messages );
};

module.exports.getConversationMessages = async (req, res) => {
  const messages = await Message.find({conversationId: req.params.id}).sort('createdAt');
  return res.status(200).json( messages );
};

module.exports.getMessage = async (req, res) => {
  const message = await Message.findById( req.params.id );
  res.status(200).json( message );
};

module.exports.addMessage = async (req, res) => {
  const { error } = validateMessage( req.body );
  if ( error ) return res.status(400).json({
    success: false,
    message: error.details[0].message
  })

  const message = Message( req.body );
  await message.save();
  return res.json( message );
};

module.exports.deleteMessage = async (req, res) => {
  const message = await Message.findByIdAndRemove({ _id: req.params.id });
  return res.status(200).json({
    success: true,
    message
  });
};

module.exports.updateMessage = async (req, res) => {
  const message = await Message.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  );
  return res.status(200).json({
    success: true,
    message
  })
};
