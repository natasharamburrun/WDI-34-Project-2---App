// const mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
// // const Portfolio = require('../models/portfolio');
// // const portfolioData = require('./data/portfolio');
// const User = require('../models/user');
// const userData = require('./data/user');
//
//
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hair', (err, db) => {
//   db.dropDatabase();
//
//   // Portfolio.create(portfolioData)
//   //   .then(portfolio => console.log(`${portfolio.length} portfolio created`))
//   //   .catch(err => console.log(err))
//   //   .finally(() => mongoose.connection.close());
//
//   User.create(userData)
//     .then(user => console.log(`${user.length} user created`))
//     .catch(err => console.log(err))
//     .finally(() => mongoose.connection.close());
//
// });
