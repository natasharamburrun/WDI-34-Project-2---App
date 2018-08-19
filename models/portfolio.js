const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: String,
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true});

const portfolioSchema = new mongoose.Schema({
  name: String,
  occupation: String,
  salon: String,
  email: String,
  address: String,
  tel: String,
  about: String,
  price: String,
  url: String,
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  map: {
    lat: { type: Number },
    lng: { type: Number }
  },
  // pictures: [pictureSchema]
  comments: [commentSchema]
});

module.exports = mongoose.model('portfolio', portfolioSchema);
