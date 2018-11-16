const express = require('express');
const router = express.Router();
const { getConversations, getConversation, addConversation, updateConversation, deleteConversation } = require('../controllers/conversation');

router.post('/', addConversation);
router.get('/', getConversations);
router.get('/:id', getConversation);
router.put('/:id', updateConversation);
router.delete('/:id', deleteConversation);

module.exports = router;
