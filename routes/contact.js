const express = require('express');
const router = express.Router();
const { getContacts, getContact, addContact, updateContact, deleteContact } = require('../controllers/contact');

router.post('/', addContact);
router.get('/', getContacts);
router.get('/:id', getContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

module.exports = router;
