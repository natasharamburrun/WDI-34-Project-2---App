// const mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
// const Portfolio = require('../models/portfolio');
// const portfolioData = require('./data/portfolio');
//
//
//
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hair', (err, db) => {
//   db.dropDatabase();
//
//   Portfolio.create(portfolioData)
//     .then(portfolio => console.log(`${portfolio.length} portfolio created`))
//     .catch(err => console.log(err))
//     .finally(() => mongoose.connection.close());
//
// });
