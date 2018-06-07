const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: String,
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true});

// const pictureSchema = new mongoose.Schema({
//   title: String,
//   url: String,
//   creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
//   comments: [commentSchema]
// });

const portfolioSchema = new mongoose.Schema({
  name: String,
  salon: String,
  email: String,
  address: String,
  tel: Number,
  about: String,
  price: String,
  url: String,
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  // pictures: [pictureSchema]
  comments: [commentSchema]
});

module.exports = mongoose.model('portfolio', portfolioSchema);
