const mongoose = require('mongoose');
const { mongoURL } = require('../config/keys');

module.exports = () => {
  mongoose.connect(mongoURL, {
    useCreateIndex: true,
    useNewUrlParser: true
  })
    .then(console.log('Connected to MongoDB...'))
    .catch(err => console.log(err));
};
