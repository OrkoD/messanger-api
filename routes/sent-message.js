const express = require('express');
const router = express.Router();
const { addMessage, getMessages, getMessage, deleteMessage } = require('../controllers/sent-message');

router.post('/', addMessage);
router.get('/', getMessages);
router.get('/:id', getMessage);
router.delete('/:id', deleteMessage);

module.exports = router;
