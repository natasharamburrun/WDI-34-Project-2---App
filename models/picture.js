const mongoose = require('mongoose');

const pictureSchema = new mongoose.Schema({
  title: String,
  url: String,
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}

});

module.exports = mongoose.model('Picture', pictureSchema);
