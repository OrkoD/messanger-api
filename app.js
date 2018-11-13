const express = require('express');
const app = express();
const morgan = require('morgan');
const err = require('./middleware/error');
const cors = require('cors');

const contactRoutes = require('./routes/contact');
const messageRouter = require('./routes/message');
const sentMessageRoutes = require('./routes/sent-message');

app.use( morgan('tiny') );
app.use( cors() );
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/contacts', contactRoutes);
app.use('/api/messages', messageRouter);
app.use('/api/sent-messages', sentMessageRoutes);
app.use( err );

module.exports = app;
