const { Conversation } = require('../models/conversation');

module.exports.getConversations = async (req, res) => {
  const conversation = await Conversation.find().populate('participant').exec();
  return res.status(200).json( conversation );
};

module.exports.getConversation = async (req, res) => {
  const conversation = await Conversation.findById( req.params.id ).populate('participant').exec();
  res.status(200).json( conversation );
};

module.exports.addConversation = async (req, res) => {
  let conversation = await Conversation.findOne( req.body );
  if ( conversation ) return res.json({
    success: false,
    message: 'This conversation is already exist!'
  })

  conversation = Conversation( req.body );
  // const con = Conversation(req.body);
  // console.log(con);
  await conversation.save();

  return res.json({
    success: true,
    message: 'New conversation was successfully created!',
    conversation
  });
};

module.exports.updateConversation = async (req, res) => {
  const conversation = await Conversation.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  )
  return res.status(200).json({
    success: true,
    message: 'Contact was updated successfully!',
    conversation
  });
};

module.exports.deleteConversation = async (req, res) => {
  const conversation = await Conversation.findOneAndRemove({ _id: req.params.id });
  return res.status(200).json({
    success: true,
    message: 'Contact was deleted successfully!',
    conversation
  });
};
