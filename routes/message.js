const express = require('express');
const router = express.Router();
const { addMessage, getMessages, getMessage, deleteMessage, updateMessage } = require('../controllers/message');

router.post('/', addMessage);
router.get('/', getMessages);
router.get('/:id', getMessage);
router.delete('/:id', deleteMessage);
router.put('/:id', updateMessage);

module.exports = router;
