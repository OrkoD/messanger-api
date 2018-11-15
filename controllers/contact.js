const { Contact } = require('../models/contact');
const { validateContact } = require('../units/validation');

module.exports.getContacts = async (req, res) => {
  const contacts = await Contact.find();
  return res.status(200).json( contacts );
};

module.exports.getContact = async (req, res) => {
  const contact = await Contact.findById( req.params.id );
  res.status(200).json( contact );
};

module.exports.addContact = async (req, res) => {
  const { error } = validateContact( req.body );
  if ( error ) return res.status(400).json({
    success: false,
    message: error.details[0].message
  })

  let contact = await Contact.findOne( req.body );
  if ( contact ) return res.json({
    success: false,
    message: 'This contact is already exist!'
  })
  contact = Contact( req.body );
  await contact.save();
  return res.json({
    success: true,
    message: 'New contact was successfully added to address book!',
    contact
  });
};

module.exports.updateContact = async (req, res) => {
  const contact = await Contact.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  )
  return res.status(200).json({
    success: true,
    message: 'Contact was updated successfully!',
    contact
  });
};

module.exports.deleteContact = async (req, res) => {
  const contact = await Contact.findOneAndRemove({ _id: req.params.id });
  return res.status(200).json({
    success: true,
    message: 'Contact was deleted successfully!',
    contact
  });
};
