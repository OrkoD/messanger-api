const { SentMessage } = require('../models/sent-message');
const { validateSentMessage } = require('../units/validation');

module.exports.getMessages = async (req, res) => {
  const messages = await SentMessage.find();
  return res.status(200).json( messages );
};

module.exports.getMessage = async (req, res) => {
  const message = await SentMessage.findById( req.params.id );
  res.status(200).json( message );
};

module.exports.addMessage = async (req, res) => {
  const { error } = validateSentMessage( req.body );
  if ( error ) return res.status(400).json({
    success: false,
    message: error.details[0].message
  })

  const message = SentMessage( req.body );
  await message.save();
  return res.json( message );
};

module.exports.deleteMessage = async (req, res) => {
  const message = await SentMessage.findByIdAndRemove({ _id: req.params.id });
  return res.status(200).json({
    success: true,
    message
  });
};
