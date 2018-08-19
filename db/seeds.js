const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Portfolio = require('../models/portfolio');
const portfolioData = require('./data/portfolio');
const User = require('../models/user');
const userData = require('./data/user');
const Picture = require('../models/picture');
const pictureData = require('./data/picture');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hair', (err, db) => {
  db.dropDatabase();

  Portfolio.create(portfolioData)
    .then(portfolio => console.log(`${portfolio.length} portfolio created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());

  User.create(userData)
    .then(user => console.log(`${user.length} user created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());

  Picture.create(pictureData)
    .then(picture => console.log(`${picture.length} picture created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());

});
