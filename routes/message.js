const express = require('express');
const router = express.Router();
const { addMessage, getMessages, getMessage, deleteMessage, updateMessage, getConversationMessages } = require('../controllers/message');

router.post('/', addMessage);
router.get('/conversation/:id', getConversationMessages);
router.get('/', getMessages);
router.get('/:id', getMessage);
router.delete('/:id', deleteMessage);
router.put('/:id', updateMessage);

module.exports = router;
