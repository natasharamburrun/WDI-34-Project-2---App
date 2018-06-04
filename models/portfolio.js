const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: String,
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

const pictureSchema = new mongoose.Schema({
  title: String,
  url: String,
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  comments: [commentSchema]
});

const portfolioSchema = new mongoose.Schema({
  title: String,
  url: String,
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  pictures: [pictureSchema]
});

module.exports = mongoose.model('portfolio', portfolioSchema);
